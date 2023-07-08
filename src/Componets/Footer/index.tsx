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
`;

const LogoFooter = styled.img`
    width: 70px;
    height: 70px;

    @media (max-width: 800px) {
        width: 50px;
        height: 50px;
    }
`;

const TitleFooter = styled.h1`
    font-size: 20px;
    color: #4e4e4e;

    @media (max-width: 800px) {
        font-size: 15px;
        text-align: center;
    }
`;
