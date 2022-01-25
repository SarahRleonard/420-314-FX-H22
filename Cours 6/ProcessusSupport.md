# Le support TI, processus d’évaluation d’un problème soulevé par un client

## 1 - Planifier le travail

La première étape lorsqu'on sollicite votre aide pour soutenir les services, applications, logiciels, site webs, etc. en place, c'est d'être en mesure de recevoir adéquatement les demandes dans un format facilement lisible  d'un premier coup d'oeil. 

Un tableau de bord doit permettre de voir toutes les nouvelles demandes reçues, celles en cours, celles bloquées et celles qui sont résolues doivent être consignées. 

Chaque demande doit être disponible pour des fins de suivi par le demandeur à tout moment. Le système de gestion des demandes doit donc rendre les demandes de traitement disponibles pour des fins de suivi.

**Les demandes reçues doivent être prises en charge dans un délai pré-établi avec votre client selon un SLA.** 
    
**Ensuite, les demandes doivent être analysées, filtrées et catégorisées.**
    
Un SLA, c'est un service-level agreement ou « accord de niveau de service ». Ce genre d'entente doit être pris au sérieux. 

Le service-level agreement (SLA) ou « accord de niveau de service » est un document qui définit la qualité de service, prestation prescrite entre un fournisseur de service et un client. Autrement dit, il s'agit de clauses basées sur un contrat définissant les objectifs précis attendus et le niveau de service que souhaite obtenir un client de la part du prestataire et fixe les responsabilités.

## Contenu du SLA 
Les composants d’une bonne entente de niveau de service doivent comprendre les éléments suivants4 :

Le type de service à fournir : il doit spécifier les types de services ainsi que tous les détails de ces derniers. Dans le cas d’une connectivité réseau IP, les types de services doivent décrire les fonctions comme l’utilisation et la maintenance des équipements réseau, la largeur de bande de connexion à fournir, etc.

Le niveau de performance souhaité des services, en particulier sa fiabilité et sa réactivité : un service fiable est celui qui souffre de perturbations minimes durant un espace de temps spécifique, mais également celui qui est disponible presque tout le temps. Un service avec une bonne réactivité réalisera les actions rapidement auprès des clients.

Les étapes à suivre pour signaler les problèmes du service : cette étape a pour but de spécifier les coordonnées à signaler et l’ordre dans lequel les détails sur le problème doivent être communiqués. Le contrat doit également informer sur l’intervalle de temps au cours duquel le problème sera examiné.
Le temps de réponse et les solutions aux problèmes examinés : le temps de réponse est la période de temps au cours duquel le fournisseur de service va lancer son enquête sur le problème. Le temps de résolution du problème est la période durant laquelle le problème actuel du service sera résolu et corrigé.

Le suivi des processus et les rapports de niveau de service : ce composant décrit comment les niveaux de performance sont supervisés et surveillés. Ce processus implique la collecte de différents types de statistiques, la fréquence à laquelle ces statistiques seront collectées et la façon dont ces statistiques seront accessibles par les clients.

Les répercussions pour le fournisseur de services qui ne respecte pas son engagement : si le fournisseur n'est pas en mesure de satisfaire aux exigences énoncées dans le SLA, ce dernier devra faire face aux conséquences pour cet échec. Ces conséquences peuvent inclure le droit du client de résilier le contrat ou de demander un remboursement pour les pertes subies par le client en raison de la défaillance du service.
Les conditions de paiement: doivent être très précise afin que le client ait une limitation de temps et que le fournisseur ait au moins un engagement de la part de son client.

L’une des clauses la plus importante dans la SLA est celle relative à la sécurité. Le prestataire doit être capable de garantir la sécurité des informations du client surtout en matière de récupération des données, copies de sauvegarde, accessibilité…

## Critères d'évaluation

Les SLA prévoient généralement des indicateurs afin de mesurer la performance des services dans le but de réaliser une comparaison avec le niveau de qualité des services défini5.

- La disponibilité des SLA est évaluée en identifiant les proportions, en pourcentage, du temps que le service prévu dans le contrat est réellement accessible et utilisable sur une période définie pouvant être par exemple hebdomadaire ou mensuelle.
- La fiabilité définit la fréquence à laquelle le service prévu est retiré ou échoue sur une période définie. On définit par exemple un nombre d’échecs par semaine.
- La fonctionnalité (serviceability) est une extension de la fiabilité. Elle mesure la durée du temps disponible qui est perdu entre le moment où la défaillance du service apparaît et le rétablissement du service. Il s’agit par exemple d’un pourcentage d’échecs par semaine ne durant que 30 minutes suivant sa signalisation.
- Le temps de réponse correspond au délai entre le moment où la demande de service a été effectuée et celui auquel la réponse est obtenue. Il peut être mesuré soit en temps de transfert, soit en temps de cycle.
- La satisfaction des utilisateurs permet de mesurer la performance perçue par rapport à celles qu’ils attendaient. Elle est le plus souvent appréciée par sondage en utilisant un processus qui se répète et qui change d’orientation au fil du temps.
- Quelques Indicateurs de mesure
    - Abandon rate, signifiant taux d’abandon : il s’agit du pourcentage d’appels raccrochés pendant l’attente
