import styled from "@emotion/styled";
import HotDog from "../../Assets/Images/HotDog.png";
import Pizza from "../../Assets/Images/Pizza.png";

function BestFood() {
    return (
        <BestFoodContainer>
            <TitleBestFood>Weekly special</TitleBestFood>
            <BestFoodSubContainer>
                <BestFoodIndividual>
                    <ImageContainer>
                        <HamburgerImage
                            src={HotDog}
                            alt="HotDog"
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>BurgerManía</Title>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Sapiente veritatis sequi commodi numquam
                            similique error, officia totam dolorum, ratione
                            corrupti vel, itaque nulla
                        </Paragraph>
                    </InfoContainer>
                </BestFoodIndividual>

                <BestFoodIndividual>
                    <ImageContainer>
                        <HamburgerImage
                            src={Pizza}
                            alt="Pizza"
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>BurgerManía</Title>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Sapiente veritatis sequi commodi numquam
                            similique error, officia totam dolorum, ratione
                            corrupti vel, itaque nulla
                        </Paragraph>
                    </InfoContainer>
                </BestFoodIndividual>
            </BestFoodSubContainer>
        </BestFoodContainer>
    );
}

export default BestFood;

const BestFoodContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

const TitleBestFood = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 60px;
    
    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const BestFoodSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const BestFoodIndividual = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    gap: 40px;
    padding: 40px 20px;
    border-radius: 10px;
    background: #f5f5f5;

    @media (max-width: 1300px) {
        max-width: 400px;
        flex-direction: column;
    }

    @media (max-width: 300px) {
        padding: 10% 3%;
    }
`;

const ImageContainer = styled.div``;

const HamburgerImage = styled.img`
    width: 100%;
    max-width: 300px;

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

const InfoContainer = styled.div`
    max-width: 40%;
    @media (max-width: 1300px) {
        max-width: 80%;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;

    @media (max-width: 1400px) {
        font-size: 35px;
    }

    @media (max-width: 500px) {
        font-size: 8vw;
    }
`;

const Paragraph = styled.p`
    font-size: 15px;
    @media (max-width: 500px) {
        font-size: 4vw;
    }
`;
