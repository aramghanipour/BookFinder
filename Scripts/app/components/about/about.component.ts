import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: '../Scripts/app/components/about/about.component.html'
})

export class AboutComponent implements OnInit {
    ngOnInit(): void {
        console.log('AboutComponent called');
    }
}