import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kx-adresses',
    templateUrl: './kx-adresses.component.html',
    styleUrls: ['./kx-adresses.component.scss']
})
export class KxAdressesComponent implements OnInit {
    adresses: Array<Object> = [
        {
            name: 'Kalex Consulting GmbH',
            street: 'Musterstrasse 1',
            city: '9000 St. Gallen',
            email: 'info@kalex-consulting.ch'
        },
        {
            name: 'Kalex Consulting GmbH',
            street: 'Musterstrasse 1',
            city: '9000 St. Gallen',
            email: 'info@kalex-consulting.ch'
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
