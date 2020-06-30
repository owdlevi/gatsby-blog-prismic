/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import Tweet from '../Button/Tweet'

export default ({ slice }) => (
  <div className="post-quote container">
    <blockquote
      sx={{
        mb: [3, 4],
        display: 'flex',
        flexFlow: 'column',
        fontStyle: 'italic',
        fontSize: '24px',
        color: 'text',
        borderLeft: '5px solid',
        borderColor: 'text',
        mx: [3, 5, 6],
        px: [3, 4]
      }}>
      <p>{RichText.asText(slice.primary.quote)}</p>
      <Tweet text={RichText.asText(slice.primary.quote)} />
    </blockquote>
  </div>
)
