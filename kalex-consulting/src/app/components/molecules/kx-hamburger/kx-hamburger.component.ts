import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'kx-hamburger',
    templateUrl: './kx-hamburger.component.html',
    styleUrls: ['./kx-hamburger.component.scss']
})
export class KxHamburgerComponent implements OnInit {
    @Input() toggleNav: boolean;

    constructor() { }

    ngOnInit() {
    }
}
