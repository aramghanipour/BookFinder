import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from'./app-routing.module';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './auth.service';
import { AuthGuard } from './auth.guard';
//import { AUTH_PROVIDERS } from 'angular2-jwt/angular2-jwt';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AboutComponent
    ],
    exports: [
        AppComponent
    ],
    providers: [ AUTH_PROVIDERS, Auth, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {
}

