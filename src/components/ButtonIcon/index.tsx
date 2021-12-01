import React from "react";
import { TouchableOpacityProps } from 'react-native'

import { 
    Container,
    IconWrapper,
    Imagem,
    Title
} from "./styles";

interface Props extends TouchableOpacityProps {
    title?: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <IconWrapper>

            </IconWrapper>
            <Title>
                {title}
            </Title>
        </Container>
    )
}