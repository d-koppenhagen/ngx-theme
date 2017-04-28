import { style } from 'typestyle';

export class AlignStyles {

  static alignBaselineRule: any = { verticalAlign: 'baseline' };
  static alignBaselineClass: string = style(AlignStyles.alignBaselineRule);

  static alignTopRule: any = { verticalAlign: 'top' };
  static alignTopClass: string = style(AlignStyles.alignTopRule);

  static alignMiddleRule: any = { verticalAlign: 'middle' };
  static alignMiddleClass: string = style(AlignStyles.alignMiddleRule);

  static alignBottomRule: any = { verticalAlign: 'bottom' };
  static alignBotttomClass: string = style(AlignStyles.alignBottomRule);

}