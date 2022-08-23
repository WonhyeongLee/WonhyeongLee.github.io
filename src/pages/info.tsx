import GlobalStyle from 'components/common/GlobalStyle'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}
// React.FC<props> 로 작성하면 import 안해도됨
const InfoPage: FunctionComponent<InfoPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) => {
  return (
    <div>
      <GlobalStyle />
      {title}
      {description}
      {author}
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
