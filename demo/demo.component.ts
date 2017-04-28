import { Component } from '@angular/core';
import { ColorService, Styles } from './../src';

@Component({
  selector: 'theme-demo-app',
  styles: [
    Styles.BasicStyles.baseElementStyles
  ],
  template: `<div class="${Styles.AlignStyles.alignTopClass}"><theme-hello-world></theme-hello-world></div>`
})
export class DemoComponent {
  constructor(public colors: ColorService) {}
}
