import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { patternValidator  } from '../pattern-validator';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usertask',
  templateUrl: './usertask.component.html',
  styleUrls: ['./usertask.component.css']
})
export class UsertaskComponent implements OnInit {

  constructor() { }

  userTaskForm : FormGroup;
  
  projectList : any = [
{value : "", label : "Select"},
{value : 'project1', label : "Project 1"},
{value : "project2", label : "project 2"},
{value : "project3", label : "Project 3"}];
  ngOnInit() {
    this.userTaskForm = new FormGroup({
      projects : new FormControl('')
    });
  }

  public abc(data){
    console.log(data);
  }

  

}
