import { cssRaw } from 'typestyle';

export interface BasicStylesConfig {
  bodyTextColor: string;
  bodyBackgroundColor: string;
  linkTextColor: string;
  hrBorderColor: string;
}

const basicColors: BasicStylesConfig = {
  bodyTextColor: '#111',
  bodyBackgroundColor: '#fff',
  linkTextColor: '#07c',
  hrBorderColor: '#ccc'
};

export class BasicStyles {

  // These styles have been extracted from BassCSS's basic styles.
  // See: https://github.com/basscss/basic
  static baseElementStyles: string = String(cssRaw(`
    * {
      box-sizing: border-box;
    }

    body {
      font-family:
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        Helvetica,
        sans-serif;
      line-height: 1.5;
      margin: 0;
      color: ${basicColors.bodyTextColor};
      background-color: ${basicColors.bodyBackgroundColor};
    }

    img {
      max-width: 100%;
      height: auto;
    }

    svg {
      max-height: 100%;
    }

    a {
      color: ${basicColors.linkTextColor};
    }

    h1, h2, h3,
    h4, h5, h6 {
      font-weight: 600;
      line-height: 1.25;
      margin-top: 1em;
      margin-bottom: .5em;
    }

    h1 { font-size: 2rem }
    h2 { font-size: 1.5rem }
    h3 { font-size: 1.25rem }
    h4 { font-size: 1rem }
    h5 { font-size: .875rem }
    h6 { font-size: .75rem }

    p, dl, ol, ul, pre, blockquote {
      margin-top: 1em;
      margin-bottom: 1em;
    }

    code,
    pre,
    samp {
      font-family:
        'Roboto Mono',
        'Source Code Pro',
        Menlo,
        Consolas,
        'Liberation Mono',
        monospace;
    }

    code, samp {
      font-size: 87.5%;
      padding: .125em;
    }

    pre {
      font-size: 87.5%;
      overflow: scroll;
    }

    blockquote {
      font-size: 1.25rem;
      font-style: italic;
      margin-left: 0;
    }

    hr {
      margin-top: 1.5em;
      margin-bottom: 1.5em;
      border: 0;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${basicColors.hrBorderColor};
    }
  `));
}