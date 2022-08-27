import styled from '@emotion/styled'
import React from 'react'
import profileImg from '../../images/profile.jpeg'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage }) => {
  return <ProfileImageWrapper image={profileImage} alt="프로필이미지" />
}

export default ProfileImage
