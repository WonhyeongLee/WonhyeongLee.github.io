import styled from '@emotion/styled'
import React from 'react'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`
const FooterComment = styled.p`
  color: #c4c3c3;
  font-size: 10px;
`
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      방문해주셔서 감사합니다 ^^ 좋은하루 보내세요.
      <br />
      <FooterComment>
        @ 2021 FE Developer WonHyeong Lee, Powered By Gatsby
      </FooterComment>
    </FooterWrapper>
  )
}

export default Footer
