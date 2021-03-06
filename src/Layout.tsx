import { FC } from 'react'
import { styled } from '@mui/material'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Root>{children}</Root>
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default Layout
