import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: '../Scripts/app/components/navbar/navbar.component.html'
})

export class NavbarComponent implements OnInit {
    ngOnInit(): void {
        console.log('NavbarComponent called');
    }
}