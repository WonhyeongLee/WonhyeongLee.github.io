import React from 'react'
import {
  PostItemContent,
  PostItemWrapper,
  ThumbnailImage,
  Title,
  Date,
  Category,
  CategoryItem,
  Summary,
} from './PostItem.style'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: React.FC<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
