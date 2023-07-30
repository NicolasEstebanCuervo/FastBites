import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Order() {
    return (
        <OrderContainer>
            <TitleOrder>Order Now!</TitleOrder>
            <SubtitleOrder>Feeling hungry? Don't wait any longer! Order your favorite fast food and let us deliver it to you.</SubtitleOrder>
            <ButtonOrder><StyledLink to="/Menu">Place order</StyledLink></ButtonOrder>
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
`

const TitleOrder = styled.h1`
    font-size: 50px;
    color: #662E9B;

    @media (max-width: 1000PX) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`

const SubtitleOrder = styled.p`
    text-align: center;
    font-size: 25px;
    max-width: 50%;
    color: #662E9B;

    @media (max-width: 1000PX) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        max-width: 80%;
        font-size: 6vw;
    }
`

const ButtonOrder = styled.button`
    background-color: #F9C80E;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width: 300px) {
        font-size: 6vw;
        padding: 1vh 6vw;

    }
`
const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;