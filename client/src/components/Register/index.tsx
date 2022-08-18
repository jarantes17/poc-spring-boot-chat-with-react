import React, { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'
import { BiLogIn } from 'react-icons/bi'
import * as S from './styles'

export interface IRegisterProps extends PropsWithChildren {
  onRequestedJoin: (username: string) => void
}

const Register: React.FunctionComponent<IRegisterProps> = ({ onRequestedJoin }) => {
  const { register, handleSubmit } = useForm()

  async function handleJoin({ username }: any) {
    if (username) {
      onRequestedJoin(username)
    }
  }

  return (
    <S.Container>
      <S.Title>Join into Room</S.Title>
      <S.FormUser onSubmit={handleSubmit(handleJoin)}>
        <S.InputUser placeholder={'Enter with your username'} {...register('username')} />
        <S.LoginButton type="submit">
          <BiLogIn size={'36px'} />
        </S.LoginButton>
      </S.FormUser>
    </S.Container>
  )
}

export default Register
