import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
display: flex;
align-items:center;
gap: 24px;
justify-content:flex-start;
height:44px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    background: #fff;
    color: rgb(11,116,229);
    border: 1px solid rgb(11,116,229);
    width: 100%;
    text-align: center;
    &:hover{
        color: #fff;
        background: rgb(13, 92, 182);
        span {
            color: #fff;
        }
    }
`
export const WrapperProducts = styled.div`
    display: flex;
    gap:14px;
    margin-top:20px;
    flex-wrap:wrap;
`