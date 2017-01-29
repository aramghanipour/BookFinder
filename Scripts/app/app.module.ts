import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from'./app-routing.module';
//import { RouterModule, Routes } from '@angular/router';

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
    bootstrap: [AppComponent]
})

export class AppModule {
}

