import { Component } from '@angular/core';

@Component({
  selector: 'theme-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ngx-theme';
}
