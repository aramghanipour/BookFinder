import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Author } from './author';

@Component({
    selector: 'my-app',
    templateUrl: './Scripts/app/app.component.html',
    providers: [AuthorService]
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() : void {
        console.log('AppComponent called');
    }

} 