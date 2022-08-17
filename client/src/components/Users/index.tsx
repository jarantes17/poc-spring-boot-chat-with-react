import React, {PropsWithChildren} from "react";
import {Container} from "./styles";

export interface IUsersProps extends PropsWithChildren{}

const Users : React.FunctionComponent<IUsersProps> = (props) => {
    return (
        <Container>
            Here is users
        </Container>
    )
}

export default Users
