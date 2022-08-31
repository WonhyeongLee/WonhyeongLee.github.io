import React, { useMemo } from 'react'
import { PostListWrapper } from './PostList.style'
import PostItem from 'components/main/postItem/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

// 기존에 정의했던 PostListItemType 삭제
type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: React.FC<PostListProps> = ({ selectedCategory, posts }) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
