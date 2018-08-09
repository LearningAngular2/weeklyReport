import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  loginBtn = true;
  ngOnInit() {
   
  }

  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 6;
  // }
  dashmonthDrop = new FormControl();
  dashteamMemberDrop = new FormControl();
  selectDaterange : any = [];
  values = new FormControl(this.selectDaterange);
  months : any = [
  {value: '0', viewValue: 'January'},
  {value: '1', viewValue: 'February'},
  {value: '2', viewValue: 'March'},
  {value: '3', viewValue: 'April'},
  {value: '4', viewValue: 'May'},
  {value: '5', viewValue: 'June'},
  {value: '6', viewValue: 'July'},
  {value: '7', viewValue: 'August'},
  {value: '8', viewValue: 'September'},
  {value: '9', viewValue: 'October'},
  {value: '10', viewValue: 'November'},
  {value: '11', viewValue: 'December'}];

  teammembers : any = [
    {value: 'All', viewValue: 'All'},
    {value: 'santhosh', viewValue: 'Santhosh Antony'},
    {value: 'vishnu', viewValue: 'Vishnu'}
  ];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {position: 'bottom',},
    scales:{
      xAxes:[{
          stacked:true,
          gridLines: {lineWidth: 0,color: "rgba(0, 0, 0, 0)",},       
      }],
      yAxes:[{
          stacked:true,
          gridLines: {lineWidth: 0,},
      }]
  }
  };
  public barChartLabels:string[] = ['week 1', 'week 2', 'week 3', 'week 4'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [1, '', 1, 1], label: 'Project A'},
    {data: [1, 1, '', 1], label: 'Project B'},
    {data: [1, 1, 1, ''], label: 'Project C'},
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  // monthValue : string;
  // public abc(add){
  // console.log(add.value);
  // this.months.forEach((key : any)=>{
  //   if(add.value == key.value){
  //     console.log(key.viewValue);
  //     this.monthValue = key.viewValue;
  //   }
    
  // });
  // }
 
  public addEvent(event) {
    this.selectDaterange = [];
    let start = new Date(event.value);
    start.setDate(start.getDate() - start.getDay()  + 1);
    console.log(start.toDateString());
    this.selectDaterange.push([start.getMonth()+1, start.getDate(),start.getFullYear()].join("/"));

    let end = new Date(start);
    end.setDate(start.getDate() + 4);
    this.selectDaterange.push([end.getMonth()+1, end.getDate(),end.getFullYear()].join("/"));
     
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}


