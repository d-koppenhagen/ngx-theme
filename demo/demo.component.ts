import { Component } from '@angular/core';
import { ColorService } from './../src';

@Component({
  selector: 'theme-demo-app',
  template: '<div class="this.colors.getPrimaryColor()"><theme-hello-world></theme-hello-world></div>'
})
export class DemoComponent {
  constructor(public colors: ColorService) {}
}
