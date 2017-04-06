import { Injectable } from '@angular/core';
import { style } from 'typestyle';
import { ThemeConfigService } from './themeConfig.service';

@Injectable()
export class ColorService {

  constructor(private _config: ThemeConfigService) {}

  getPrimaryColor(): any {
    return style({color: this._config.customColors.primary});
  }
}
