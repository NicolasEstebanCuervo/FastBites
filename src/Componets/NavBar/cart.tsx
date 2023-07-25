import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import styled from "@emotion/styled";

interface Product {
    id: number;
    title: string;
    price: number;
    image?: any;
    category: string;
    quantity: number;
}

export const Cart: React.FC = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    const toggleMenu = () => {
        setMenu(false);
    };

    const reduceQuantity = (id: number) => {
        cart.forEach((item: Product) => {
            if (item.id === id) {
                item.quantity === 1
                    ? (item.quantity = 1)
                    : (item.quantity -= 1);
            }
        });
        setCart([...cart]);
    };

    const increaseQuantity = (id: number) => {
        cart.forEach((item: Product) => {
            if (item.id === id) {
                item.quantity += 1;
            }
        });
        setCart([...cart]);
    };

    const removeProduct = (id: number) => {
        const newCart = cart.filter((item: Product) => item.id !== id);
        setCart(newCart);
    };

    return (
        <CartContainer>
            <TitleCart>Your Cart</TitleCart>
            {cart.length === 0 ? (
                <EmptyCartMessage>Empty Cart</EmptyCartMessage>
            ) : (
                <>
                    {cart.map((product: Product) => (
                        <CartItem key={product.id}>
                            <ProductImage src={product.image} alt={product.title} />
                            <ProductInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductPrice>${product.price}</ProductPrice>
                            </ProductInfo>
                            <QuantityContainer>
                                <QuantityButtons>
                                    <button onClick={() => reduceQuantity(product.id)}>
                                        <i className="bi bi-arrow-down"></i>
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => increaseQuantity(product.id)}>
                                        <i className="bi bi-arrow-up"></i>
                                    </button>
                                </QuantityButtons>
                                <RemoveButton onClick={() => removeProduct(product.id)}>
                                    <i className="bi bi-trash"></i>
                                </RemoveButton>
                            </QuantityContainer>
                        </CartItem>
                    ))}
                </>
            )}
            <TotalContainer>
                <TotalText>Total: ${total}</TotalText>
                <PaymentButton>Payment</PaymentButton>
            </TotalContainer>
        </CartContainer>
    );
}
const CartContainer = styled.div`
    background: #f2f2f2;
    padding: 2% 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    border-radius: 25px;
`;

const TitleCart = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 60px;

    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const CartItem = styled.div`
    background: #fff;
    max-width: 1000px;
    width: 90%;
    padding: 3% 5%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 8px;
`;

const ProductImage = styled.img`
    width: 150px;
    height: 150px;
    margin-right: 10px;
`;

const ProductInfo = styled.div`
    flex: 1;
`;

const ProductTitle = styled.h1`
    font-size: 20px;
`;

const ProductPrice = styled.p`
    font-size: 18px;
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RemoveButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 25px;
    margin-right: 10px;

    &:hover {
        transform: scale(1.2);
    }
`;

const QuantityButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 5px;

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 25px;
        color: #333;
        padding: 5px;
        display: flex;
        align-items: center;

        &:hover {
            background-color: #f0f0f0;
        }
    }

    span {
        font-size: 30px;
        margin: 0 10px;
    }
`;

const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 400px;
    margin-top: 20px;
`;

const TotalText = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-bottom:10%;

    @media (max-width: 500px) {
        font-size: 8vw;
    }
`;

const PaymentButton = styled.button`
    background-color: #f9c80e;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ffa500;
    }
`;

const EmptyCartMessage = styled.h1`
    text-align: center;
    font-size: 3rem;
`;
