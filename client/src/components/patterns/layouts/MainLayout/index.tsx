import React, {PropsWithChildren} from "react";

import {Container} from "./styles";

export interface IMainLayoutProps extends PropsWithChildren{}

const MainLayout : React.FunctionComponent<IMainLayoutProps> = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default MainLayout
