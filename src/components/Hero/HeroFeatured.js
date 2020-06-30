/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import { Link } from 'gatsby'
import './hero.css'

const HeroFeatured = ({ home }) => {
  return (
    <section
      className="wrapper"
      sx={{
        px: [5, 6],
        // backgroundColor: 'lightBG',
        minHeight: ['auto', 'auto'],
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
      <Container
        data-wio-id={home._meta.id}
        sx={{
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'space-between',
          position: 'relative'
        }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexFlow: 'column',
            maxWidth: '500px',
            width: '40%',
            minHeight: ['auto', '500px'],
            zIndex: 10
          }}>
          <div
            sx={{
              display: 'flex',
              flexFlow: 'row',
              mb: 10
            }}>
            <span
              sx={{
                display: 'inline-block',
                textTransform: 'uppercase',
                fontSize: 16,
                mr: 2,
                letterSpacing: '1px'
              }}>
              Social media
            </span>
          </div>
          <h1
            sx={{
              variant: 'styles.h1',
              mt: 0,
              fontSize: [4, 5, 5],
              textAlign: 'left',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
            <span
              sx={{
                backgroundColor: 'lightBG',
                paddingRight: [3, 4],
                lineHeight: 1.2
              }}>
              Can Instagram Be Used To Boost SEO Strategies?
              {/* {RichText.asText(home.headline)} */}
            </span>
          </h1>
          <p sx={{ textAlign: 'left', width: '70%' }}>{RichText.asText(home.description)}</p>
          <div
            sx={{
              mt: 4,
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%'
            }}>
            <Link
              to="/blog"
              sx={{
                variant: 'styles.ctabutton'
              }}>
              View Blog
            </Link>
          </div>
        </div>
        <div
          sx={{
            flex: 1,
            position: 'absolute',
            left: '30%',
            top: 0,
            overflowY: 'hidden',
            height: '100%',
            width: '40%'
          }}>
          <img
            sx={{
              display: 'inline-block',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            src="https://images.prismic.io/gatsbytestingcrazycode/e1c02645-a8b2-48e9-8762-e825501bf6bf_Can-Instagram-be-used-to-boost-SEO.jpg?auto=compress,format&rect=0,0,760,507&w=1200&h=801"
            alt=""
          />
        </div>

        <div
          sx={{
            width: '25%',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'flex-start'
          }}>
          <h3
            sx={{
              textTransform: 'uppercase',
              fontSize: 3,
              fontWeight: 400,
              letterSpacing: '1px'
            }}>
            Recent Articles
          </h3>
          <div
            className="recent-articles-list"
            sx={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-between'
            }}>
            <Link
              to=""
              sx={{
                display: 'inline-block',
                width: 'calc(50% - 10px)',
                mb: '20px'
              }}>
              <div
                sx={{
                  width: '100%',
                  height: '100px',
                  lineHeight: 0
                }}>
                <img
                  sx={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src="https://images.prismic.io/gatsbytestingcrazycode/e1c02645-a8b2-48e9-8762-e825501bf6bf_Can-Instagram-be-used-to-boost-SEO.jpg?auto=compress,format&rect=0,0,760,507&w=1200&h=801"
                  alt=""
                />
              </div>
              <span
                sx={{
                  fontSize: '14px',
                  display: 'inline-block',
                  color: 'text',
                  backgroundColor: 'background',
                  p: [2, 3]
                }}>
                Why Is A Boost In Organic Traffic Not Increasing Sales?
              </span>
            </Link>
            <Link
              to=""
              sx={{
                display: 'inline-block',
                width: 'calc(50% - 10px)',
                mb: '20px'
              }}>
              <div
                sx={{
                  width: '100%',
                  height: '100px'
                }}>
                <img
                  sx={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <span
                sx={{
                  fontSize: '14px',
                  display: 'inline-block',
                  color: 'text',
                  mt: 2
                }}>
                Why Is A Boost In Organic Traffic Not Increasing Sales?
              </span>
            </Link>
            <Link
              to=""
              sx={{
                display: 'inline-block',
                width: 'calc(50% - 10px)',
                mb: '20px'
              }}>
              <div
                sx={{
                  width: '100%',
                  height: '100px'
                }}>
                <img
                  sx={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src="https://images.prismic.io/gatsbytestingcrazycode/e1c02645-a8b2-48e9-8762-e825501bf6bf_Can-Instagram-be-used-to-boost-SEO.jpg?auto=compress,format&rect=0,0,760,507&w=1200&h=801"
                  alt=""
                />
              </div>
              <span
                sx={{
                  fontSize: '14px',
                  display: 'inline-block',
                  color: 'text',
                  mt: 2
                }}>
                Why Is A Boost In Organic Traffic Not Increasing Sales?
              </span>
            </Link>
            <Link
              to=""
              sx={{
                display: 'inline-block',
                width: 'calc(50% - 10px)',
                mb: '20px'
              }}>
              <div
                sx={{
                  width: '100%',
                  height: '100px'
                }}>
                <img
                  sx={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <span
                sx={{
                  fontSize: '14px',
                  display: 'inline-block',
                  color: 'text',
                  mt: 2
                }}>
                Why Is A Boost In Organic Traffic Not Increasing Sales?
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroFeatured
