import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';





@Component({
  selector: 'Adz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  firstFormGroup: FormGroup;
  searchtext=false;
  query:String;
  submitted : boolean;
  @Input() result:string="";  
  @Output() clicked=new EventEmitter<string>();

  constructor(private _formBuilder: FormBuilder,private bookservice:BooksService,private route:Router,
    private translate: TranslateService) {
    this.firstFormGroup = this._formBuilder.group({
      search: ['', Validators.required]
    });
    translate.setDefaultLang('en');

   }
  
  ngOnInit() {
    
    
  }
  
  
  onClick(event){  
    if(event.keyCode == 13){
      if (this.firstFormGroup.invalid) {
        this.submitted=true;
        return;

      }
      let  searchvalue=this.firstFormGroup.value.search;
    this.clicked.emit(searchvalue);  
    this.bookservice.SetValue(searchvalue);
   this.route.navigate(['/results']);
    }  
    
  }
 
  }



