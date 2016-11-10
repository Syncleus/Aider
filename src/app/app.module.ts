import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent, DialogContent} from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  declarations: [AppComponent, DialogContent],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent],
})
export class AppModule { }