ASA (average speed to answer, signifiant temps moyen pour répondre) : il s’agit du temps moyen d’attente d’un appel avant d’obtenir une réponse du centre de service (service desk)
    - FCR (first-call resolution, signifiant résolution au premier appel) : il s’agit du pourcentage d’appels entrants qui peuvent être résolus sans utiliser un rappel ou sans que l'appelant rappelle le service d'assistance pour terminer la résolution du cas.
    - MTTR (mean time to recover, signifiant temps moyen de récupération) : il s’agit du temps nécessaire pour récupérer le niveau de service après une panne.
    - TAT (turnaround time, signifiant temps d’exécution) : il s’agit du temps nécessaire pour accomplir une tâche donnée.
    - TSF (time service factor, signifiant facteur du temps de service) : il s’agit du pourcentage d’appels répondus dans une période définie.
    - Uptime, signifiant temps de fonctionnement : il s’agit de la durée de disponibilité du réseau, de l’alimentation… selon ce que prévoit l’accord commun. Cet indicateur est souvent utilisé pour les services de données tels que l'hébergement partagé, les serveurs privés virtuels et les serveurs dédiés.

## Les erreurs à ne pas commettre
Dans la rédaction d'un SLA, il est important de fournir des descriptions de services complètes, de définir précisément ce que recouvre la notion de disponibilité. Il est également important d’anticiper sur les possibles problèmes qui peuvent interagir et de prévoir des solutions et prévoir les résultats à atteindre en temps normal de fonctionnement.

Avec une bonne rédaction et entente des deux parties, le SLA pourra remplir ses objectifs de service des prestations informatiques fournies, et en garantir les niveaux de performance.

## Contrôle
Le SLA d'un service (réseau, hébergement…) peut être validé de trois façons :

par le fournisseur du service lui-même (solution souvent par défaut) ;
par le client du service, qui doit alors mettre en œuvre un système de mesure adapté ;
par un tiers de confiance qui gère le système de mesures et aide à l'interprétation (benchmarking).
Beaucoup de SLA s’en tiennent aux spécifications ITIL en matière de services informatiques.

## 1.1 Analyser les demandes

Vous devez catégoriser l'impact que la demande peut avoir sur la production, ensuite, l'urgence que cette demande soit traitée rapidement et le type de la demande. Finalement, vous devez mesurer la priorité à partir du type, de l'impact et de l'urgence.

Mesures : 

* **Impact** : Faible, Moyenne, Élevée, Urgente
* **Urgence** : Faible, Moyenne, Élevée, Urgente
* **Type** : Incident, Tâche, Problème
* **Priorité** : Faible, Moyenne, Élevée, Urgente

Les types : 
    
-   **Incident** : Ça marchait avant, ça ne marche plus.
-   **Tâche** : Ça marche comme ça, mais j'aimerais plutôt que ça marche d'une autre manière.

Les priorités sont définies par une combinaison de l'impact et de l'urgence : 

Exemple de délai de livraison pour différentes priorités : 

-   **Faible** : 7 jours ouvrables
-   **Moyenne** : 5 jours ouvrables
-   **Élevée** : 3 jours ouvrables
-   **Urgente** : 2 jours ouvrables

Une fois le filtrage de votre demande effectué, vous devez traiter la demande qui doit être terminée le plus rapidement selon votre SLA.

### Pour les types de demandes : Incidents

Récupérer les informations suivantes : 

-   Comment ça marchait avant
-   Comment ça fonctionne aujourd'hui
-   Reproduire le problème avec des étapes claires alimentées de captures d'écrans, de messages d'erreurs à l'écran
-   Faire une capture vidéo du problème reproduit
-   Avoir le moment précis quand cela s'est produit pour l'investigation
-   Existe-t-il un moyen de contournement temporaire ? 
    -   Oui. L'appliquer et relier l'incident à un problème.
        -   Si le problème n'existe pas, le créer.
    -   Non. Reproduire le problème dans un environnement isolé et apporter un correctif pour rectifier la situation.
    
### Pour les types de demandes : Tâches

Veuillez noter que pour les tâches, les délais de livraison applicables ne s'appliquent pas la plupart du temps si les demandes nécessitent un grand effort. Dans ce cas, les tâches de priorité "Faible" ne sont pas comptabilisées sans le SLA.

