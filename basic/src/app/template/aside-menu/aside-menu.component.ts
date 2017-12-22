import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css'],
  animations: [
  trigger('collapse', [
    state('open', style({
      opacity: '1',
      display: 'block',
      transform: 'translate3d(0, 0, 0)'
    })),
    state('closed',   style({
      opacity: '0',
      display: 'none',
      transform: 'translate3d(0, -100%, 0)'
    })),
    transition('closed => open', animate('200ms ease-in')),
    transition('open => closed', animate('100ms ease-out'))
  ])
  ]
})
export class AsideMenuComponent implements OnInit {
  show: Boolean = false;
  collapse: String = 'closed';

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(): void {
    //this.show = !this.show;
    if (this.collapse === 'open') {
      this.collapse = 'closed';
    } else {
      this.collapse = 'open';
    }
  }

}
