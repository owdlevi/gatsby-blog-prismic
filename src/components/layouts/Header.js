/** @jsx jsx */
import { useState } from 'react'
import { jsx, Container, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import DarkModeToggle from '../DarkModeToggle'

const Header = () => {
  const [showBoxShaddow, setShowBoxShaddow] = useState(true)
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  console.log(isDark)
  return (
    <header
      key="site-header"
      sx={{
        variant: 'styles.header',
        boxShadow: showBoxShaddow ? '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)' : 'none'
      }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <div
          sx={{
            width: ['100%', '40%', '30%'],
            order: 1,
            textAlign: 'left'
          }}>
          <Link
            to="/"
            sx={{
              height: '30px'
            }}>
            <svg
              sx={{
                height: '30px',
                fill: 'logoColor'
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 113.9 25.65">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M0,25.65H25.65V0H0ZM20.71,10.36H15.29V4.94h5.42ZM4.94,4.94h5.42V15.29H20.71v5.42H4.94ZM42.35,0A12.83,12.83,0,1,0,55.18,12.83,12.82,12.82,0,0,0,42.35,0Zm0,20.71a7.89,7.89,0,1,1,7.89-7.88A7.89,7.89,0,0,1,42.35,20.71ZM101.07,0A12.83,12.83,0,1,0,113.9,12.83h0A12.85,12.85,0,0,0,101.07,0Zm0,20.71A7.89,7.89,0,1,1,109,12.82h0A7.89,7.89,0,0,1,101.07,20.71ZM71.71,0A12.83,12.83,0,1,0,84.54,12.83h0A12.85,12.85,0,0,0,71.71,0Zm0,20.71A7.89,7.89,0,1,1,79.2,10.36H71.71v4.93H79.2A7.9,7.9,0,0,1,71.71,20.71Z" />
                </g>
              </g>
            </svg>
            <span
              sx={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                top: -9999
              }}>
              Home
            </span>
          </Link>
        </div>
        <div
          sx={{
            width: ['60', '70%'],
            display: ['none', 'flex', 'flex'],
            order: 3,
            justifyContent: 'flex-end',
            alignItems: 'center',
            textAlign: 'right',
            verticalAlign: 'center'
          }}>
          <Link
            to="/about-us"
            sx={{
              variant: 'styles.navlink',
              ml: [3, 4],
              py: 2
            }}>
            About
          </Link>
          <Link
            to="/blog"
            sx={{
              variant: 'styles.navlink',
              ml: [3, 4],
              py: 2
            }}>
            Blog
          </Link>
          <Link
            to="/contact"
            sx={{
              variant: 'styles.navlink',
              ml: [3, 4],
              py: 2
            }}>
            Contact
          </Link>
          <div
            sx={{
              height: '24px',
              width: '60px',
              ml: [3, 4]
            }}>
            <DarkModeToggle isDarkMode={isDark} toggleColorMode={toggleColorMode} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
