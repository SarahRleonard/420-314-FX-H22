# Module 1

Les fichiers YAML sont composés de maps et de lists
L'indentation est important "Soyez Consistant"

Utilisez les espaces "Toujours"

### Maps :

	-	name: value 
	-	Maps peuvent contenir d'autre maps pour plus de structure de données complexes

### Lists:

	-	Séquence d'items
	-	Plusieurs maps peuvent être défini dans une liste
	
### Exemple : 

	key: value
	complexMap:
	  key1: value
	  key2:
		subKey: value
	items:
	  - item1
	  - item2
	itemsMap:
	  - map1: value
		map1Prop: value
	  - map2: value
		map2Prop: value
		
-	YAML : On défini des clés et valeurs
-	Les structures plus complexe peuvent être défini en utilisant des clés qui références d'autre map
-	Les listes YAML peuvent être utilisées pour définir une séquence d'items
-	Les listes YAML peuvent définir une série de maps

### Notes : 
		-	L'indentation est très importante
		-	Utiliser des espaces et non des tabulations


# Docker Compose

### Création d'un fichier docker-compose.yml

Exemple : 

	version: '3.x'
	services:

	networks:

Les différentes clés de configurations d'un fichier docker-compose.yml

build, environment, image, networks, ports, volumes.

Sommaire : 

Docker Compose est utilisé pour construire des images et orchestrer des containeurs.
YAML se base sur l'indentation pour définier les maps et des lists

Le fichier Docker Compose utilise le YAML pour définir : 

	-	La version du fichier
	-	Services
	-	Propriétés additionnelles : (build, environment, image, networks, ports, volumes)


# Module 2

- Construire une images avec Docker Compose
- Ajouter des propriétés à un services
- "Build" plusieurs images
- "Push" de l'image à un "registry"

### Dockerfile et les Images

1 - DockerFile	=>	2 - Docker Build	=>	3 - Docker Image


### Workflow du Docker Compose

1 - Build Services	=>	2 - Start Up Services	=>	3 - Démonter les services

### Commandes : 
	-	docker-compose build
	-	docker-compose up
	-	docker-compose down

### Propriétés du Build dans Docker Compose

	-	context
	-	args
	-	dockerfiles
	-	image

### Exemple docker-compose : 

	services:
	  node:
	    image: nodeapp
		build:
		  context: .
		  dockerfile: node.dockerfile
		  args:
		    buildversion: 1
		ports:
		  - "3000:3000"


### Explications : 

-	Défini le services
-	Nom de l'image du build
-	Le fichier dockerfile doit être dans le même répertoire que le fichier docker-compose.yml
-	Utilisation du node.dockerfile pour l'image du build
-	Définir les arguments utilisés dans le fichier dockerfile pendant le "Build Process"

Déploiement de l'image au Docker Hub

commande : docker push <user name>/<image name>:<tag>

"Push" de l'image avec docker compose
commande : docker-compose push

"Push" d'un service spécifique avec docker-compose
docker-compose push [service...]

### Sommaire

-	Docker Compose peut être utilisé pour "Build" des images
-	Les propriétés du build permet de définir l'emplacement du fichier dockerfile à utiliser
	-	context
	-	dockerfile
	-	args
-	Plusieurs imagespeuvent être construite "Build" en utilisant Docker Compose
-	Un ou plusieurs images peuvent être poussé dans un "registry" en utilisant Docker Compose

# Module 3

