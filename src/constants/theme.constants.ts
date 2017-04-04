// tslint:disable-next-line:typedef
export const IMAGES_ROOT = 'assets/img/';

export const layoutSizes: any = {
  resWidthCollapseSidebar: 1200,
  resWidthHideSidebar: 500
};

export const layoutPaths: any = {
  images: {
    root: IMAGES_ROOT,
    profile: IMAGES_ROOT + 'app/profile/',
    amMap: 'assets/img/theme/vendor/ammap/',
    amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
  }
};

export class ColorHelper {
  static shade = (color: string, weight: number) => {
    return ColorHelper.mix('#000000', color, weight);
  }

  static tint = (color: string, weight: number) => {
    return ColorHelper.mix('#ffffff', color, weight);
  }

  static hexToRgbA = (hex: string, alpha: string) => {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
  }

  static mix = (color1: string, color2: string, weight: number) => {

    let d2h: any = (d) => d.toString(16);
    let h2d: any = (h) => parseInt(h, 16);

    let result: string = '#';
    for (let i: number = 1; i < 7; i += 2) {
      let color1Part: any = h2d(color1.substr(i, 2));
      let color2Part: any = h2d(color2.substr(i, 2));
      let resultPart: any = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);
    }
    return result;
  }
}

// tslint:disable-next-line:typedef
export const isMobile = () => (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());