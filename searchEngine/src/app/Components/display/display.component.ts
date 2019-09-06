import { Component, OnInit, Inject } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { BookResponse } from '../../model/BookResponse';
import { Observable } from 'rxjs';
import { FormControl} from '@angular/forms';
import {MatDialog} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

export interface DialogData {
}



@Component({
  selector: 'Adz-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss',
]
})

export class DisplayComponent implements OnInit {
  
  value : String;
  arrBooks: BookResponse 
  public items: Observable<Array<any>>;
  public filterText: string;
  public filterPlaceholder: string;
  filterInput = new FormControl()
  SelectFilter= new FormControl()
  filterSelect:string;



  constructor(private bookservice: BooksService,private dialog :MatDialog,private translate: TranslateService
    ,private route:Router){
    translate.setDefaultLang('fr');

}
  ngOnInit() {
   
  this.value =  this.bookservice.GetValue();

  this.bookservice.GetAllBooks(this.value).subscribe((livre :any) => {
    this.arrBooks = livre.items;
  })
  
    this.filterText = "";
    this.filterPlaceholder = "Search..";
    this.filterInput
      .valueChanges
      .subscribe(term => {
        this.filterText = term;
      });
      this.SelectFilter
      .valueChanges
      .subscribe(selected => {
        this.filterSelect = selected;
      });
  
}



openDialog(item){
this.dialog.open(DialogComponent,{
    width:'400px',
    height:'600px',
    data:item,   

  });
  
  
}
back()
{
  this.route.navigate(['']);

}



}
