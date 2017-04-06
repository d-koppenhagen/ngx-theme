import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeConfig } from './models';
import {
  ThemeConfigService,
  ColorService
} from './services';
import { ThemeConfigToken } from './tokens';
import { DefaultThemeConfig } from './constants';
import { isNil } from './util';
import { HelloWorldComponent } from './helloWorld.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ThemeConfigToken,
      useValue: DefaultThemeConfig
    },
    ThemeConfigService,
    ColorService
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class NgxThemeModule {

  static configureTheme(config: ThemeConfig): ModuleWithProviders {
    return {
      ngModule: NgxThemeModule,
      providers: [
        {
          provide: ThemeConfigToken,
          useValue: config
        }
      ]
    };
  }
}
