import styled from 'styled-components'

export const Container = styled.li`
  margin-bottom: 10px;
`

export const UserLink = styled.a`
  text-decoration: none;
  color: black;

  & :hover {
    background-color: #f4f6ff;
    border-radius: 25px 25px 25px 25px;
  }
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const UserSlug = styled.div`
  display: block;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  background-color: #f4f6ff;
  border-radius: 25px;
  font-weight: 600;
`

export const UserName = styled.div`
  font-size: 1.1rem;
`
