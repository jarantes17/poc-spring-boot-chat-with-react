import React, {PropsWithChildren} from "react";
import * as S from "./styles";
import {BasicButton} from "../../theme/GlobalStyle";

export interface IChatRoomProps extends PropsWithChildren{}

const ChatRoom : React.FunctionComponent<IChatRoomProps> = (props) => {
    return (
        <S.Container>
            <S.Title>Minha Sala</S.Title>
            <BasicButton>SAIR</BasicButton>
        </S.Container>
    )
}

export default ChatRoom
