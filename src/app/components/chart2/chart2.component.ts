import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
  // options for the chart
  view: number[] = [700, 400];
  data: any[] = [];
  isRealtime: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: number;
  
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  xAxisLabel = 'Number';
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  /********** */
  // data goes here
  public single = [
    {
      "name": "Germany",
      "value": Math.floor(100 + Math.random() * 500)
    },
    {
      "name": "USA",
      "value": Math.floor(100 + Math.random() * 500)
    },
    {
      "name": "France",
      "value": Math.floor(100 + Math.random() * 500)
    }
  ];

  public series=[{
    "name": "2010",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2011",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2012",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2013",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2014",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2015",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2016",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2017",
    "value": Math.floor(100 + Math.random() * 500)
  },
  {
    "name": "2018",
    "value": Math.floor(100 + Math.random() * 500)
  },
];

  public multi = [
    {
      "name": "Germany",
      "series": this.series
    },

    {
      "name": "USA",
      "series": this.series
    },

    {
      "name": "France",
      "series": this.series
    }
  ];



  

  /********** */
  constructor() { }

  ngOnInit() {
    this.isRealtime = true;
    this.showXAxisLabel = true;
    this.showYAxisLabel = true;
    this.showLegend = true;
    this.data = this.barCharData();
  }

  public randomValue(){
    return Math.floor(100 + Math.random() * 500)
  }

  private barCharData() {
    return [
      {
        'name': 'Germany',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'United States',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'France',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'United Kingdom',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'Spain',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'Italy',
        'value': Math.floor(10000 + Math.random() * 50000)
      }
    ];
  }

}
