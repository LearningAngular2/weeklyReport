import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { patternValidator  } from '../pattern-validator';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('userTable/').valueChanges();
    console.log(this.items);
};

  createUserForm : FormGroup;
  hide = true;

  tableColumns: string[] = ['userName', 'email', 'role', 'password'];
  dataSource = new MatTableDataSource(dataSet);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
      this.createForm();
      this.dataSource.paginator = this.paginator;
  }

  private createForm(){
    this.createUserForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
  });
  }
  dataArray : any = [{userName: "vishnu", email: "vishnu@wipro.com", role: "tm", password: "abc"}];
  public createUser(){
    console.log(this.createUserForm.value);
    this.dataArray.push(this.createUserForm.value);
    this.dataSource = new MatTableDataSource(this.dataArray);
    this.dataSource.paginator = this.paginator;
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
// ];

export interface tableElement{
  userName : string;
  email : string;
  role : string;
  password : string;
}

const dataSet = [
  {userName: "vishnuprasath", email: "vishnu@wipro.com", role: "tm", password: "abc"}
];

