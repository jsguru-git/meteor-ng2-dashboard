import { Component } from '@angular/core';
import template from './sidebar.component.html';

@Component({
  // moduleId: module.id,
  selector: 'sidebar-component',
  template
})
export class SidebarComponent {
  isActive = false;
  showMenu: string = '';
  
  eventCalled() {
    this.isActive = !this.isActive;
  }

	addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}