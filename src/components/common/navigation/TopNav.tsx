import React from 'react'
import { ListItem, ListWrapper, NavHeader, NavWrapper } from './TopNav.style'

const TopNav: React.FC = () => {
  return (
    <NavHeader>
      <NavWrapper>
        <span>
          <strong>TopNav</strong>
        </span>
        <ListWrapper>
          <ListItem>
            <a>Tags</a>
          </ListItem>
          <ListItem>
            <a>화면모드</a>
          </ListItem>
          <ListItem>
            <a>시리즈</a>
          </ListItem>
          <ListItem>
            <a>검색</a>
          </ListItem>
        </ListWrapper>
      </NavWrapper>
    </NavHeader>
  )
}

export default TopNav
