import { useContext } from "react";
import { DataContext } from "../../Context/Context";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    price: number;
    image?: any;
    category: string;
    quantity: number;
}

export const Cart = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;
    const [total] = value.total;

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
        <>
            {menu ? (
                <CartContainer>
                    <RemoveButtonCart onClick={() => setMenu(false)}>
                        <i className="bi bi-x"></i>
                    </RemoveButtonCart>
                    <TitleCart>Your Cart</TitleCart>
                    {cart.length === 0 ? (
                        <EmptyCartMessage>Empty Cart</EmptyCartMessage>
                    ) : (
                        <>
                            {cart.map((product: Product) => (
                                <CartItem key={product.id}>
                                    <ProductImage
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <ProductInfo>
                                        <ProductTitle>
                                            {product.title}
                                        </ProductTitle>
                                        <ProductPrice>
                                            ${product.price}
                                        </ProductPrice>
                                    </ProductInfo>
                                    <QuantityContainer>
                                        <QuantityButtons>
                                            <button
                                                onClick={() =>
                                                    reduceQuantity(product.id)
                                                }
                                            >
                                                <i className="bi bi-arrow-down"></i>
                                            </button>
                                            <span>{product.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    increaseQuantity(product.id)
                                                }
                                            >
                                                <i className="bi bi-arrow-up"></i>
                                            </button>
                                        </QuantityButtons>
                                        <RemoveButtonProduct
                                            onClick={() =>
                                                removeProduct(product.id)
                                            }
                                        >
                                            <i className="bi bi-x"></i>
                                        </RemoveButtonProduct>
                                    </QuantityContainer>
                                </CartItem>
                            ))}
                            <TotalContainer>
                                <TotalText>Total: ${total}</TotalText>
                                <PaymentButton  onClick={() => setMenu(false)} to="/Pay">Payment</PaymentButton>
                            </TotalContainer>
                        </>
                    )}
                </CartContainer>
            ) : (
                <br></br>
            )}
        </>
    );
};

const CartContainer = styled.div`
    background: #f2f2f2;
    padding: 5% 0;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    margin: auto;
    border-radius: 25px;
    gap: 5vh;
    margin-top: 10%;
`;

const RemoveButtonCart = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0.5%;
    right: 0.5%;
    font-size: 30px;

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }

    @media (max-width: 300px) {
        font-size: 8vw;
    }
`;

const TitleCart = styled.h1`
    font-size: 50px;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 8vw;
    }
`;

const CartItem = styled.div`
    background: #fff;
    max-width: 1000px;
    width: 90%;
    padding: 3% 5%;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    border-radius: 8px;
    gap: 1%;
    position: relative;
`;

const ProductImage = styled.img`
    width: 100%;
    margin-right: 1%;
    border-radius: 25px;
    max-width: 150px;
    height: 150px;
    border-radius: 2vw;

    @media (max-width: 800px) {
        max-width: 100px;
        height: 100px;
    }

    @media (max-width: 700px) {
        max-width: 80px;
        height: 80px;
    }

    @media (max-width: 400px) {
        max-width: 70px;
        height: 70px;
    }

    @media (max-width: 350px) {
        max-width: 60px;
        height: 60px;
    }

    @media (max-width: 300px) {
        max-width: 50px;
        height: 50px;
    }

    @media (max-width: 250px) {
        max-width: 40px;
        height: 40px;
    }

    @media (max-width: 60px) {
        max-width: 10px;
        height: 10px;
    }
`;

const ProductInfo = styled.div`
    flex: 1;
`;

const ProductTitle = styled.h1`
    font-size: 25px;

    @media (max-width: 800px) {
        font-size: 3vw;
    }

    @media (max-width: 600px) {
        font-size: 3.5vw;
    }

    @media (max-width: 400px) {
        font-size: 4vw;
    }

    @media (max-width: 300px) {
        font-size: 5vw;
    }
`;

const ProductPrice = styled.p`
    font-size: 20px;

    @media (max-width: 800px) {
        font-size: 2.5vw;
    }

    @media (max-width: 600px) {
        font-size: 3vw;
    }

    @media (max-width: 400px) {
        font-size: 3.5vw;
    }

    @media (max-width: 300px) {
        font-size: 5vw;
    }
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RemoveButtonProduct = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }

    @media (max-width: 300px) {
        font-size: 8vw;
    }
`;

const QuantityButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
    gap: 10%;

    @media (max-width: 800px) {
        gap: 0px;
        flex-direction: column-reverse;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 35px;
        color: #333;
        display: flex;
        align-items: center;

        &:hover {
            transform: scale(1.2);
        }

        @media (max-width: 600px) {
            font-size: 5vw;
        }

        @media (max-width: 400px) {
            font-size: 6vw;
        }

        @media (max-width: 300px) {
            font-size: 7vw;
        }
    }

    span {
        font-size: 30px;

        @media (max-width: 600px) {
            font-size: 4.5vw;
        }

        @media (max-width: 400px) {
            font-size: 6.5vw;
        }

        @media (max-width: 300px) {
            font-size: 7.5vw;
        }
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
    margin-bottom: 10%;

    @media (max-width: 500px) {
        font-size: 8vw;
    }
`;

const PaymentButton = styled(Link)`
    color: #000;
    text-decoration-line: none;
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

const EmptyCartMessage = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-top: 5%;

    @media (max-width: 500px) {
        margin-top: 10%;
        font-size: 6vw;
    }
`;