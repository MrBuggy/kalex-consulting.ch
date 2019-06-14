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
            anchor: "#home"
        },
        {
            name: "Angebote",
            anchor: "#offers"
        },
        {
            name: "Portrait",
            anchor: "#portrait"
        },
        {
            name: "Kontakt",
            anchor: "#contact"
        }
    ]

    constructor() { }

    ngOnInit() {
    }

    anchorScroll(destination: string) {
        console.log(destination);
        const element = document.querySelector(destination);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

}
