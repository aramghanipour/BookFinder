import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Author } from './author';

import { Auth } from './auth.service';

@Component({
    selector: 'my-app',
    templateUrl: './Scripts/app/app.component.html',
    providers: [AuthorService, Auth]
})

export class AppComponent implements OnInit {
    constructor(private auth: Auth) { }

    ngOnInit(): void {
        console.log('AppComponent called');
    }

} 