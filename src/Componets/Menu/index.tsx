import styled from "@emotion/styled";
import Hamburguer from "../../Assets/Images/Hamburguer.webp";
import Pizza from "../../Assets/Images/Pizza.webp";
import Tacos from "../../Assets/Images/Tacos.webp";
import Burrito from "../../Assets/Images/Burrito.webp";
import RiedChicken from "../../Assets/Images/RiedChicken.webp";
import HotDog from "../../Assets/Images/HotDog.webp";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <MenuContainer>
            <FoodContainer>
                <ImageFood src={Hamburguer} alt="Hamburguer" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur laboriosam quo doloremque nemo eos
                        corrupti asperiores. At cupiditate, odio reprehenderit
                        repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>
                    <StyledLink to="/Menu">Hamburguer</StyledLink>
                </Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={Pizza} alt="Pizza" />
                <TextContainer>
                    <TitleFood>Pizza</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur laboriosam quo doloremque nemo eos
                        corrupti asperiores. At cupiditate, odio reprehenderit
                        repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>
                    <StyledLink to="/Menu">Pizza</StyledLink>
                </Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={Tacos} alt="Tacos" />
                <TextContainer>
                    <TitleFood>Tacos</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur laboriosam quo doloremque nemo eos
                        corrupti asperiores. At cupiditate, odio reprehenderit
                        repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>
                    <StyledLink to="/Menu">Tacos</StyledLink>
                </Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={Burrito} alt="Burrito" />
                <TextContainer>
                    <TitleFood>Burritos</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur laboriosam quo doloremque nemo eos
                        corrupti asperiores. At cupiditate, odio reprehenderit
                        repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>
                    <StyledLink to="/Menu">Burrito</StyledLink>
                </Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={RiedChicken} alt="RiedChicken" />
                <TextContainer>
                    <TitleFood>RiedChicken</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur laboriosam quo doloremque nemo eos
                        corrupti asperiores. At cupiditate, odio reprehenderit
                        repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>
                    <StyledLink to="/Menu">Ried Chicken</StyledLink>
                </Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={HotDog} alt="HotDog" />
                <TextContainer>
                    <TitleFood>Hot Dog</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur laboriosam quo doloremque nemo eos
                        corrupti asperiores. At cupiditate, odio reprehenderit
                        repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>
                    <StyledLink to="/Menu">HotDog</StyledLink>
                </Button>
            </FoodContainer>
        </MenuContainer>
    );
}

export default Menu;

const MenuContainer = styled.section`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 350px);
    gap: 20px;
    padding: 10% 0;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 300px);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 250px);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(2, 250px);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 300px);
    }

    @media (max-width: 350px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const FoodContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    gap: 20px;
    border-radius: 20px;
    background-color: #f2f2f2;
`;

const ImageFood = styled.img`
    width: 100%;
    max-width: 280px;
    border-radius: 20px;

    @media (max-width: 1200px) {
        max-width: 260px;
    }

    @media (max-width: 1000px) {
        max-width: 200px;
    }

    @media (max-width: 850px) {
        max-width: 260px;
    }

    @media (max-width: 650px) {
        max-width: 200px;
    }

    @media (max-width: 550px) {
        max-width: 260px;
    }

    @media (max-width: 350px) {
        max-width: 200px;
    }

    @media (max-width: 250px) {
        max-width: 150px;
    }

    @media (max-width: 200px) {
        max-width: 100px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const TitleFood = styled.h1`
    font-size: 24px;
    margin-top: 10px;

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;

const DescriptionFood = styled.p`
    font-size: 15px;
    margin-top: 5px;
    max-width: 80%;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 400px) {
        font-size: 4.5vw;
    }
`;

const Button = styled.button`
    background-color: #f9c80e;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    font-weight: bold;

    :hover{
        background: #e7b910;
    }

    @media (max-width: 1200px) {
        max-width: 260px;
    }

    @media (max-width: 1000px) {
        max-width: 200px;
    }

    @media (max-width: 300px) {
        font-size: 6vw;
        padding: 1vh 6vw;
    }
`;
