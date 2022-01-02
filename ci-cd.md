# Configuration d'un workflow CI/CD sur GitHub Actions pour une application React (avec GitHub Pages et Codecov)

## Dans ce tutoriel, je vais vous montrer comment créer un workflow simple que j'utilise sur mes projets personnels avec React.

## Ce workflow créé sur [GitHub Actions](https://github.com/features/actions) sera chargé de tester automatiquement le code source, de générer un rapport de couverture de test et de le télécharger sur [Codecov](https://codecov.io/), de construire et de déployer le projet sur [GitHub Pages](https://pages.github.com/). 


		Tous ces jobs sont activés par un événement push ou pull request sur la branche master.

# Commencer

GitHub Actions vous permet d'automatiser, de personnaliser et d'exécuter des workflows de développement logiciel directement dans votre référentiel GitHub.

Un workflow est un processus automatisé configurable composé d'un ou plusieurs travaux. Vous pouvez configurer vos workflows pour qu'ils s'exécutent lorsqu'une activité spécifique sur GitHub se produit, à une heure planifiée ou lorsqu'un événement en dehors de GitHub se produit.

La configuration du workflow est définie par un fichier YAML. GitHub fournit des modèles de workflow préconfigurés.

Tout d'abord, sur votre référentiel GitHub React App, accédez à la page principale du référentiel, cliquez sur Actions.

Ensuite, vous verrez des suggestions de modèles CI qui conviennent le mieux à votre projet. Vous pouvez utiliser des modèles de workflow comme point de départ pour créer votre workflow personnalisé.

Dans ce cas, cliquez sur Configurer ce workflow, sous le nom du modèle Node.js.

Enfin, vous verrez un fichier YAML par défaut comme celui-ci :

		name: Node.js CI

		on:
		push:
			branches: [ master ]
		pull_request:
			branches: [ master ]

		jobs:
		build:

			runs-on: ubuntu-latest

			strategy:
			matrix:
				node-version: [10.x, 12.x, 14.x]

			steps:
			- uses: actions/checkout@v2
			- name: Use Node.js ${{ matrix.node-version }}
			  uses: actions/setup-node@v1
			  with:
				node-version: ${{ matrix.node-version }}
			- run: npm ci
			- run: npm run build --if-present
			- run: npm test
			
Il y a 2 événements qui déclenchent le workflow sur demande push ou pull. L'environnement virtuel utilisé pour exécuter le workflow est une machine Ubuntu dans la dernière version.

Dans la section des étapes, 2 actions et 3 scripts NPM sont utilisés. La première action actions/checkout@v2est une norme que vous devez inclure dans votre workflow avant d'autres actions lorsque votre workflow nécessite une copie du code de votre référentiel. Le second, comme son nom l'indique, est une configuration pour Node.js, comme vous pouvez le voir, la configuration est réalisée dans différentes versions de Node.js, via un tableau avec toutes les versions utilisées.

