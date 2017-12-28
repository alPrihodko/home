import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RelayComponent } from './relay/relay.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { HeaterControlComponent } from './heater-control/heater-control.component';
import { IrrigationControlComponent } from './irrigation-control/irrigation-control.component';
import { VentilationControlComponent } from './ventilation-control/ventilation-control.component';
import {RouterModule, Routes} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { NavigationControlComponent } from './navigation-control/navigation-control.component';

const appRoutes: Routes = [
  { path: 'heater', component: HeaterControlComponent },
  { path: 'irrigation', component: IrrigationControlComponent },
  { path: 'ventilation', component: VentilationControlComponent },
  { path: 'nav', component: NavigationControlComponent },
  { path: '',   redirectTo: '/nav', pathMatch: 'full' },
  { path: '**', redirectTo: '/nav', pathMatch: 'full' }

  //{ path: '**', component: PageNotFound }
];

@NgModule({
  declarations: [
    AppComponent,
    RelayComponent,
    HeaterControlComponent,
    IrrigationControlComponent,
    VentilationControlComponent,
    NavigationControlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
