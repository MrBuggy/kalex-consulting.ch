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
            text: 'Zwei der Top 10 Startups in der Schweiz im 2018 haben ihr Fundament in Belgrad, der Haupstadt Serbiens.Was sind die Gründe? Ein sehr hoher Bildungsgrad, unzählige junge Talente und tiefe Lohnkosten, welche vor allem für Startups relevant sind.<br><br>Möchten Sie Ihr Startup auf Vordermann bringen? Verkürzen Sie mit einer Auslagerung nach Serbien den Startpunkt der Eröffnung. Des weiteren können Sie Synergien nutzen und den Markt in Serbien gleichzeitig angehen und expandieren.<br><br><br><b>Beschleunigung des Time-to-Markets:</b><br><br>Kontaktieren Sie uns bei Interesse. Alles weitere erkären wir Ihnen gerne und beraten Sie kompetent auf Ihre inviduellen Bedürnifsse zugeschnitten.',
            isOpen: true
        },
        {
            title: 'Unternehmen',
            text: 'Nearshoring ist die Verlagerung betrieblicher Aktivitäten ins nahegelegene Ausland. Nearshoring soll wie Offshoring die Personalkosten senken. Dabei ist der monetäre Vorteil durch Lohnunterschiede weniger hoch als beim Farshoring. Die größere kulturelle und räumliche Nähe bei nahezu gleicher Zeitzone vereinfacht jedoch die Kooperation massgebend.<br><br>Diese Form des Offshorings kann auch genutzt werden, um sich auf dem Markt des gewählten Landes zu positionieren und somit eine Win-win-Situation zu realisieren.<br><br><b>Warum Serbien?</b><br><br>- gleiche Zeitzone<br>- geografische Lage (1\'000km)<br>- Verfügbarkeit von qualifizierten Arbeitskräften mit ausgezeichneten Deutsch- und Englischkenntnissen<br>- täglich 6 Flüge nach Serbien (1.5h)<br>- bereits 500 Unternehmen aus der Schweiz, welche 11\'000 Mitarbeiter beschäftigen<br>- 2016 war die Schweiz zweitgrösster Investor in Serbien<br>- grosse Diaspora mit 300\'000 Serben in der Schweiz',
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
