import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-menu-button',
  templateUrl: './nav-menu-button.component.html',
  styleUrls: ['./nav-menu-button.component.css']
})
export class NavMenuButtonComponent implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  trimText(textToParse: string) {
    return textToParse.replace(/\s+/g, '').toLowerCase();
  }
}