-	Docker Compose, les propriétés du containeur
-	Définir les ports et les volumes (Référence: https://docs.docker.com/storage/volumes/)
-	Définir les variables d'environments
-	Créer un réseau "Bridge Network"
-	Démarrer et Arrêter les containeurs

### Comment orchestrer plusieurs containeurs ?

### Workflow du Docker Compose

1 - Build Services	=>	2 - Start Up Services	=>	3 - Démonter les services

### Commandes : 
	-	docker-compose build
	-	docker-compose up
	-	docker-compose down

### Propriétés du "Build" dans Docker Compose

	-	image
	-	context
	-	dockerfiles
	-	args
### Et aussi :
	-	ports
	-	volumes
	-	environment
	-	networks

### Définir ports et volumes
docker run -p <hostport>:<containerPort>  <imageName>

### Exemple docker-compose : 

	services:
	  node:
	    image: nodeapp
		build:
		  context: .
		  dockerfile: node.dockerfile
		  args:
		    buildversion: 1
		ports:
		  - "3000:3000"

### Scénario 1 : Un volume pour stocker les logs en dehors du container
### Scénario 2 : Un volume pour stocker une base de données en dehors du container
### Scénario 3 : Attacher du code source à un containeur

## Scénario 1 : Volume Mounts

/var/www/logs	=>	Host Directory	=>	Fichiers dans le docker host

docker run -p <ports> -v ${PWD}:/var/www/logs <imageToRun>

${PWD} => Place le working directory (Windows PowerShell)

### Exemple docker-compose : 

	services:
	  node:
	    image: nodeapp
		build:
		  context: .
		  dockerfile: node.dockerfile
		  args:
		    buildversion: 1
		ports:
		  - "3000:3000"
		volumes:
		  - ./logs:/var/www/logs

### Explications : 

./logs (Défini le répertoire du host)
/var/www/logs (Défini le répertoire dans le container)

Pour ceux qui ont déjà administrer un système d'exploitation linux, c'est l'équivalent de monter un disque dur sur une machine linux à partir d'un /dev/* vers un /mnt/*.

## Exemple pour monter un volume vers un bucket Amazon S3

	volumes:
 	 s3data:
    	driver: local

	services:
  	s3vol:
    	image: elementar/s3-volume
    	command: /data s3://{BUCKET NAME}
    	environment:
      	- BACKUP_INTERVAL={INTERVALL IN MINUTES (2m)}
      	- AWS_ACCESS_KEY_ID={KEY}
      	- AWS_SECRET_ACCESS_KEY={SECRET}
    	volumes:
      	- s3data:/data
	  
### Ensuite, vous pouvez utiliser dans le même fichier docker compose ce volume : 

linux:
  image: {IMAGE}
  volumes:
    - s3data:/data

## Définition des variables d'environment dans un containeur

docker run -p <ports> --env NODE_ENV=production <imageToRun>

### Exemple docker-compose (environment) :

	services:
	  node:
	   image: nodeapp
	   build:
         context: .
         dockerfile: node.dockerfile
       ports:
		  - "3000:3000"
       environment:
	     - NODE_ENV=production
         - APP_VERSION=1.0

### Exemple docker-compose (env_file) :

	services:
	  node:
	   image: nodeapp
	   build:
         context: .
         dockerfile: node.dockerfile
       ports:
		  - "3000:3000"
       env_file:
	     - ./common.env
         - ./settings.env
		 

### Explications : Défini les variables d'environnements dans le container


## Création d'un "Bridge Network"

docker network create --drive bridge isolated_network

-	Création du network
-	Défini le driver à utiliser
-	Le nom du réseau

### Exemple docker-compose : 

  version: '3.x'
  services:
    node:
      container_name : nodeapp
      image: nodeapp
      build:
	  ...
      ports:
        - "3000:3000"
      networks:
        - nodeapp-network

  networks:
    nodeapp-network:
      driver: bridge


### Explications : 

1 - Ajouter le service "nodeapp-network" dans node
2 - Définir le network globalement


## Rappel sur les commandes docker-compose

	docker-compose up -d (S'exécute en mode détaché) "Run containers in the background"


Dépendence sur les autres services 
Exemple docker compose : 

		services:
	  	node:
	    	image: nodeapp
			build:
		  	context: .
		  	dockerfile: node.dockerfile
		  	args:
		   	 buildversion: 1
			ports:
		  	- "3000:3000"
			volumes:
		  	- ./logs:/var/www/logs
			depends_on:
		  	- mongodb

### Explications : 
Ce service dépend du démarrage d'un autre service "mongodb". Il faut donc démarrer mongodb en premier.

Ligne de commande pratique : 
docker-compose up -d --no-deps (Ne ré-génère pas les services qu'elle dépend) [service] (Stop et détruit et re-créer uniquement le service spécifié)

D'autres commandes docker-compose importantes : 

	docker-compose --help
	docker-compose build
	docker-compose up
	docker-compose up -d
	docker-compose up -d --no-deps [service]
	docker-compose down
	docker-compose ps
	docker-compose stop [service]
	docker-compose start [service]

### Sommaire :

-	Docker Compose est utilisé pour orchestrer plusieurs containeurs
-	On peut définir les ports, les volumes, les variables d'environnements dans un fichier docker compose
-	On peut définir les "Bridge Network" dans le fichier docker-compose pour rendre la communication possible entre les containeurs
-	Les commandes docker-compose peuvent être utilisé pour démarrer, stopper, lister et détruire des containeurs


# Module 4

### Concept avancés de la containeurisation

-	Voir les logs des containeurs
-	Se connecter via le Shell à un container
-	"Scale" les containeurs

Commandes : 
	
	docker-compose logs

Affiche les logs pour tous les services

	docker-compose logs [service...]

Affiche les logs pour un service spécifique

	docker-compose logs --tail=5
	
Affiche les 5 dernières lignes du logs de tous les services

	docker-compose logs --follow

Affiche en temps réel les logs

Utiliser docker exec pour se connecter dans un shell dans un containeur

	docker exec -it <containerId> sh
	docker exec : Prend le TTY par défaut
	
	-it : Interactive TTY (Pas obligatoire d'être spécifié)
	<containerId> : Container Id ou NAME
	sh : Shell à utiliser ... peut aussi être bash


À quoi sert ceci : 

-	Voir les logs stockés dans le containeurs
-	Rouler un script pour remplirs les bases de données 
-	Rouler un script curl pour voir les résultats de certains API
-	Voir le code et des fichiers dans les containeurs

Si on veut "Scaller" notre containeur avec docker-compose
Voici la commande pour définir le nombre de containeurs à créer pour un service.
docker-compose up -d --scale api=4
api : le nom du service

Il ne faut pas définir un port si on veut scaller un service.

	services:
	  api:
	    image: my-api
		build:
		  ...
		ports:
		  - "3000:3000"

Un configuration sans port "host" configuré permet de faire un scale

	services:
	  api:
	    image: my-api
		build:
		  ...
		ports:
		  - "3000"

Définir maintenant le nombre de réplique à créer pour un déploiement de service.

	services:
	  api:
	    image: my-api
		build:
		  ...
		deploy:
		  replicas: 2
		  restart_policy:
		    condition: on-failure
			delay: 5s
			max_attempts: 3
			window: 120s
			
### Explications : 

	replicas: 2 (Défini le nombre de répliques à construire pour le déploiement du service
		
	restart_policy (Défini la politique de redémarrage du service)

### Sommaire : 

-	Docker Compose peut être utilisé pour
	-	Voir les logs
		-	docker-compose logs
	-	Se connecter au Shell d'un containeur
		-	docker-compose exec
	-	Scale containers
		-	docker-compose up --scale


