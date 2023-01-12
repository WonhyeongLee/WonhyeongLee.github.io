import styled from '@emotion/styled'

export const NavHeader = styled.header`
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: rgba(235, 177, 177, 0.08) 0px 0px 8px;
  backdrop-filter: blur(5px);
  opacity: 1;
  transition: top 0.5s ease 0s, opacity 0.5s ease 0s;
  z-index: 999;
`
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0px 15px;
  }
`
export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListItem = styled.li`
  margin: 0 5px;
`
