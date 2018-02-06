import { breakpoint } from './breakpoints'
import { font } from './fonts'
import { color } from './colors'
import { spacing } from './spacings'

export const theme = {
  ...breakpoint,
  ...font,
  ...color,
  ...spacing
}
