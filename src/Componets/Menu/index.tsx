import styled from "@emotion/styled";
import BurritoIcon from "../../Assets/Images/Hamburguer.png";

function Menu() {
    return (
        <MenuContainer>
            <FoodContainer>
                <ImageFood src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur laboriosam quo doloremque nemo eos corrupti
                        asperiores. At cupiditate, odio reprehenderit repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>See more</Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur laboriosam quo doloremque nemo eos corrupti
                        asperiores. At cupiditate, odio reprehenderit repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>See more</Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur laboriosam quo doloremque nemo eos corrupti
                        asperiores. At cupiditate, odio reprehenderit repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>See more</Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur laboriosam quo doloremque nemo eos corrupti
                        asperiores. At cupiditate, odio reprehenderit repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>See more</Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur laboriosam quo doloremque nemo eos corrupti
                        asperiores. At cupiditate, odio reprehenderit repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>See more</Button>
            </FoodContainer>

            <FoodContainer>
                <ImageFood src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                    <TitleFood>Hamburguesa</TitleFood>
                    <DescriptionFood>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Pariatur laboriosam quo doloremque nemo eos corrupti
                        asperiores. At cupiditate, odio reprehenderit repellendus
                    </DescriptionFood>
                </TextContainer>
                <Button>See more</Button>
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
    width: 280px;
    border-radius: 20px;
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
`;

const DescriptionFood = styled.p`
    font-size: 15px;
    margin-top: 5px;
    max-width: 80%;
`;

const Button = styled.button`
    background-color: #F9C80E;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    font-weight: bold;
`;
