"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var author_service_1 = require("./author.service");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(authorService, http) {
        this.authorService = authorService;
        this.http = http;
        this.authors = [];
        this.temp = "WWWCCC";
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("hello");
    };
    AppComponent.prototype.btnClickedEvent = function () {
        var _this = this;
        console.log("button has been clicked");
        this.http.get('http://localhost/bookfinderapi/api/authors/getall')
            .map(function (res) { return res.json(); })
            .map(function (authors) {
            var result = [];
            if (authors) {
                authors.forEach(function (data) {
                    result.push(data);
                });
            }
            return result;
        }).subscribe(function (data) {
            _this.authors = data;
            console.log(_this.authors);
        });
    };
    AppComponent.prototype.btnClickedTest = function () {
        var body = JSON.stringify(""); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post('http://localhost/bookfinderapi/api/authors/test', body) // ...using post request
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        }); // ...and calling .json() on the response to return data
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../Scripts/App/app.component.html',
        providers: [author_service_1.AuthorService]
    }),
    __metadata("design:paramtypes", [author_service_1.AuthorService, http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map