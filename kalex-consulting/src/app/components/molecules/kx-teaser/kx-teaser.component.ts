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
            text: 'Zwei der Top 10 Startups in der Schweiz im 2018 haben ihr Fundament in Belgrad, der Haupstadt Serbiens. Was sind die Gründe? Ein sehr hoher Bildungsgrad, unzählige junge Talente und tiefe Lohnkosten, welche vor allem für Startups relevant sind. Möchten Sie Ihr Startup auf Vordermann bringen? Verkürzen Sie mit einer Auslagerung nach Serbien den Startpunkt der Eröffnung. Des weiteren können Sie Synergien nutzen und den Markt in Serbien gleichzeitig angehen und expandieren.',
            isOpen: true
        },
        {
            title: 'Firmen',
            text: 'Nearshoring ist die Verlagerung betrieblicher Aktivitäten ins nahegelegene Ausland. Nearshoring soll wie Offshoring die Personalkosten senken. Dabei ist der monetäre Vorteil durch Lohnunterschiede weniger hoch als beim Farshoring. Die größere kulturelle und räumliche Nähe bei nahezu gleicher Zeitzone vereinfacht jedoch dieKooperation massgebend. Diese Form des Offshorings kann auch genutzt werden, um sich auf dem Markt des gewählten Landes zu positionieren und somit eine Win-win-Situation zu realisieren.',
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
