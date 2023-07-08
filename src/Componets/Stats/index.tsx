import styled from "@emotion/styled";
import BurritoIcon from "../../Assets/Icons/Burrito.svg";
import ThunderIcon from "../../Assets/Icons/Thunder.svg";
import StartIcon from "../../Assets/Icons/Star.svg";

function Stats() {
    return (
        <StatsContainer>
            <Stat>
                <Logo src={BurritoIcon} alt="Burrito Icon" />
                <TextContainer>
                <Text>250</Text>
                <Text>Dishes</Text>
                </TextContainer>
            </Stat>
            <Stat>
                <Logo src={ThunderIcon} alt="Thunder Icon" />
                <TextContainer>
                <Text>20 Minutes</Text>
                <Text>Fast</Text>
                </TextContainer>
            </Stat>
            <Stat>
                <Logo src={StartIcon} alt="Star Icon" />
                <TextContainer>
                    <Text>4.5 Stars</Text>
                    <Text>Reviews</Text>
                </TextContainer>
            </Stat>
        </StatsContainer>
    );
}

export default Stats;

const StatsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 50px;
    padding: 10% 0;
    justify-content: center;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(1, 300px);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 250px);
        gap: 1%;
    }

    @media (max-width: 400px) {
        grid-template-columns: repeat(1, 200px);
    }

    @media (max-width: 300px) {
        grid-template-columns: repeat(1, 150px);
    }

    @media (max-width: 200px) {
        grid-template-columns: repeat(1, 100px);
    }
`;

const Stat = styled.div`
    height: 300px;
    background: #F2F2F2;
    margin-top: 50px;
    border-radius: 120px 120px 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media (max-width: 500px) {
        height:250px;
    }

    @media (max-width: 400px) {
        height:200px;
    }

    @media (max-width: 300px) {
        height:150px;
    }

    @media (max-width: 200px) {
        height:100px;
    }
`;

const Logo = styled.img`
    width: 60px;

    @media (max-width: 500px) {
        width: 15vw;
    }
`;

const TextContainer = styled.h1` 
    text-align: center;
`;

const Text = styled.h1` 
    font-size: 25px;
    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