Récupérer les informations suivantes : 

-   Comment le système fonctionne actuellement ?
-   Comment le système devra fonctionner ?
-   Quels sont les comportements applicatifs modifiés ?
-   Quel est la portée du changement ?
-   Quels sont les tests que l'on devra effectuer pour livrer la demande ?
-   Pour quelle date doit-on livrer l'amélioration ?

### Pour les types de demandes : Problèmes

Veuillez noter que pour les problèmes, les délais de livraison applicables ne s'appliquent pas la plupart du temps si les demandes nécessitent un grand effort. Dans ce cas, les problèmes de priorité "Faible" ne sont pas comptabilisés sans le SLA.

Récupérer les informations suivantes : 

    -   Comment reproduire le problème ?
    -   Investiguer pourquoi la situation se produit.
    -   Corriger le problème à la source et non les effets que cela occasionnent

###	1.2 Préparer le matériel

Votre poste de travail doit être configuré pour reproduire l'environnement de production. Voici la liste des tâches à effectuer pour résoudre le problème : 

-   Récupérer une copie des données de production en lien avec le problème
    -   Placer les données dans une environnement sécurisé (pas public) Exemple : Localement ou bien sur un serveur que vous êtes le seul à avoir accès
-   Installer la version de l'application sur votre poste de travail et connecter l'application sur la copie de données de production

### 1.3 Prévoir les opérations

S'il faut prévoir faire revenir un backup d'une date en particulier, il faut en faire la demande à votre fournisseur ou bien planifier de faire cette opération vous-même afin de vous permettre d'effectuer votre travail.

## 2 - Protéger l'environnement de la station de travail

Un anti-virus. Un pare-feu. Un éco-système isolé. Ce sont 3 éléments importants pour vous permettre de travailler sécuritairement. Étant un professionnel de l'informatique, vous comprenez que le problème que vous allez régler provient peut-être d'une attaque informatique et peut viser le développeur si c'est une attaque sophistiquée. Il ne faut prendre aucun risque. Prendre le temps de bien lire le code avant de l'exécuter. D'isoler la partie qui doit être corrigée. Ensuite, corriger uniquement l'endroit problématique.

###	2.1 Consigner la configuration initiale.

La configuration requise pour exécuter l'application doit être consignée dans un guide du développeur pour l'application / site web en question. S'y référer en premier. Habituellement, on retrouve cette information dans une base de connaissances.

###	2.2 Sauvegarder les données.

Pour bien fonctionner, les applications ont besoin d'une base de données. Vous devez avoir à quelque part dans votre base de connaissances, une base de données qui contient aucune donnée confidentielle. 

Une base de données de base, avec des données de pilotage.

###	2.3 Appliquer les mesures de sécurité.

Rendre les informations confidentielles indisponibles sur un répertoire ou site web public.

## 3 - Installer des éléments logiques

Vous devez être en mesure de chercher sur internet les étapes d'installation des logiciels que vous utilisez.

Il se peut que vous ayez à installer des logiciels directement sur les postes de travail pour vos clients. Pour ce faire, vous devez être méthodique et connaître d'avance les problèmes que vous pourriez rencontrer lors des opérations sur le poste du client.

###	3.1 Interpréter les fiches techniques.

N'hésitez pas à traduire les guides techniques que vous trouvez sur internet pour vous permettre de bien saisir l'essentiel des guides d'installation. La langue anglaise est souvent plus facile à traduire.

###	3.2 Démarrer l’installation.
###	3.3 Choisir les paramètres d’installation.
###	3.4 Vérifier l’installation.
###	3.5 Personnaliser l’élément logiciel.

## 4 - Désinstaller des éléments logiques

###	4.1 Sauvegarder les données.
###	4.2 Interpréter les fiches techniques.
###	4.3 Utiliser les outils de désinstallation.

## 5 - Vérifier l'installation de la station de travail dans l'environnement de l'utilisatrice et de l'utilisateur

    Pour reproduire un problème remonté par un client, il faut parfois vérifier les paramètres de l'ordinateur sur lesquels le problème s'est produit. 

## Qu'est-ce qu'on peut vérifier comme type de configuration de poste de travail ?
```
-   Système d'exploitation
-   Navitateur / Version
-   Langues
-   Résolution
-   ...
```
### 5.1 Vérifier le fonctionnement.
### 5.2	Reproduire et résoudre les problèmes.

## 6 - Consigner l'information sur l'installation.

### 6.1 Noter la nouvelle configuration dans une base de connaissances.
###	6.2 Rédiger un aide-mémoire des solutions apportées aux problèmes.
###	6.3 Mettre à jour l’inventaire

Références : [^wikipedia]

[^wikipedia]: https://fr.wikipedia.org/wiki/Service-level_agreement