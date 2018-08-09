import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { patternValidator  } from '../pattern-validator';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  
  createUserForm : FormGroup;
  hide = true;
  showSpiner = true;
  items: Observable<any[]>;
  tableData : any = [];
  tableColumns: string[] = ['userName', 'email', 'role', 'password'];
  dataSource = new MatTableDataSource();

  constructor(private db: AngularFireDatabase) {
    
    //this.items = this.db.list('userTable/').valueChanges();
   // console.log(this.items); 
  
};

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
      this.createForm();
      this.db.list('userTable/').remove('2')
      this.loadGrid();
      
  }

  private createForm(){
    this.createUserForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
  });
  }
  dataArray : any = [];
  public createUser(){
    console.log(this.createUserForm.value);
    this.dataArray.push(this.createUserForm.value);
    this.db.list('userTable/').push(this.dataArray[0])
    //this.dataSource = new MatTableDataSource(this.dataArray);
    //this.dataSource.paginator = this.paginator;
    this.loadGrid();
  }

  public loadGrid(){
    this.db.list('userTable/').valueChanges().subscribe(serverData => {
      this.tableData = serverData;
      console.log(this.tableData);
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;
      this.showSpiner = false;
    });
    
  }

}
