import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'kx-heading',
    templateUrl: './kx-heading.component.html',
    styleUrls: ['./kx-heading.component.scss']
})
export class KxHeadingComponent implements OnInit {
    @Input() text: string;

    constructor() { }

    ngOnInit() {
    }

}
