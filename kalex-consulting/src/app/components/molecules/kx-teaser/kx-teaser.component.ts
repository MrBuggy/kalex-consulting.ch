import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'kx-teaser',
    templateUrl: './kx-teaser.component.html',
    styleUrls: ['./kx-teaser.component.scss']
})
export class KxTeaserComponent implements OnInit {
    @Input() modifier: string;

    teasers = [
        {
            title: 'Startup',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est repudiandae consectetur perspiciatis aliquid nesciunt optio tenetur, exercitationem esse placeat aspernatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequatur doloribus molestiae eos eligendi nam cupiditate iure pariatur! Sed, doloribus.',
            isOpen: true
        },
        {
            title: 'Firmen',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est repudiandae consectetur perspiciatis aliquid nesciunt optio tenetur, exercitationem esse placeat aspernatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequatur doloribus molestiae eos eligendi nam cupiditate iure pariatur! Sed, doloribus.',
            isOpen: false
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    toggleTeasers(clickedTeaser) {
        for (let teaser of this.teasers) {
            teaser.isOpen = false;
        }

        clickedTeaser.isOpen = true;
    }
}
