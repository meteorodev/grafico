# Grafico

This is a test for 2 charts library in angular 7.0, for the basic implematation:
## Enviroment

| Package   |  Version |
|---|:-:|
|Angular CLI   | 7.0.7  |
| Node  | 10.13.0  |
|Angular|7.0.4|

## intructions for chart.js:
oficial web site : https://www.chartjs.org/
### install
- npm install bootstrap --save
- npm install chart.js --save
- npm install ng2-charts --save
- npm install font-awesome --save


### Configure chartjs and boostrap

Add in angular.json file 
styles secction like this
"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "./node_modules/font-awesome/css/font-awesome.css",
    "src/styles.scss"
],
script section like this
"scripts": [ "./node_modules/chart.js/dist/Chart.min.js" ]

add module in your app.module.ts file and import this
import { ChartsModule } from 'ng2-charts/ng2-charts';

and into imports section 
imports: [
    BrowserModule,
    ChartsModule,
],

## instructions for ngx-chart
oficial web site : https://swimlane.gitbook.io/ngx-charts
### install 
- npm install @swimlane/ngx-charts --save

### configure 

add module in your app.module.ts file and import this
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

and into imports section

imports: [
    BrowserModule,
    NgxChartsModule,
]

for data and options refer to oficial web sites

https://www.chartjs.org/

https://swimlane.gitbook.io/ngx-charts

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


