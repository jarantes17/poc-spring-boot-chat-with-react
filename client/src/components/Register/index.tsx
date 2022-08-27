import React, { PropsWithChildren } from 'react'
import { BiLogIn } from 'react-icons/bi'
import * as S from './styles'

export interface IRegisterProps extends PropsWithChildren {
  registerUser: () => void
  handleUsername: (event: any) => void
  username: string
}

const Register: React.FunctionComponent<IRegisterProps> = ({
  registerUser,
  handleUsername,
  username
}) => {
  return (
    <S.Container>
      <S.Title>Join into Room</S.Title>
      <S.FormUser>
        <S.InputUser
          placeholder={'Enter with your username'}
          value={username}
          onChange={handleUsername}
        />
        <S.LoginButton type={'submit'} onClick={registerUser}>
          <BiLogIn size={'36px'} />
        </S.LoginButton>
      </S.FormUser>
    </S.Container>
  )
}

export default Register
