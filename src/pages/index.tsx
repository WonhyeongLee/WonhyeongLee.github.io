import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Introduction from 'components/main/Introduction'
import Footer from 'components/common/footer/Footer'
import CategoryList from 'components/main/CategoryList'
import PostList from 'components/main/postList/PostList'
import { PostListItemType } from 'types/PostItem.types'
const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const IndexPage: React.FC<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  )
}

export const MyQuery = graphql`
  query MyQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default IndexPage
