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
    color: #662e9b;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 12vw;
    }
`;

const SubtitleThanksMessage = styled.h1`
    text-align: center;
    font-size: 25px;
    max-width: 50%;
    color: #662e9b;


    @media (max-width: 400px) {
        max-width: 80%;
        font-size: 6vw;
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
    text-align: center;

    @media (max-width: 500px) {
        font-size: 12vw;
    }
`;

const SubtitleOrder = styled.p`
    text-align: center;
    font-size: 25px;
    max-width: 50%;
    color: #662e9b;

    @media (max-width: 400px) {
        max-width: 80%;
        font-size: 8vw;
    }
`;

const ButtonOrder = styled(Link)`
    color: #000;
    text-decoration: none;
    background-color: #f9c80e;
    border: none;
    padding: 20px 50px;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
    transition: background-color 0.3s;
    text-align: center;
    
    :hover{
        background: #e7b910;
    }

    @media (max-width: 1200px) {
        max-width: 260px;
    }

    @media (max-width: 1000px) {
        max-width: 300px;
    }

    @media (max-width: 350px) {
        font-size: 6vw;
        padding: 1vh 6vw;
    }
`;