Outre ces actions, vous pouvez parcourir et rechercher des actions dans [GitHub Marketplace](https://github.com/marketplace?type=actions) à utiliser dans vos workflows.

GitHub Marketplace est un emplacement central pour vous permettre de trouver des actions créées par la communauté GitHub.

# Génération de rapport de couverture de test

## Commençons par changer le nom, la version Node.js et les scripts NPM utilisés dans le workflow :

		name: CI/CD

		on:
		  push:
			branches: [ master ]
		  pull_request:
			branches: [ master ]

		jobs:
		  build:

			runs-on: ubuntu-latest

			strategy:
			  matrix:
				node-version: [12.x]

			steps:
			- name: Checkout repository
			  uses: actions/checkout@v2

			- name: Set up Node.js ${{ matrix.node-version }}
			  uses: actions/setup-node@v1
			  with:
				node-version: ${{ matrix.node-version }}

			- name: Install dependencies
			  run: npm install

			- name: Run the tests
			  run: npm test

			- name: Build
			  run: npm run build

## Après avoir configuré Node.js, nous installons maintenant les dépendances, exécutons les tests et construisons l'application.
		
		Vous pouvez définir un nom pour chaque étape.

Maintenant, nous allons utiliser Codecov pour télécharger et comparer les rapports de couverture de test. Codecov est l'une des solutions de couverture de code les plus populaires, et elle est totalement gratuite pour les projets open source.

Tout d'abord, allez sur le site Web de [Codecov](https://codecov.io/) et créez un compte, vous pouvez utiliser votre compte GitHub pour vous inscrire.

Ensuite, accédez à votre compte sur le site Web, cliquez sur Référentiels, puis cliquez sur Ajouter un nouveau référentiel et choisissez le référentiel que vous souhaitez utiliser.

**Vous verrez un jeton**, ce jeton ne sera pas utile si votre référentiel est public, sinon, si votre référentiel est privé, **vous devez le copier, car vous devrez l'utiliser plus tard**.

Il y a une action disponible dans [GitHub Marketplace](https://github.com/marketplace/actions/codecov), qui télécharge facilement des rapports sur Codecov, nous l'utiliserons.

La première chose que nous devons faire est de modifier la npm test command pour générer les rapports de test :

		- name: Run the tests and generate coverage report
		  run: npm test -- --coverage

Après cela, incluez l'action suivante dans le workflow :

		- name: Upload coverage to Codecov
		  uses: codecov/codecov-action@v1
		  
Si votre référentiel est privé, vous devez inclure le jeton codecov, via un [secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) qui rend votre jeton accessible dans le workflow. Comme ça: 

		- name: Upload coverage to Codecov
		  uses: codecov/codecov-action@v1
		  with:
			token: ${{ secrets.CODECOV_TOKEN }}
			
**Nous allons créer un secret sur GitHub pour le déploiement dans un instant.**

# Déploiement sur les pages GitHub

Nous utiliserons les pages GitHub pour déployer notre application. 

Les pages GitHub sont des pages publiques hébergées et publiées via GitHub.

Avant d'ajouter de nouvelles étapes au workflow, nous devons installer et configurer un nouveau package dans le projet.

	-	Ajouter la page d'accueil à package.json.
	-	Ouvrez votre package.json et ajoutez un champ de page d'accueil pour votre projet :
	
		"homepage": "https://myusername.github.io/my-app",
		
	-	Installer gh-pages et ajouter deploy à scripts dans package.json.
		
		$ npm install --save gh-pages
	
	-	Ajoutez les scripts suivants dans votre package.json:
	
		"predeploy": "npm run build",
		"deploy": "gh-pages -d build",

### Notes : Le predeploy script s'exécutera automatiquement avant deploy pendant son exécution.

Nous allons maintenant créer un nouveau jeton d'accès, afin de déployer notre application via le workflow.

### Accédez à la zone [Jetons d'accès](https://github.com/settings/tokens) personnels dans les paramètres de développeur de votre profil GitHub et cliquez sur Générer un nouveau jeton.

	-	Remplissez une note (À quoi sert ce jeton ?) et dans la portée du dépôt, sélectionnez uniquement les 4 premières options.
	-	Copiez le jeton généré.
	-	Maintenant, afin d'utiliser ce jeton dans le workflow sur GitHub Actions, nous devons créer un secret pour notre référentiel.
	-	Les secrets sont des variables d'environnement chiffrées qui vous permettent de stocker des informations sensibles dans votre référentiel. Les secrets que vous créez peuvent être utilisés dans les workflows GitHub Actions.
	-	Sur GitHub, accédez à la page principale du référentiel, sous le nom de votre référentiel, cliquez sur Paramètres. Dans la barre latérale gauche, cliquez sur Secrets. Et enfin, cliquez sur Ajouter un nouveau secret.
	-	Tapez un nom pour votre secret dans la zone de saisie Nom, comme ACTIONS_DEPLOY_ACCESS_TOKEN.
	-	Entrez la valeur de votre secret (qui devrait être le jeton d'accès personnel que nous venons de créer).
	-	Cliquez sur Ajouter un secret.

Enfin, nous pouvons inclure le script npm run deploy comme dernière étape de notre flux de travail. Mais, avant cela, nous devrions faire quelques configurations dans Git. Pour s'assurer qu'il aura tous les accès nécessaires pour pouvoir déployer l'application.

Votre dernière étape de votre flux de travail devrait ressembler à ceci :

		- name: Deploy
		  run: |
			git config --global user.name $user_name
			git config --global user.email $user_email
			git remote set-url origin https://${github_token}@github.com/${repository}
			npm run deploy
		  env:
			user_name: 'github-actions[bot]'
			user_email: 'github-actions[bot]@users.noreply.github.com'
			github_token: ${{ secrets.ACTIONS_DEPLOY_ACCESS_TOKEN }}
			repository: ${{ github.repository }}
	
Le nom et l'email ne doivent pas nécessairement être vos vraies informations. 
Et vous devez remplacer ACTIONS_DEPLOY_ACCESS_TOKEN par le nom du secret que vous venez de créer.

La variable github repository obtiendra automatiquement le nom de votre référentiel.

Pour en savoir plus sur les variables d'environnement sur les actions GitHub, veuillez lire cet [article](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)

Après avoir ajouté la commande de déploiement sur votre workflow, cliquez sur Démarrer la validation, puis sur Valider le nouveau fichier.

Votre fichier de workflow final devrait ressembler à ceci :

		name: CI/CD

		on:
		  push:
			branches: [ master ]
		  pull_request:
			branches: [ master ]

		jobs:
		  build:

			runs-on: ubuntu-latest

			strategy:
			  matrix:
				node-version: [12.x]

			steps:
			- name: Checkout repository
			  uses: actions/checkout@v2

			- name: Set up Node.js ${{ matrix.node-version }}
			  uses: actions/setup-node@v1
			  with:
				node-version: ${{ matrix.node-version }}

			- name: Install dependencies
			  run: npm install

			- name: Run the tests and generate coverage report
			  run: npm test -- --coverage

			- name: Upload coverage to Codecov
			  uses: codecov/codecov-action@v1

			- name: Build
			  run: npm run build

			- name: Deploy
			  run: |
				git config --global user.name $user_name
				git config --global user.email $user_email
				git remote set-url origin https://${github_token}@github.com/${repository}
				npm run deploy
			  env:
				user_name: 'github-actions[bot]'
				user_email: 'github-actions[bot]@users.noreply.github.com'
				github_token: ${{ secrets.ACTIONS_DEPLOY_ACCESS_TOKEN }}
				repository: ${{ github.repository }}

Assurez-vous que l'option GitHub Pages dans les paramètres de votre projet GitHub est définie pour utiliser la branche gh-pages.

### Désormais, dans chaque événement de demande push ou pull sur la branche master, le workflow CI/CD sera activé. Et vous pourrez voir si toutes les étapes sont passées ou non.

# Bonus | Ajout de badges de statut dans votre fichier readme.md

Vous pouvez également ajouter un badge d'état de workflow à votre référentiel. Les badges d'état indiquent si un workflow est actuellement en échec ou en réussite. Un endroit courant pour ajouter un badge de statut est dans le fichier README.md de votre référentiel, mais vous pouvez l'ajouter à n'importe quelle page Web que vous souhaitez.

Il s'agit de l'URL par défaut pour l'ajout d'un badge d'état de workflow fourni par GitHub Actions :

		https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg

Si votre workflow utilise le mot-clé name, vous devez référencer le workflow par son nom. Si le nom de votre workflow contient un espace blanc, vous devrez remplacer l'espace par la chaîne URL codée %20.

Pour plus d'informations sur le badge d'état du workflow GitHub Actions, lisez cet [article](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#adding-a-workflow-status-badge-to-your-repository)

Par exemple, ce sera le badge que je mettrai dans mon README.md :

		![CI/CD](https://github.com/pldubeformation/react-workflow/workflows/CI/CD/badge.svg)

Codecov a également fourni un badge que vous pouvez utiliser dans vos projets. Voici un exemple d'URL :

		[![codecov](https://codecov.io/gh/<OWNER>/<REPOSITORY>/branch/master/graph/badge.svg)](https://codecov.io/gh/<OWNER>/<REPOSITORY>)

Dans mon cas, mon URL sera :
		[![codecov](https://codecov.io/gh/pldubeformation/react-workflow/branch/master/graph/badge.svg)](https://codecov.io/gh/pldubeformation/react-workflow)

Vous pouvez également utiliser cet incroyable site Web : [Shields.io](https://shields.io/) pour personnaliser vos badges. En accédant au site Web, vous verrez de nombreuses options de catégories de badges que vous pouvez utiliser, telles que la construction, la couverture du code, la taille, les téléchargements, la licence, etc. Dans chaque catégorie, vous pouvez sélectionner le service que vous utilisez, remplir le nom du référentiel, personnaliser à votre guise et copier le lien du badge.

Par exemple, ce sera mon badge de couverture personnalisé :

		[![Codecov](https://img.shields.io/codecov/c/github/pldubeformation/react-workflow)](https://codecov.io/gh/pldubeformation/react-workflow)

J'ai également inclus un badge de licence :

		![License](https://img.shields.io/github/license/pldubeformation/react-workflow)
		
Vous pouvez explorer le site Web [Shields.io](https://shields.io/) et voir les différentes options de badges disponibles.

# Dépendances de mise en cache

Pour rendre vos flux de travail plus rapides et plus efficaces, vous pouvez créer et utiliser des caches pour les dépendances et autres fichiers couramment réutilisés.

GitHub peut mettre en cache les dépendances que vous utilisez fréquemment dans les workflows. Les tâches sur les exécuteurs hébergés sur GitHub démarrent dans un environnement virtuel propre et doivent télécharger des dépendances à chaque fois, ce qui entraîne une utilisation accrue du réseau, une durée d'exécution plus longue et des coûts accrus.

Pour mettre en cache les dépendances d'un travail, vous devrez utiliser l' cacheaction de GitHub . L'action récupère un cache identifié par une clé unique. Pour plus d'informations, voir [actions/cache](https://github.com/actions/cache)

Dans notre cas, nous pouvons créer un nouveau cache lorsque les packages dans le package-lock.jsonfichier changent ou lorsque le système d'exploitation du coureur change. La clé de cache utilise des contextes et des expressions pour générer une clé qui inclut le système d'exploitation du coureur et un hachage SHA-256 du package-lock.jsonfichier.

Vous devez inclure l'extrait de code suivant avant d'installer les dépendances :

	  - name: Cache dependencies
		  uses: actions/cache@v2
		  with:
			path: |
			  **/node_modules
			key: ${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}

Le key est obligatoire. C'est la clé créée lors de l'enregistrement d'un cache et la clé utilisée pour rechercher un cache. Les clés ont une longueur maximale de 512 caractères.

Le path est obligatoire. Il s'agit du chemin du fichier sur le coureur à mettre en cache ou à restaurer. Il peut s'agir d'un chemin absolu ou relatif au répertoire de travail. L'entrée du chemin doit être un répertoire. Vous ne pouvez pas mettre en cache un seul fichier.

Le restore-keys est un paramètre facultatif. Il s'agit d'une liste ordonnée de clés alternatives à utiliser pour trouver le cache si aucun accès au cache ne s'est produit pour la clé.

La cache action tentera de restaurer un cache en fonction de ce que keyvous fournissez. Lorsque l'action trouve un cache, l'action restaure les fichiers mis en cache dans le path que vous configurez. S'il n'y a pas de correspondance exacte, l'action crée une nouvelle entrée de cache si le travail se termine avec succès. Le nouveau cache utilisera que le key que vous avez fourni et contient les fichiers dans le répertoire.

### Les références
	-	https://github.com/features/actions
	-	https://www.codecov.io/
	-	https://github.com/codecov/codecov-action
	-	https://pages.github.com/
	-	https://create-react-app.dev/docs/deployment#github-pages
	-	https://shields.io/
	-	https://help.github.com/pt/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
	-	https://github.com/actions/cache

**Juste une note pour ceux qui utilisent yarn à la place de npm: vous pouvez remplacer l'utilisation du mot npm dans les exemples ci-dessus par yarn et cela devrait toujours fonctionner correctement.**
