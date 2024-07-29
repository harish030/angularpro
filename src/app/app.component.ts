import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          opacity: 1,
          width:256,
          transform: "scale(1, 1)"
        })
      ),
      state(
        "closed",
        style({
          opacity: 0,
          width:0,
          transform: "scale(0.95, 0.95)"
        })
      ),
      transition("open => closed", [animate("100ms ease-in")]),
      transition("closed => open", [animate("200ms ease-out")])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ang6';
  themeClass = 'ag-theme-quartz';
  constructor(private apiService:ApiserviceService){

  }
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts:any)=>{
      console.log(posts);
      
    })
  }

  // Row Data: The data to be displayed.
  rowData: any[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<any>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  // sumoftwonumbers = ()=>{

    
  // }
  sidenav=true
  closeSideNav(){
    this.sidenav=false
  }
  openSideNav(){
    this.sidenav=true
  }
  get openCloseTrigger() {
    return this.sidenav ? "open" : "closed";
  }
}

