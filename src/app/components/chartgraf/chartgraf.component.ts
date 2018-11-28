import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chartgraf',
  templateUrl: './chartgraf.component.html',
  styleUrls: ['./chartgraf.component.scss'],

})
export class ChartgrafComponent implements OnInit {
  public chartLabels: string[] = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
  public chartData: number[] = [21, 39, 10, 14, 16];
  public chartType: string = 'pie';
  public chartOptions: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  }
  /*Line Chart */

  public lchartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lchartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Div'];
  public lchartType = 'line';
  public lchartLegend = true;
  public lchartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], fill: false ,label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90], fill: false ,label: 'Series B' }
  ];

  /*bar chart test*/
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor() { }

  ngOnInit() {
  }

  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }

}
