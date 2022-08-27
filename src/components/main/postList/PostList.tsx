import React from 'react'
import { PostListWrapper } from './PostList.style'
import PostItem from 'components/main/postItem/PostItem'
import { PostListItemType } from 'types/PostItem.types'

// 기존에 정의했던 PostListItemType 삭제
type PostListProps = {
  posts: PostListItemType[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
