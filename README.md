
# Description du projet 
Carpool est une application qui vous aide à trouver des covoiturages pour vos trajets quotidiens.
Pour sa réalisation, nous nous sommes basés sur des **APIs existants**.

Les services proposés par cette application sont:
- **L'authentification** : L’utilisateur s’authentifie en tant qu’un simple utilisateur ou un chauffeur.
- **La Recherche d’un Covoiturage** : L’utilisateur précise sa position et sa destination.
- **La Proposition d’un Covoiturage** : Le chauffeur propose un trajet vers une destination précise.
- **Le Matching** : L’utilisateur lui sera attribué un chauffeur.
- **Chat** : Entre temps, les deux parties peuvent se connecter.

Vous pouvez trouver une vidéo démonstrative pour mieux comprendre le fonctionnement de l'application ici.


# Comment exécuter ce projet sur votre machine
## 1. Installer [NodeJS](https://nodejs.org/en/).
## 2. Créer un nouveau projet react 
```
npx create-react-app nom-projet
```
## 3. Installer les suivantes : CometChat Pro, Firebase, Validator, Uuid, Leaflet, Leaflet-GeoSearch, Leaflet-Routing-Machine.
```
yarn add @cometchat-pro/chat firebase uuid validator leaflet leaflet-geosearch leaflet-routing-machine
```
## 4. Configurer CometChat SDK
- Créer un compte sur [ComeChatPro](https://www.cometchat.com/pro)
- Ajouter un projet sur votre [tableau de bord](https://app.cometchat.com/apps)

- ![Cometchat](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Cometchat.PNG)

- À partir du Quick Start, copiez APP_ID, REGION et AUTH_KEY, qui seront utilisés plus tard. Puis, copiez REST_API_KEY à partir de l'onglet API & Auth Keys.
- Accédez à l'onglet "Users tab" et supprimez tous les utilisateurs et groupes par défaut.
## 5. Configurer Mapbox
- Créez un compte sur [Mapbox](https://www.mapbox.com/)
- Vous serez maintenant redirigé vers la page dans laquelle vous verrez le "public token" par défaut.
- Mapbox
![Mapbox](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Mapbox.PNG)
## 6. Configurer votre projet sur Firebase 
- Pour commencer à utiliser [Firebase](https://firebase.google.com/), vous aurez besoin d'un compte Gmail. 
- Vous pouvez maintenant créer votre projet sur firebase.

![Firebase1](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Firebase1.PNG)
- Activer l'authentification Firebase avec e-mail et mot de passe.

![Firebase2](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Firebase2.PNG)
- Les images ci-dessous illustrent la structure des données de l'application. Un utilisateur doit avoir un avatar, un e-mail, un identifiant, un numéro de téléphone et un rôle (rôle utilisateur ou rôle pilote).
![Firebase3](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Firebase3.PNG)
![Firebase5](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Firebase5.PNG)
Un trajet doit contenir des informations sur la destination, le lieu de prise en charge, le chauffeur, le demandeur et l'identifiant du trajet. Le champ d'état indique l'état du trajet. Si le statut est 0, cela signifie qu'un utilisateur attend un pilote. Ensuite, si le statut est 1, cela signifie que le trajet a été accepté par un conducteur. De plus, si le statut est -1, le trajet a été annulé. Le dernier mais non le moindre, si le statut est 1, le trajet est terminé.
![Firebase4](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Firebase4.PNG)
## 7.Cloner le code source et l'installer sur votre machine
Vous aurez la structure de projet suivante

![structure1](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Structure1.PNG)
![structure2](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Structure2.PNG)
![structure3](https://github.com/asmaa10-prog/Covoiturage-sig/blob/main/images/Structure3.PNG)
## 8. Mettre en oeuvre votre environnement
- Créez un fichier appelé ".env" dans le dossier racine de votre projet.
-Importez et injectez vos clés secrètes dans le fichier .env contenant votre CometChat et Firebase de cette manière.
```
REACT_APP_FIREBASE_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_FIREBASE_DATABASE_URL=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_FIREBASE_PROJECT_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx

REACT_APP_COMETCHAT_APP_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_COMETCHAT_REGION=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_COMETCHAT_AUTH_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_COMETCHAT_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_MAP_BOX_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
```
## 9.  Executer et tester
Maintenant, il ne reste que d'éxécuter l'application en mode développement par la commande
```
yarn install
yarn start
```
Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans le navigateur.

La page se rechargera si vous apportez des modifications et vous verrez également toutes les erreurs de charpie dans la console.

Et voilà, votre application de covoiturage est fonctionnelle! 🎉

:exclamation: **Problèmes non résolus :** Un point négatif pour ce projet est la fait qu'on a utilisé un API pour spécifier et dessiner le chemin entre entre la position et la destination mais on n'est pas arrivé à faire le tracking entre ses positions.

:sparkles:  **Bonus :** Ce projet a été sauvegardé sous forme d'image docker :whale: pour l'utiliser en tant que service directement .

