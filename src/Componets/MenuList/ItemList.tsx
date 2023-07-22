import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/Context";
import styled from "@emotion/styled";

interface ProductoItemProps {
    title: string;
    image: any;
    category: string;
    price: number;
    id: number;
}

export const ItemList: React.FC<ProductoItemProps> = ({
    title,
    image,
    price,
    id,
}) => {
    const { addToCart } = useContext(DataContext);

    return (
                <FoodContainer key={id}>
                    <ImageFood src={image} alt={title} />
                    <TextContainer>
                        <TitleFood>{title}</TitleFood>
                    <div className="price">${price} </div>
                        <DescriptionFood>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Pariatur laboriosam quo doloremque nemo eos corrupti
                        </DescriptionFood>
                    </TextContainer>
                    <Button onClick={() => addToCart(id)} className="btn">
                        Añadir al carrito
                    </Button>
                </FoodContainer>
    );
};

const FoodContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10px;
    gap: 20px;
    width: 350px;
    border-radius: 20px;
    background-color: #f2f2f2;


    @media (max-width: 1200PX) {
        width:300px;
    }

    @media (max-width: 1000PX) {
        width:250px;
    }

    
    @media (max-width: 850PX) {
        width:300px;
    }

    
    @media (max-width: 650PX) {
        width:250px;
    }

    @media (max-width: 550PX) {
        width:300px;
    }

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
    
    @media (max-width: 1000PX) {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }
`;

const DescriptionFood = styled.p`
    font-size: 15px;
    margin-top: 5px;
    max-width: 80%;

    @media (max-width: 1000PX) {
        font-size: 15px;
    }

    @media (max-width: 400px) {
        font-size: 4.5vw;
    }
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

    
    @media (max-width: 1200PX) {
        max-width: 260px;
    }

    @media (max-width: 1000PX) {
        max-width: 200px;
    }

    @media (max-width: 300px) {
        font-size: 6vw;
        padding: 1vh 6vw;

    }
`;
