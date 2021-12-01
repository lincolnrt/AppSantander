import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 70%;
    height: 56px;
    background-color: #ffffff;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    
`

export const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-color: ${({ theme }) => theme.colors.line}
`

export const Imagem = styled.Image`
    width: 24px;
    height: 24px;
`

export const Title = styled.Text`
    flex: 1px;
    font-size: 15px;
    text-align: center;
    margin-right: 50px;
    color: #000000;
`