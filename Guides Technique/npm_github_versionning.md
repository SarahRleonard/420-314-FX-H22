### ACTIONS GITHUB, CI/CD, INTÉGRATION CONTINUE, NPM, INCRÉMENT DE VERSION

# Utilisation des actions Github pour incrémenter automatiquement la version NPM avant les déploiements

## Objectif : Incrémentation automatique du numéro de version avant de publier une application à l'aide d'actions GitHub.

Dernièrement, nous sommes passés aux actions GitHub pour tester et déployer nos bibliothèques et applications. L'une de nos conditions préalables avant de publier une application Web est que nous voulons toujours incrémenter automatiquement le numéro de version de l'application. Nous montrons ce numéro de version à l'utilisateur sur le site Web, et cela nous aide à des fins de débogage et de rapports de bogues.

## Automatisation des étapes manuelles

Pour éviter que les développeurs oublient d'incrémenter le numéro de version à la main, nous avons automatisé ce processus spécialement pour les applications Web en utilisant la commande intégrée de NPM appelée npm version. Cette commande incrémente le numéro de version actuellement donné dans le package.jsonfichier et valide le fichier modifié avec un commit Git.

Cependant, cela pose également quelques problèmes. Étant donné que la npm versioncommande apporte des modifications à la base de code et crée un nouveau commit, nous devons gérer deux commits distincts qui exécutent leurs propres tâches d'action GitHub.

Afin de surmonter ce problème, nous créons deux fichiers de workflow d'action GitHub distincts avec deux responsabilités distinctes.

## Workflow 1 - Incrémenter la version et pousser les modifications

Tout d'abord, nous créons un fichier d'action GitHub appelé .github/workflows/version.yml qui incrémente le numéro de version : 

```
name: NPM Version Manager

on:
  push:
    branches:
      - master

jobs:
  version:
    runs-on: ubuntu-latest
    if: "!startsWith(github.event.head_commit.message, '[RELEASE]')"
    steps:
      - uses: actions/checkout@v2
        with:
          token: ${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}
      - run: git config --global user.name '${{ secrets.GH_PUBLIC_NAME }}'
      - run: git config --global user.email '${{ secrets.GH_EMAIL }}'
      - run: npm version patch -m "[RELEASE] %s"
      - run: git push
```

Comme vous pouvez le voir dans le code, les étapes ne sont exécutées que pour les commits sur la branche master qui ne commencent pas par le préfixe "[RELEASE]". 

En vérifiant chaque message de validation pour le préfixe, nous pouvons nous assurer que nous n'incrémentons le numéro de version que pour les validations générées par un utilisateur.

De plus, vous devez ajuster l'action de paiement pour cloner le code à l'aide d'un [jeton d'accès GitHub personnel](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) disposant d' repoautorisations. 
Si nous ne fournissions pas de jeton d'accès personnel pour l'action de paiement, les actions GitHub ne seraient pas démarrées pour le commit poussé par cette action GitHub. 
Le jeton doit être stocké en tant que secret dans le référentiel GitHub. 
Dans cet exemple, nous avons utilisé le nom de la variable GH_PERSONAL_ACCESS_TOKEN pour stocker et référencer le jeton.

Nous disons également à la npm version commande de ne faire qu'une version de correctif et donc d'incrémenter uniquement le dernier numéro de la chaîne de version. 
De plus, en utilisant le paramètre, -mnous pouvons définir le préfixe personnalisé pour le message de validation généré par cette commande. 
Cela nous aide à déterminer que ce nouveau commit est créé par le pipeline et non par un utilisateur.

Remarque : Prenez l'habitude de travailler avec [l'approche de branchement de fonctionnalités](https://martinfowler.com/bliki/FeatureBranch.html) tel que vue dans le gitflow comme modèle de gestion du code source. 
Ceci est également connu sous le nom de modèle de demande d'extraction. Nous ne nous engageons donc pas toujours directement et ne poussons pas vers la branche principale. 
C'est pourquoi cette approche fonctionne très bien, car les pipelines CI n'incrémentent pas le numéro de version à chaque petit changement, mais évaluent lorsque nous publions des correctifs de bogues et des fonctionnalités ou, en d'autres termes, lorsque nous fusionnons une demande d'extraction.

## Workflow 2 - Déploiement de l'application

Ensuite, nous créons un autre fichier d'action GitHub appelé .github/workflows/deploy.ymlqui déploie l'application :

```
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: "startsWith(github.event.head_commit.message, '[RELEASE]')"
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: '12.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
```

Les parties importantes de cet extrait de code sont que le flux de travail n'est exécuté que pour les validations sur la branche master dont le message de validation commence par "[RELEASE]". 
Fondamentalement, ce flux de travail doit récupérer les commits générés par le flux de travail précédent, qui définit le bon numéro de version, puis créer et déployer l'application. 
Pour plus de simplicité, nous n'incluons que l'étape de construction dans cet exemple.

## Transmission du numéro de version au code

Enfin, nous devons en quelque sorte transmettre le numéro de version défini dans le fichier package.json au code source. 
Cela peut être fait en utilisant une commande build que vous pouvez définir dans la section scripts du fichier package.json.

Par conséquent, vous pouvez simplement utiliser la variable de génération $npm_package_version qui représente la version spécifiée et la transmettre en tant que variable d'environnement au script de génération.

```
{
  "name": "project-name",
  "version": "0.1.1",
  "private": true,
  "scripts": {
    "build": "APP_VERSION=$npm_package_version react-scripts build"
  },
  ...
}
```
