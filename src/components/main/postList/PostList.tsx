import React from 'react'
import { PostListWrapper } from './PostList.style'
import PostItem from 'components/main/postItem/PostItem'

// 테스트를 위한 임의 데이터
const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail: 'http://placeimg.com/640/480/nature',
  // 이동하고자하는 경로
  link: 'https://www.google.co.kr/',
}

const PostList: React.FC = () => {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
