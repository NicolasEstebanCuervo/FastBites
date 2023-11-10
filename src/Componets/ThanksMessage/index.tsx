import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function ThanksMessage() {
    return (
        <ContainerThanksMessage>
            <TitleThanksMessage>
                Thank you for choosing FastBites
            </TitleThanksMessage>
            <SubtitleThanksMessage>
                Thank you for your purchase at FastBites. We hope to see you
                again soon!
            </SubtitleThanksMessage>

            <OrderContainer>
            <TitleOrder>Are you still hungry?</TitleOrder>
            <SubtitleOrder>
            If you are hungry again, we are here for you. We look forward to your next order!
            </SubtitleOrder>
            <ButtonOrder to="/Menu">
                Place order again
            </ButtonOrder>
        </OrderContainer>
        </ContainerThanksMessage>
    );
}

const ContainerThanksMessage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
    gap: 20px;
    min-height: 100vh;
`;

const TitleThanksMessage = styled.h1`
    font-size: 50px;
    text-align: center;
    color: #662e9b;

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const SubtitleThanksMessage = styled.h1`
    font-size: 40px;
    color: #662e9b;
    text-align: center;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;

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

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
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
    padding: 20px 70px;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width: 300px) {
        font-size: 7vw;
        padding: 1vh 6vw;
    }
`;
