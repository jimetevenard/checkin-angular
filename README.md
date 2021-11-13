# Checkin

## Application web de gestion d'une liste d'invités. (spectacles, évenements...)

Cette application permet d'aider au contrôle d'accès lors d'un évenement ou un spectacle.

Elle Permet :

- De rechercher dans la liste d'invités
- D'afficher pour chaque invités les reservation associées (même adresse email)
- De cocher les invités au fur et à mesure de leur arrivée. (cette information est stockée dans le localStorage et peut être réinitialisée depuis l'application)

### Démo live : <https://jimetevenard.github.io/checkin-angular/>

Cette application est conçue pour se connecter à une API backend.

Le backend met à disposition les données de la liste au format json - Voir la classe [`Guest`](src/app/guest.ts).

Le chargement de la liste depuis un fichier (excel...) est réalisé depuis le backoffice.

![capture d'écran](screenshot.jpg)
> Hobby-project créé en 2018
> 
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Déploiement

- Dézipper le fichier de release (voir <https://github.com/jimetevenard/checkin-angular/releases>) et déployer le contenu de `dist` sur un serveur HTTP.
- Modifier le contenu du fichier `config.json`.

````js
{
    // URL du enpoint de la liste d'invités
    "guestsResourceURL": "http://backend/list",

    // URL d'accès à l'écran de gestion du back-office (lien du bouton "changer la liste" en bas de page)
    "backofficeURL": "http://backend/" 
}
````

### Dev server

Lancer `npm start` pour lancer l'application en mod dev.

- Accéder à `http://localhost:4200/`. (serveur de dev Angular) Le rechargement automatique lors de la modification des fichiers source.
- Un serveur mock de l'API backend sera également lancé sur `http://localhost:3000/`

## Divers

### Code scaffolding

Run `npm run ng generate component component-name` to generate a new component. You can also use `npm run ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
