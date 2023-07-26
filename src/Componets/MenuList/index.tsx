import { useContext } from "react";
import { DataContext } from "../../Context/Context";
import { ItemList } from "./ItemList";
import styled from "@emotion/styled";

const MenuList = () => {
    const { products } = useContext(DataContext);

    const hamburguerProducts = products.filter(
        (product) => product.category === "hamburguer"
    );

    const pizzaProducts = products.filter(
        (product) => product.category === "pizza"
    );

    const tacosProducts = products.filter(
        (product) => product.category === "tacos"
    );

    const burritosProducts = products.filter(
        (product) => product.category === "burritos"
    );

    const chickenProducts = products.filter(
        (product) => product.category === "chicken"
    );

    const hotDogProducts = products.filter(
        (product) => product.category === "hot dog"
    );

    return (
        <ContainerMenu>
            <TitleMenu>What do you feel like eating today?</TitleMenu>

            {/* Hamburgers Section */}
            <ContainerIndividualMenu>
                <TitleSection>
                    Burger Bliss: Unleash Your Inner Foodie!
                </TitleSection>
                <SubContainerIndividualMenu>
                    {hamburguerProducts.map((product) => (
                        <ItemList
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </SubContainerIndividualMenu>
            </ContainerIndividualMenu>

            {/* Pizza Section */}
            <ContainerIndividualMenu>
                <TitleSection>Pizza Passion: Savor the Flavor!</TitleSection>
                <SubContainerIndividualMenu>
                    {pizzaProducts.map((product) => (
                        <ItemList
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </SubContainerIndividualMenu>
            </ContainerIndividualMenu>

            {/* Tacos Section */}
            <ContainerIndividualMenu>
                <TitleSection>Taco Time: Spice Up Your Day!</TitleSection>
                <SubContainerIndividualMenu>
                    {tacosProducts.map((product) => (
                        <ItemList
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </SubContainerIndividualMenu>
            </ContainerIndividualMenu>

            {/* Burritos Section */}
            <ContainerIndividualMenu>
                <TitleSection>Burrito Bonanza: Roll into Flavor!</TitleSection>
                <SubContainerIndividualMenu>
                    {burritosProducts.map((product) => (
                        <ItemList
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </SubContainerIndividualMenu>
            </ContainerIndividualMenu>

            {/* Chicken Section */}
            <ContainerIndividualMenu>
                <TitleSection>
                    Chicken Craze: Taste the Perfection!
                </TitleSection>
                <SubContainerIndividualMenu>
                    {chickenProducts.map((product) => (
                        <ItemList
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </SubContainerIndividualMenu>
            </ContainerIndividualMenu>

            {/* Hot Dogs Section */}
            <ContainerIndividualMenu>
                <TitleSection>Hot Dog Heaven: Bite into Joy!</TitleSection>
                <SubContainerIndividualMenu>
                    {hotDogProducts.map((product) => (
                        <ItemList
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </SubContainerIndividualMenu>
            </ContainerIndividualMenu>
        </ContainerMenu>
    );
};

export default MenuList;

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10% 0;
    gap: 20px;
`;

const TitleMenu = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 60px;
    
    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const ContainerIndividualMenu = styled.div`
    margin-bottom: 5%;
`;

const TitleSection = styled.h1`
    font-size: 35px;
    padding: 2% 2%;
    
    @media (max-width: 500px) {
        font-size: 6.5vw;
    }
`;

const SubContainerIndividualMenu = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 350px);
    gap: 20px;

    @media (max-width: 1500px) {
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
