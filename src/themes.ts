import { defaultTheme } from 'react-admin'
import merge from 'lodash/merge'

const brandColor = '#00b8d4'
export const createThemeHelper = (theme: 'dark' | 'light') => {
  const isDark = theme === 'dark'
  return merge({}, defaultTheme, {
    palette: {
      mode: theme,
      background: {
        default: isDark ? '#303030;' : '#f0f0f0',
        paper: isDark ? '#242526' : '#ffffff'
      },
      primary: {
        main: brandColor
      },
      error: {
        main: 'rgb(232, 51, 51)'
      },
      success: {
        main: 'rgb(76,175,80)'
      }
    }
  })
}
