import { hexToRgbA } from '../../utils/hexToRgba'

const BRAND_COLORS = {
  primary: '#3399FF',
  secondary: '#b6daff'
}

const BORDER_COLORS = {
  borderInput: '#d0d7de'
}

const BACKGROUND_COLORS = {
  bgInput: '#ffffff'
}

const TEXT_COLORS = {
  textBody: '#232735'
}

const ACCENTS_COLORS = {}

const TINT_COLORS = {}

const TRANSLUCENT_COLORS = {
  borderInput50: hexToRgbA(BORDER_COLORS.borderInput, 50),
  secondary50: hexToRgbA(BRAND_COLORS.secondary, 50)
}

const MISCELLANEOUS_COLORS = {}

export default Object.freeze({
  ...BRAND_COLORS,
  ...BORDER_COLORS,
  ...BACKGROUND_COLORS,
  ...ACCENTS_COLORS,
  ...MISCELLANEOUS_COLORS,
  ...TRANSLUCENT_COLORS,
  ...TINT_COLORS,
  ...TEXT_COLORS
})
