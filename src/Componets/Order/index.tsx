import styled from "@emotion/styled";

function Order() {
    return (
        <OrderContainer>
            <TitleOrder>Order Now!</TitleOrder>
            <SubtitleOrder>Feeling hungry? Don't wait any longer! Order your favorite fast food and let us deliver it to you.</SubtitleOrder>
            <ButtonOrder>Place Order</ButtonOrder>
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
`

const SubtitleOrder = styled.p`
    text-align: center;
    font-size: 25px;
    max-width: 50%;
    color: #662E9B;
`

const ButtonOrder = styled.button`
    background-color: #F9C80E;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
`
