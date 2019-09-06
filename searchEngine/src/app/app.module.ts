import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { MatTabsModule,MatFormFieldModule, MatToolbarModule } from '@angular/material';
import { DisplayComponent } from './Components/display/display.component';
import { MatCardModule } from '@angular/material';
import { FilterPipe } from './filter/filter.pipe';
import { MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './Components/dialog/dialog.component'; 
import {MatListModule} from '@angular/material/list';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    FilterPipe,
    DialogComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
    
  ],
  providers: [    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents :[DialogComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}