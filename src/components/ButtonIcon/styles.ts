import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: #3ccdbe;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
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
    font-size: 20px;
    text-align: center;
    margin-right: 50px;
    color: ${({ theme }) => theme.colors.heading};
`