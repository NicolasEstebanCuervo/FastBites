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
        <div>
            <ContainerMenu>
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
            </ContainerMenu>

            <ContainerMenu>
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
            </ContainerMenu>
            
            <ContainerMenu>
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
            </ContainerMenu>
            
            <ContainerMenu>
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
            </ContainerMenu>

            <ContainerMenu>
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
            </ContainerMenu>

            <ContainerMenu>
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
            </ContainerMenu>

        </div>
    );
};

export default MenuList;

const ContainerMenu = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 350px);
    gap: 20px;
    padding: 10% 0;

    @media (max-width: 1500PX) {
        grid-template-columns: repeat(3, 300px);
    }

    @media (max-width: 1000PX) {
        grid-template-columns: repeat(3, 250px);
    }

    
    @media (max-width: 850PX) {
        grid-template-columns: repeat(2, 300px);
    }

    
    @media (max-width: 650PX) {
        grid-template-columns: repeat(2, 250px);
    }

    @media (max-width: 550PX) {
        grid-template-columns: repeat(1, 300px);
    }

    
    @media (max-width: 350PX) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const TitleMenu = styled.h1``;

const SubDivMenu = styled.div``;
