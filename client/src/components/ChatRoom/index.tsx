import React, {PropsWithChildren} from "react";
import {Container} from "./styles";
import Header from "../Header";
import Users from "../Users";
import Conversation from "../Conversation";
import InputMessage from "../InputMessage";

export interface IChatRoomProps extends PropsWithChildren{}

const ChatRoom : React.FunctionComponent<IChatRoomProps> = (props) => {
    return (
        <Container>
            <Header />
            <Users />
            <Conversation />
            <InputMessage />
        </Container>
    )
}

export default ChatRoom
