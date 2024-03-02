import styled from "@emotion/styled";
import pizzaIcon from "../../Assets/Icons/Pizza.svg";

function Footer() {
    return (
        <FooterContainer>
            <LogoFooter src={pizzaIcon} alt="Hamburguer Icon" />
            <TitleFooter>
                Comida rápida en línea ©Nicolas Rojas 2023. Todos los derechos
                reservados.
            </TitleFooter>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 ;
    gap: 30px;

    @media (max-width: 800px) {
        padding: 5% 0;
    }

    @media (max-width: 200px) {
        gap: 10px;
    }
`;

const LogoFooter = styled.img`
    width: 70px;
    height: auto;

    @media (max-width: 500px) {
        width: 14vw;
    }
`;

const TitleFooter = styled.h1`
    font-size: 25px;
    color: #4e4e4e;
    text-align: center;

    @media (max-width: 750px) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;
