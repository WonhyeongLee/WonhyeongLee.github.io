import styled from '@emotion/styled'

export const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
  margin-top: 50px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 768px;
  min-width: 380px;
  height: 240px;
  margin: 60px auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
    padding: 0 20px;
  }
`
export const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`
