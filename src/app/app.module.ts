import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MessageComponent } from './message/message.component';

import { CalendrierComponent } from './calendrier/calendrier.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AccordionModule, ToastModule } from '@coreui/angular';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastModule,
    
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,    //import here
    ReactiveFormsModule, //import here
    AccordionModule,
    HttpClientModule,
    
    

    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MessageComponent,
    CalendrierComponent,
   
  
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
