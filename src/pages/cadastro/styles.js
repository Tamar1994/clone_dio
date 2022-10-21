import styled from "styled-components"

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2 `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`


export const Wrapper = styled.div `
    max-width: 400px;

`

export const Column = styled.div `
    flex: 1;
    margin-right: 60px;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const TitleLogin = styled.p `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const EsqueciText = styled.p `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #e5E044;
`

export const CriarText = styled.p `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #e23dd7;
`

export const TextoLogin = styled.p `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;

    a {
        text-decoration: none;
        color: #00FF00;
    }
`

export const SubtitleJaPossuo = styled.p `
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-top: 10px;
`