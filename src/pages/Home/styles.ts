import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`


export const Header = styled.View`
    width: 100%;
    padding-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-top: 40px;
    margin-bottom: 42px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 20px;
    margin-bottom: 1px;
    margin-left: 10px;
`

export const Input = styled.TextInput`
`