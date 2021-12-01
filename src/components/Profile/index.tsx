import React from 'react';
import { Avatar } from '../Avatar';
import { 
    Container,
    Content,
    User,
    Greeting,
    UserName,
    Message
} from './styles';

export function Profile() {
    return (
        <Container>
            <Avatar urlImage="https://avatars.githubusercontent.com/u/66653208?v=4" />
            <Content>
                <User>
                    <Greeting>
                        Olá
                    </Greeting>
                    <UserName>
                        Alek Cara
                    </UserName>
                </User>
                <Message>
                    Hoje é dia de Vitória
                </Message>
            </Content>
        </Container>
    )
}