# :zap: Ionic Angular Nouvelles

* Ionic app that displays API data and connected status
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-nouvelles?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-nouvelles?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-nouvelles?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-nouvelles?style=plastic)

## :page_facing_up: Table of contents

* [Ionic Angular Nouvelles](ionic-angular-nouvelles)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* API used are for development. Plan is to replace APIs with a French news API
* Built using the [Ionic framework](https://ionicframework.com/docs)

## :camera: Screenshots

tba

## :signal_strength: Technologies

* [Ionic v6](https://ionicframework.com/)
* [Angular v15](https://angular.io/)
* [Ionic/angular v6](https://www.npmjs.com/package/@ionic/angular)
* [Ionic v6 open source Ionicons](https://ionicons.com/)

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Note: there are no API keys required
* `ionic serve` to start the server on _localhost://8100_
* To run linter: `npm run lint`

## :computer: Code Examples

* `explorer-container.container.ts` async function to get Boolean connected status on initialization

```typescript
  async ngOnInit() {
    const status: ConnectionStatus = await Network.getStatus();
    this.appIsOnline = status.connected;

    Network.addListener('networkStatusChange', () => {
      console.log('status: ', status);
      this.appIsOnline = status.connected;
    });
  }
```

## :cool: Features

* tba

## :clipboard: Status & To-do list

* Status: Working PWA, passes linting.
* To-do: Add capacitor statusbar & splashscreen etc. Redeploy. Add French news API data or websockets etc.

## :clap: Inspiration

* tba

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
