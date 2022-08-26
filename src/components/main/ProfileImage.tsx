import styled from '@emotion/styled'
import React from 'react'
import profileImg from '../../images/profile.jpeg'
// 원하는 이미지 링크 (나중에 따로 관리)
// const PROFILE_IMAGE_LINK = `../../images/버기.jpeg`

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
const ProfileImage: React.FC = () => {
  return <ProfileImageWrapper src={profileImg} alt="프로필이미지" />
}

export default ProfileImage
