import { Component } from '@angular/core';
import template from './ckeditor.component.html';

@Component({
	// moduleId: module.id,
  selector: 'ckeditor-component',
  template
})

export class Ckeditor {
    public ckeditorContent:string = `<p>Hello CKEDITOR</p>`;
    public config = {
        uiColor: '#F0F3F4',
        height: '600',
    };

    constructor() {}
}
