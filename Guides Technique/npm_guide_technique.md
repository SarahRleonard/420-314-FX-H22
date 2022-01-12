# NPM Le Guide Technique

## Étapes pour bâtir un package sur npmjs.com

Sur le répertoire en question.
    
    Faire : npm adduser 
    et appuyer sur "Entrer"

    Username : <utilisateur>
    Password : $pwd
    Email : <Ici c'est public>

Maintenant loggé pour faire des packages !

Allons s'y en 2 étapes

### Votre nom de package est important : components_packages est cité en exemple dans le code.

1 - Première c'est de configurer ce projet dans git.
  
2 - Créer un fichier packages.json

### Exemple : 
  
    $ git init
    $ git remote add origin https://github.com/user/components_packages
    $ npm init
    name: (components_packages) 
    $ version : (1.0.0) Si c'est votre release officielle.
    $ description : React Components for crypto-dns
    $ license: (MIT)
    $ git add .
    $ commit -m "Initial Commit For Components Packages"
    $ git push
    $ git push origin master

    npm publish
    + testpackage@0.2.2

### Vérifier : 
  
  - npm info components_packages

  - npm repo components_packages

  - npm.im/components_packages

## Tagger le logiciel dans github

        git tag 1.0.2
        git push --tags

## Publier une mise à jour

    1 - modifier le code
    2 - mettre à jour la version dans le package.json
      $ npm version patch
      $ git status
      (NPM a fait le commit dans git)
      $ git tag
      $ git push --tags
      $ git push
    3- publier sur npm
      $ npm publish

# Gestion des versions npm
ref : https://en.wikipedia.org/wiki/Software_release_life_cycle

## C'est quoi une version alpha ?

La phase alpha du cycle de vie de la version est la première phase des tests logiciels (alpha est la première lettre de l'alphabet grec, utilisée comme chiffre 1). Dans cette phase, les développeurs testent généralement le logiciel en utilisant des techniques de boîte blanche. Une validation supplémentaire est ensuite effectuée à l'aide des techniques de la boîte noire ou de la boîte grise, par une autre équipe de test. Le passage aux tests en boîte noire au sein de l'organisation est connu sous le nom de version alpha.[8] [meilleure source nécessaire]

Le logiciel Alpha n'est pas testé de manière approfondie par le développeur avant d'être distribué aux clients. Le logiciel Alpha peut contenir des erreurs graves, et toute instabilité qui en résulte pourrait provoquer des plantages ou une perte de données.[9] Le logiciel Alpha peut ne pas contenir toutes les fonctionnalités prévues pour la version finale.[10] En général, la disponibilité externe des logiciels alpha est rare dans les logiciels propriétaires, tandis que les logiciels open source ont souvent des versions alpha accessibles au public. La phase alpha se termine généralement par un gel des fonctionnalités, indiquant qu'aucune autre fonctionnalité ne sera ajoutée au logiciel. À l'heure actuelle, le logiciel est considéré comme complet. Un test bêta est effectué après les tests d'acceptation sur le site du fournisseur (test alpha) et immédiatement avant la sortie générale du logiciel en tant que produit.[11]

## C'est quoi une version beta ?

Beta, du nom de la deuxième lettre de l'alphabet grec, est la phase de développement du logiciel qui suit l'alpha. Les logiciels en phase bêta sont également appelés bêtaware.[12] Une phase bêta commence généralement lorsque le logiciel est complet mais contient probablement un certain nombre de bogues connus ou inconnus.[13] Les logiciels en phase bêta contiennent généralement beaucoup plus de bogues que les logiciels terminés et les problèmes de vitesse ou de performances, et peuvent toujours provoquer des plantages ou des pertes de données. L'objectif des tests bêta est de réduire les impacts sur les utilisateurs, en incorporant souvent des tests d'utilisabilité. Le processus de livraison d'une version bêta aux utilisateurs est appelé version bêta et c'est généralement la première fois que le logiciel est disponible en dehors de l'organisation qui l'a développé. Les versions bêta du logiciel peuvent être publiques ou privées, selon qu'elles sont librement disponibles ou uniquement disponibles pour un public limité. La version bêta du logiciel est souvent utile pour les démonstrations et les aperçus au sein d'une organisation et pour les clients potentiels. Certains développeurs appellent cette étape un aperçu, une version d'aperçu, un prototype, un aperçu technique ou un aperçu technologique (TP),[14] ou un accès anticipé.

Les bêta-testeurs sont des personnes qui signalent activement des problèmes de logiciels bêta. Ce sont généralement des clients ou des représentants de clients potentiels de l'organisation qui développe le logiciel. Les bêta-testeurs ont tendance à proposer leurs services gratuitement, mais reçoivent souvent des versions du produit qu'ils testent, des remises sur la version finale ou d'autres incitations.

### Exemple : 

    package.json
    "version" : "1.1.0-beta.0"

    $ git add .
    $ git commit -m "beta version with some new bugfix"
    $ git tag 1.1.0-beta.0
    $ git push
    $ git push --tags
    $ npm publish --tag beta
 
### Exemple d'utilisation
  
    $ npm i components_packages@beta 

  Il est possible de modifier le mot clé "alpha" ou "beta" mais soyons plus conventionnel et utilisons les termes métieurs appropriés.

  Si vous avez une version beta il est quand même possible d'avoir une version stable en appelant : 
  
      $ npm i components_packages@latest

  On peut voir votre dernière version du package avec la commande @latest.

  Si vous faites l'installation du package beta et que le package est marqué invalid.
  
  Il faut modifier le fichier packages.json et ajouter dans le dependencies le package beta avec la version : 
  
### Exemple : 
  
    "dependencies": {
      "components_packages" : "^1.1.0-beta.0"
    }

- Exécuter la commande npm list et vous verrez que le package n'est plus marqué comme invalid.
- C'est ce qui termine le guide pratique de gestion de code NPM.

