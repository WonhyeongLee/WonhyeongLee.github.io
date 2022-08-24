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

type PostItemProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}
const PostItem: React.FC<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) => {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage src={thumbnail} alt="PostItemImage" />
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
