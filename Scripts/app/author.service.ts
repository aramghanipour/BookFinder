import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Author } from './author';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthorService {

    constructor(private http: Http) {
        
    }

    private authorsUrl = 'http://localhost:22944/Home/Index';

    //getAuthors() {
    //    this.http.get(this.authorsUrl)
    //        .map(res => res.json())
    //        .map()
    //}

}