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
            street: 'Kugelgasse 12',
            city: '8000 Zürich',
            phone: '+41 71 525 08 08',
            email: '<a href="mailto:info@kalex-consulting.ch">info@kalex-consulting.ch</a>'
        },
        {
            name: 'Kalex Consulting GmbH',
            street: 'Terazije 22',
            city: '11000 Beograd',
            phone: '+41 71 525 08 08',
            email: '<a href="mailto:info@kalex-consulting.ch">info@kalex-consulting.ch</a>'
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
