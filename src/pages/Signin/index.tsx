import { useNavigation, useNavigationState } from '@react-navigation/core';
import React from 'react';
import { 
    Image
} from 'react-native';

import Hand from '../../assets/hand3.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { chatIcon } from '../../components/chat_icon.png';
import { SmallButtonIcon } from '../../components/SmallButtonIcon';
import { 
    Container, 
    Title,
    SubTitle,
    Content,

} from './styles';

export function Signin() {
        const navigation = useNavigation();

        function handleSignin(){
            navigation.navigate('Home')
            
        }

    return (
        <Container>
            <Content>
            <Image source={Hand} width="40px" height="21px"  />
                <Title>
                    Buscando mais {`\n`}
                    tranquilidade {`\n`}
                    para seu futuro?
                </Title>

                <SubTitle>
                 Os benefícios da Previdência {`\n`}
                Santander vão muito além {`\n`}
                da aposentadoria.
                </SubTitle>
                <ButtonIcon 
                    title="INVISTA JÁ"
                    activeOpacity={0.7}
                    disabled={false}
                />
            </Content>    
            <Content>
            <SmallButtonIcon 
                    title="Atendimento"
                    activeOpacity={0.7}
                    disabled={false}
                />
            <SmallButtonIcon 
                    title="ID Santander"
                    activeOpacity={0.7}
                    disabled={false}
                />
            <SmallButtonIcon 
                    title="Acessar sua conta"
                    activeOpacity={0.7}
                    disabled={false}
                    onPress={handleSignin}
                />
            </Content>

        </Container>
    )
}
