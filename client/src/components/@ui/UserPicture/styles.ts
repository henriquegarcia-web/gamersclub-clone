import styled from 'styled-components'

interface IUserPicture {}

export const UserPicture = styled.div<IUserPicture>`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;

  border: 3px solid #92aa00;

  background: linear-gradient(142deg, #00e9ff, #0076ff 99%);
`

export const UserPictureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
