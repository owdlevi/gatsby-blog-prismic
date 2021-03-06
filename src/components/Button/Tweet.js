/** @jsx jsx */
import { jsx } from 'theme-ui'

const Tweet = ({ text, url, via }) => {
  const tweetText = encodeURIComponent(text)
  const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}&via=dozsa`
  return (
    <a
      sx={{
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'text',
        textDecoration: 'none'
      }}
      target="_blank"
      rel="nofollow"
      href={twitterURL}
      data-size="large">
      <svg
        enable-background="new 0 0 56.693 56.693"
        height="56.693"
        viewBox="0 0 56.693 56.693"
        width="56.693"
        xmlns="http://www.w3.org/2000/svg">
        <path
          sx={{
            fill: 'accent'
          }}
          d="M28.348 5.157c-13.6 0-24.625 11.027-24.625 24.625 0 13.6 11.025 24.623 24.625 24.623s24.623-11.023 24.623-24.623c0-13.598-11.024-24.625-24.623-24.625zm12.404 19.66c.013.266.018.533.018.803 0 8.201-6.242 17.656-17.656 17.656-3.504 0-6.767-1.027-9.513-2.787.486.057.979.086 1.48.086 2.908 0 5.584-.992 7.707-2.656-2.715-.051-5.006-1.846-5.796-4.311.378.074.767.111 1.167.111.566 0 1.114-.074 1.635-.217-2.84-.57-4.979-3.08-4.979-6.084 0-.027 0-.053.001-.08.836.465 1.793.744 2.811.777-1.666-1.115-2.761-3.012-2.761-5.166 0-1.137.306-2.204.84-3.12 3.061 3.754 7.634 6.225 12.792 6.483-.106-.453-.161-.928-.161-1.414 0-3.426 2.778-6.205 6.206-6.205 1.785 0 3.397.754 4.529 1.959 1.414-.277 2.742-.795 3.941-1.506-.465 1.45-1.448 2.666-2.73 3.433 1.257-.15 2.453-.484 3.565-.977-.83 1.247-1.883 2.34-3.096 3.215z"
        />
      </svg>
      <span sx={{ fontSize: '18px', color: 'text', textDecoration: 'none', ml: '5px' }}>Tweet</span>
    </a>
  )
}

export default Tweet
