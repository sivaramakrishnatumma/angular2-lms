import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';

import { AppComponent }               from './app.component';
import { HomeComponent }              from './pages/home/home.component';
import { InventoryComponent }         from './pages/inventory/inventory.component';
import { ViewDetailsComponent }           from './pages/viewdetails/viewdetails.component';

import { SearchPipe } from './pipes/search-filter';
import { SortByPipe } from './pipes/sort-by';

import { AppRoutingModule }         from './routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    ViewDetailsComponent,
    SearchPipe,
    SortByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
