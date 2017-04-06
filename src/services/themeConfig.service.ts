import { Injectable } from '@angular/core';
// import * as _ from 'lodash';
import { ColorHelper } from './../constants';
import { BasicColorScheme, CustomColorScheme, ThemeConfig } from './../models';

@Injectable()
export class ThemeConfigService {

  public basicColors: BasicColorScheme;
  public customColors: CustomColorScheme;
  public conf: any;

  constructor() {
    this.basicColors = {
      default: '#ffffff',
      defaultText: '#ffffff',
      border: '#dddddd',
      borderDark: '#aaaaaa',
    };

    // main functional color scheme
    this.customColors = {
      primary: '#00abff',
      info: '#40daf1',
      success: '#8bd22f',
      warning: '#e7ba08',
      danger: '#f95372',
    };

    this.conf = {
      theme: {
        name: 'ngx-theme',
      },
      colors: {
        default: this.basicColors.default,
        defaultText: this.basicColors.defaultText,
        border: this.basicColors.border,
        borderDark: this.basicColors.borderDark,

        primary: this.customColors.primary,
        info: this.customColors.info,
        success: this.customColors.success,
        warning: this.customColors.warning,
        danger: this.customColors.danger,

        primaryLight: ColorHelper.tint(this.customColors.primary, 30),
        infoLight: ColorHelper.tint(this.customColors.info, 30),
        successLight: ColorHelper.tint(this.customColors.success, 30),
        warningLight: ColorHelper.tint(this.customColors.warning, 30),
        dangerLight: ColorHelper.tint(this.customColors.danger, 30),

        primaryDark: ColorHelper.shade(this.customColors.primary, 15),
        infoDark: ColorHelper.shade(this.customColors.info, 15),
        successDark: ColorHelper.shade(this.customColors.success, 15),
        warningDark: ColorHelper.shade(this.customColors.warning, 15),
        dangerDark: ColorHelper.shade(this.customColors.danger, 15)
      }
    };
  }

  get(): any {
    return this.conf;
  }

  changeTheme(theme: any): void {
    // _.merge(this.get().theme, theme);
  }

  changeColors(colors: any): void {
    // _.merge(this.get().colors, colors);
  }
}