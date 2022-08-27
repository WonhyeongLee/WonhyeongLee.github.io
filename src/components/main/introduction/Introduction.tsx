import React from 'react'
import ProfileImage from '../ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Background, Wrapper, SubTitle, Title } from './Introduction.style'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: React.FC<IntroductionProps> = ({ profileImage }) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Nice to meet you</SubTitle>
          <Title>주니어개발자 이원형입니다.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
