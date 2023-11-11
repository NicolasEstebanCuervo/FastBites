import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Order() {
    return (
        <OrderContainer>
            <TitleOrder>Order Now!</TitleOrder>
            <SubtitleOrder>
                Feeling hungry? Don't wait any longer! Order your favorite fast
                food and let us deliver it to you.
            </SubtitleOrder>
            <ButtonOrder to="/Menu">
                 Place order
            </ButtonOrder>
        </OrderContainer>
    );
}

export default Order;

const OrderContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10% 0;
`;

const TitleOrder = styled.h1`
    font-size: 50px;
    color: #662e9b;

    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const SubtitleOrder = styled.p`
    text-align: center;
    font-size: 25px;
    max-width: 50%;
    color: #662e9b;

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        max-width: 80%;
        font-size: 6vw;
    }
`;

const ButtonOrder = styled(Link)`
    color: #000;
    text-decoration: none;
    background-color: #f9c80e;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
    transition: background-color 0.3s;

    :hover{
        background: #e7b910;
    }

    @media (max-width: 300px) {
        font-size: 6vw;
        padding: 1vh 6vw;
    }
`;
