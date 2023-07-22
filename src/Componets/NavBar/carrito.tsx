import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import styled from "@emotion/styled";

interface Product {
    id: number;
    title: string;
    price: number;
    image?: any;
    category: string;
    quantity: number; // Agregamos 'cantidad' para llevar el control del número de productos
}

const CarritoContainer = styled.div`
    /* Agrega estilos según tu preferencia */
`;

const CarritoItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 10px;
`;

const ProductInfo = styled.div`
    flex: 1;
`;

const ProductTitle = styled.h3`
    margin: 0;
`;

const ProductPrice = styled.p`
    margin: 0;
`;

const QuantityButton = styled.button`
    background: #f0f0f0;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
`;

export const Carrito: React.FC = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.cart;
    const [total] = value.total;

    const toggleMenu = () => {
        setMenu(false);
    };

    const reduceQuantity = (id: number) => {
        carrito.forEach((item: Product) => {
            if (item.id === id) {
                item.quantity === 1
                    ? (item.quantity = 1)
                    : (item.quantity -= 1);
            }
        });
        setCarrito([...carrito]);
    };

    const increaseQuantity = (id: number) => {
        carrito.forEach((item: Product) => {
            if (item.id === id) {
                item.quantity += 1;
            }
        });
        setCarrito([...carrito]);
    };

    const removeProduct = (id: number) => {
        const newCarrito = carrito.filter((item: Product) => item.id !== id);
        setCarrito(newCarrito);
    };

    const showCart1 = menu ? "carritos show" : "carrito";
    const showCart2 = menu ? "carrito show" : "carrito";

    return (
        <CarritoContainer className={showCart1}>
            <div className={showCart2}>
                <div onClick={toggleMenu} className="carrito__close">
                    {/* Your close icon here */}
                </div>
                <h2>Your Cart</h2>
                <div className="carrito__center">
                    {carrito.length === 0 ? (
                        <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
                            Empty Cart
                        </h2>
                    ) : (
                        <>
                            {carrito.map((producto: Product) => (
                                <CarritoItem key={producto.id}>
                                    <ProductImage
                                        src={producto.image}
                                        alt={producto.title}
                                    />
                                    <ProductInfo>
                                        <ProductTitle>
                                            {producto.title}
                                        </ProductTitle>
                                        <ProductPrice>
                                            ${producto.price}
                                        </ProductPrice>
                                    </ProductInfo>
                                    <QuantityButton
                                        onClick={() =>
                                            reduceQuantity(producto.id)
                                        }
                                    >
                                        Disminuir
                                    </QuantityButton>
                                    <span>{producto.quantity}</span>
                                    <QuantityButton
                                        onClick={() =>
                                            increaseQuantity(producto.id)
                                        }
                                    >
                                        Incrementar
                                    </QuantityButton>
                                    <div
                                        onClick={() =>
                                            removeProduct(producto.id)
                                        }
                                    >
                                        xdd
                                    </div>
                                </CarritoItem>
                            ))}
                        </>
                    )}
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </CarritoContainer>
    );
};
