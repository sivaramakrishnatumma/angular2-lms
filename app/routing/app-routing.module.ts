import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from '../pages/home/home.component';
import { InventoryComponent }        from '../pages/inventory/inventory.component';
import { ViewDetailsComponent }        from '../pages/viewdetails/viewdetails.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'inventory', component: InventoryComponent},
    { path: 'viewdetails/:id', component: ViewDetailsComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
