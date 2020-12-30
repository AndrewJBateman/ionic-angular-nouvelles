# :zap: Ionic Angular Nouvelles

Ionic 5 app that displays news data from a [French API](https://restcountries.eu/) API.

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Nouvelles](#zap-ionic-angular-nouvelles)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* The [French API](https://restcountries.eu/) has a number of endpoints that can be used to search for info. I have used the endpoints: All, Name & Region.

## :camera: Screenshots

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v11](https://angular.io/)
* [Angular Service-worker](https://angular.io/guide/service-worker-config) to cache settings & data so that the app is still usable in the event of network loss
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [Capacitor](https://capacitorjs.com/docs/apis/network) Network plugin used to interface directly with native APIs
* [http server v0.12.3](https://www.npmjs.com/package/http-server) command-line http server
* [Ionic 5 open source Ionicons](https://ionicons.com/)

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Install http-server globally on your PC
* Run 'ionic serve' To start the server on _localhost://8100_
* Run `http-server www`
* Run `npm run lint` to lint files
* Run `ionic build --prod --release` to create a build file suitable for Firebase deployment
* To deploy to Firebase: `firebase deploy`

## :computer: Code Examples

* Capacitor Network plugin code to check status of network, from `home.page.ts`

```typescript
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

let handler = Network.addListener('networkStatusChange', (status) => {
  console.log("Network status changed", status);
});
// To stop listening:
// handler.remove();

// Get the current network status
let status = await Network.getStatus();

// Example output:
{
  "connected": true,
  "connectionType": "wifi"
}
```

## :cool: Features

* **Typescript interface** used to define the expected structures of the json objects returned from the API. TODO
* **Separate services** page with API http fetch functions. TODO
* **RxJS Observables** used to extract data asynchronously. TODO
* **Progressive Web App (PWA)**  app is usable for set time period during loss of network

## :clipboard: Status & To-do list

* Status: Working PWA
* To-do: add news service with interface

## :clap: Inspiration

tba

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
