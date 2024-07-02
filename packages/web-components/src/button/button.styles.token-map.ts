import { CSSTokenMap } from '../styles/token-helpers.js';

export const buttonCSSTokenMap: Array<CSSTokenMap> = [
  {
    name: '--ctrl-button-default-background-rest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-background-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-hover', // control token
    default: '#f5f5f5ff',
    fallback: {
      name: '--semantic-button-background-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-pressed', // control token
    default: '#e0e0e0ff',
    fallback: {
      name: '--semantic-button-background-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-disabled', // control token
    default: '#f0f0f0ff',
    fallback: {
      name: '--semantic-button-background-disabled', // semantic token
      default: '#00000005',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-background-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-background-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-background-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-background-selectedDisabled', // control token
    default: '#f0f0f0ff',
    fallback: {
      name: '--semantic-button-background-selectedDisabled', // semantic token
      default: '#00000026',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-rest', // control token
    default: '#d1d1d1ff',
    fallback: {
      name: '--semantic-button-stroke-color-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-hover', // control token
    default: '#c7c7c7ff',
    fallback: {
      name: '--semantic-button-stroke-color-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-pressed', // control token
    default: '#b3b3b3ff',
    fallback: {
      name: '--semantic-button-stroke-color-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-disabled', // control token
    default: '#e0e0e0ff',
    fallback: {
      name: '--semantic-button-stroke-color-disabled', // semantic token
      default: '#00000000',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-stroke-color-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-stroke-color-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-stroke-color-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-color-selectedDisabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-disabled-selectedBrand-stroke-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-rest', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-bottom-color-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-hover', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-bottom-color-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-pressed', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-bottom-color-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-disabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-bottom-color-disabled', // semantic token
      default: '#00000000',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-selectedRest', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-color-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-selectedHover', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-color-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-selectedPressed', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-color-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-stroke-bottom-color-selectedDisabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-disabled-selectedBrand-stroke-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-rest', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-hover', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-pressed', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-disabled', // semantic token
      default: '#0000004d',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-selectedRest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-selectedHover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-selectedPressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-selectedDisabled', // semantic token
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-rest', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-subtle-foreground-icon-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-hover', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-subtle-foreground-icon-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-pressed', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-subtle-foreground-icon-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-subtle-foreground-icon-disabled', // semantic token
      default: '#0000004d',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-selectedRest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-selectedHover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-selectedPressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-icon-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-selectedDisabled', // semantic token
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-foreground-text-weight', // control token
    default: '450px',
    fallback: {
      name: '', // fluent 2 token (?)
      default: null,
    },
  },
  {
    name: '--ctrl-button-default-foreground-text-weightSelected', // control token
    default: '650px',
    fallback: {
      name: '', // fluent 2 token (?)
      default: null,
    },
  },
  {
    name: '--ctrl-button-default-split-padding', // control token
    default: '10px',
    fallback: {
      name: '', // fluent 2 token (?)
      default: null,
    },
  },
  {
    name: '--ctrl-button-brand-background-rest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-brand-background-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-hover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-brand-background-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-pressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-brand-background-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-disabled', // control token
    default: '#f0f0f0ff',
    fallback: {
      name: '--semantic-button-brand-background-disabled', // semantic token
      default: '#00000026',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-background-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-background-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-background-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-background-selectedDisabled', // control token
    default: '#f0f0f0ff',
    fallback: {
      name: '--semantic-button-background-selectedDisabled', // semantic token
      default: '#00000026',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-rest', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-brand-stroke-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-hover', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-brand-stroke-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-pressed', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-brand-stroke-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-disabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-brand-stroke-disabled', // semantic token
      default: '#00000000',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-selectedRest', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-color-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-selectedHover', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-color-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-selectedPressed', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-stroke-color-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-color-selectedDisabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-disabled-selectedBrand-stroke-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-bottom-rest', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-controlDefault-hide-transparent', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-bottom-hover', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-controlDefault-hide-transparent', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-bottom-pressed', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-controlDefault-hide-transparent', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-stroke-bottom-disabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-controlDefault-hide-transparent', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-rest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-brand-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-split-divider-color', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-bbrand-split-divider-color', // semantic token
      default: '##0000001f',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-hover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-brand-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-pressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-brand-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-brand-foreground-disabled', // semantic token
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-selectedRest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-selectedHover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-selectedPressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-selectedDisabled', // semantic token
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-rest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-brand-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-hover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-brand-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-pressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-brand-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-brand-foreground-disabled', // semantic token
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-selectedRest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-selectedHover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-selectedPressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-brand-foreground-icon-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-selectedDisabled', // semantic token todo
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-rest', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-outline-background-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-hover', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-outline-stroke-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-pressed', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-outline-background-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-disabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-disabled-outline-background-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-background-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-background-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-background-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-background-selectedDisabled', // control token
    default: '#f0f0f0ff',
    fallback: {
      name: '--semantic-button-background-selectedDisabled', // semantic token
      default: '#00000026',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-width-rest', // control token
    default: '1px',
    fallback: {
      name: '--layout1-control-stroke-outline-stroke-width-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-width-hover', // control token
    default: '1px',
    fallback: {
      name: '--layout1-control-stroke-outline-stroke-width-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-width-pressed', // control token
    default: '1px',
    fallback: {
      name: '--layout1-control-stroke-outline-stroke-width-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-width-disabled', // control token
    default: '1px',
    fallback: {
      name: '--layout1-control-stroke-outline-stroke-width-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-rest', // control token
    default: '#d1d1d1ff',
    fallback: {
      name: '--semantic-button-outline-stroke-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-hover', // control token
    default: '#c7c7c7ff',
    fallback: {
      name: '--semantic-button-outline-stroke-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-pressed', // control token
    default: '#b3b3b3ff',
    fallback: {
      name: '--semantic-button-outline-stroke-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-disabled', // control token
    default: '#e0e0e0ff',
    fallback: {
      name: '--semantic-button-outline-stroke-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-stroke-color-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-stroke-color-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-stroke-color-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-color-selectedDisabled', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-disabled-selectedBrand-stroke-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-stroke-bottom-color', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-controlDefault-hide-transparent', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-rest', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-hover', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-pressed', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-disabled', // semantic token todo
      default: '#0000004d',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-selectedRest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-selectedHover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-selectedPressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-selectedDisabled', // semantic token todo
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-rest', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-hover', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-pressed', // control token
    default: '#242424ff',
    fallback: {
      name: '--semantic-button-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-disabled', // semantic token
      default: '#0000004d',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-selectedRest', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-selectedHover', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-selectedPressed', // control token
    default: '#ffffffff',
    fallback: {
      name: '--semantic-button-foreground-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-outline-foreground-icon-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-foreground-selectedDisabled', // semantic token
      default: '#ffffff99',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-background', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-transparent-background-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-stroke-color', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-transparent-stroke-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-stroke-bottom-color', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-controlDefault-hide-transparent', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-rest', // control token
    default: '#424242ff',
    fallback: {
      name: '--semantic-button-transparent-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-hover', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-transparent-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-pressed', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-transparent-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-transparent-foreground-disabled', // semantic token
      default: '#0000004d',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedDisabled', // semantic token
      default: '#7275c059',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-theme-rest', // control token
    default: 'Regular',
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-theme-hover', // control token
    default: 'Filled',
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-theme-pressed', // control token
    default: 'Filled',
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-theme-disabled', // control token
    default: 'Regular',
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-theme-selected', // control token
    default: 'Filled',
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-rest', // control token
    default: '#424242ff',
    fallback: {
      name: '--semantic-button-transparent-foreground-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-hover', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-transparent-foreground-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-pressed', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-transparent-foreground-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-disabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-transparent-foreground-disabled', // semantic token
      default: '#0000004d',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-selectedRest', // control token
    default: '#0f6cbdff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedRest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-selectedHover', // control token
    default: '#115ea3ff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedHover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-selectedPressed', // control token
    default: '#0f548cff',
    fallback: {
      name: '--semantic-button-subtle-foreground-selectedPressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-split-divider-width', // control token
    default: '1px',
  },
  {
    name: '--ctrl-button-default-split-divider-color', // control token
    default: '#ffffff00',
    fallback: {
      name: '--semantic-button-default-split-divider-color', // semantic token
      default: '#0000001f',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-split-divider-colorDisabled', // control token
    default: '#e0e0e0ff',
    fallback: {
      name: '--semantic-button-default-split-divider-colorDisabled', // semantic token
      default: '#0000001f',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-transparent-foreground-icon-color-selectedDisabled', // control token
    default: '#bdbdbdff',
    fallback: {
      name: '--semantic-button-transparent-foreground-icon-color-selectedDisabled', // semantic token
      default: '#7275c059',
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-default-split-stroke-left-width', // control token
    default: '0',
  },
  {
    name: '--ctrl-button-fab-corner-rest', // control token
    default: '999px',
    fallback: {
      name: '--layout1-control-corner-circular-corner-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-circular-corner', // control token
    default: '9999px',
    fallback: {
      name: '--layout1-control-corner-circular-corner-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-fab-corner-hover', // control token
    default: '999px',
    fallback: {
      name: '--layout1-control-corner-circular-corner-hover', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-fab-corner-pressed', // control token
    default: '999px',
    fallback: {
      name: '--layout1-control-corner-circular-corner-pressed', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-fab-corner-disabled', // control token
    default: '999px',
    fallback: {
      name: '--layout1-control-corner-circular-corner-disabled', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-fab-keyShadow-blur', // control token
    default: '2px',
    fallback: {
      name: '--layout1-button-fab-keyShadow-blur', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-fab-keyShadow-yOffset', // control token
    default: '1px',
    fallback: {
      name: '--layout1-button-fab-keyShadow-yOffset', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
  {
    name: '--ctrl-button-zero-corner', // control token
    default: '0',
    fallback: {
      name: '--layout1-control-corner-squared-corner-rest', // semantic token
      default: null,
      fallback: {
        name: '', // fluent 2 token (?)
        default: null,
      },
    },
  },
];
