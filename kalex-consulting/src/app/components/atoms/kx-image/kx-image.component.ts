import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kx-image',
  templateUrl: './kx-image.component.html',
  styleUrls: ['./kx-image.component.scss']
})
export class KxImageComponent implements OnInit {

  @Input() imgAlt: string;
  @Input() imgSrc: string;
  offset: number = 100;

  constructor() { }

  ngOnInit() {
  }

}
