# Hero test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


#引入bootstrap 

1.除了cdn引入 

2.離線方法
  可以下載下來assets/styles/bootstrap@4.min.css
  再到styles.scss @import進去
3.離線方法()
  * 下載npm包,每個專案都要npm一次
    npm install bootstrap
  *下載完package.json查看會有bootstrap
  *有script 要引入script 先jquery popper bootstrap
4.main.ts (入口引入bootstrap=全局生效 ,需npm jq ,popper 就不用引入script 網址)
  *在main.ts import 'bootstrap';
  *需要安裝popper.js & jquery 才能正常