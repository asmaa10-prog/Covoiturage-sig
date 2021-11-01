# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
# Description du projet 
Carpool est une application qui vous aide à trouver des covoiturages pour vos trajets quotidiens.
Pour sa réalisation, nous nous sommes basés sur des **APIs existants**.

Les services proposés par cette application sont:
- **L'authentification** : L’utilisateur s’authentifie en tant qu’un simple utilisateur ou un chauffeur.
- **La Recherche d’un Covoiturage** : L’utilisateur précise sa position et sa destination.
- **La Proposition d’un Covoiturage** : Le chauffeur propose un trajet vers une destination précise.
- **Le Matching** : L’utilisateur lui sera attribué un chauffeur.
- **Chat** : Entre temps, les deux parties peuvent se connecter.
- 
Vous pouvez trouver une vidéo démonstrative pour mieux comprendre le fonctionnement de l'application ici.


# Comment exécuter ce projet sur votre machine
###### 1. Installer [NodeJS](https://nodejs.org/en/).
###### 2. Créer un nouveau projet react 
```
npx create-react-app nom-projet
```
###### 3. Installer les suivantes : CometChat Pro, Firebase, Validator, Uuid, Leaflet, Leaflet-GeoSearch, Leaflet-Routing-Machine.
```
yarn add @cometchat-pro/chat firebase uuid validator leaflet leaflet-geosearch leaflet-routing-machine
```
###### 4. Configurer CometChat SDK
- Créer un compte sur [ComeChatPri](https://www.cometchat.com/pro)
- Ajouter un projet sur votre [tableau de bord](https://app.cometchat.com/apps)
- À partir du Quick Start, copiez APP_ID, REGION et AUTH_KEY, qui seront utilisés plus tard. Puis, copiez REST_API_KEY à partir de l'onglet API & Auth Keys.
- Accédez à l'onglet "Users tab" et supprimez tous les utilisateurs et groupes par défaut.
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
###### 5. Configurer Mapbox
- Créez un compte sur [Mapbox](https://www.mapbox.com/)
- Vous serez maintenant redirigé vers la page dans laquelle vous verrez le "public token" par défaut.
###### 6. Configurer votre projet sur Firebase 
- Pour commencer à utiliser Firebase, vous aurez besoin d'un compte Gmail. 
- Vous pouvez maintenant créer votre projet sur firebase.
- 




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Covoiturage-sig

# Covoiturage-sig

