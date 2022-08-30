import React, { useMemo } from 'react'
import { PostListWrapper } from './PostList.style'
import PostItem from 'components/main/postItem/PostItem'
import { PostListItemType } from 'types/PostItem.types'

// 기존에 정의했던 PostListItemType 삭제
type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: React.FC<PostListProps> = ({ selectedCategory, posts }) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <PostListWrapper>
      {postListData.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
