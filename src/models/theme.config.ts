export interface BasicColorScheme {
  default: string;
  defaultText: string;
  border: string;
  borderDark: string;
}

export interface CustomColorScheme {
  primary: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
}

export interface ThemeConfig {
  basicColors: BasicColorScheme;
  customColors: CustomColorScheme;
}