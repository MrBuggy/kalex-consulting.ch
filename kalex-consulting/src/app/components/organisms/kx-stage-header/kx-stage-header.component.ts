import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kx-stage-header',
    templateUrl: './kx-stage-header.component.html',
    styleUrls: ['./kx-stage-header.component.scss']
})
export class KxStageHeaderComponent implements OnInit {
    toggleNav: Boolean = false;
    navList: Array<Object> = [
        {
            name: "Home",
            anchor: "#home",
            destination: "home"
        },
        {
            name: "Angebote",
            anchor: "#offers",
            destination: "offers"
        },
        {
            name: "Portrait",
            anchor: "#portrait",
            destination: "portrait"
        },
        {
            name: "Kontakt",
            anchor: "#contact",
            destination: "contact"
        }
    ]

    constructor() { }

    ngOnInit() {
    }

    anchorScroll(ev: Object, destination: string) {
        this.toggleNavigation();
    }

    toggleNavigation() {
        this.toggleNav = !this.toggleNav;
    }
}
