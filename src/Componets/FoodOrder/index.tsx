import styled from "@emotion/styled";
import NequiIcon from "../../Assets/Icons/Nequi.svg";
import MasterCardIcon from "../../Assets/Icons/MasterCard.svg";
import VisaIcon from "../../Assets/Icons/Visa.svg";
import FireIcon from "../../Assets/Icons/Fire.svg";
import ThunderIcon from "../../Assets/Icons/Thunder.svg";
import HamburguerIcon from "../../Assets/Images/IconHamburguer.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContext } from "../../Context/Context";
import { useContext } from "react";

export default function FoodOrder() {
    interface Product {
        id: number;
        title: string;
        price: number;
        image?: any;
        category: string;
        quantity: number;
    }

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    const deleteCart = () => {
        setCart([]);
    };

    return (
        <ContainerFoodOrder>
            <FirstContainerFoodOrder>
                <ContainerLogo>
                    <HamburguerIconImage src={HamburguerIcon} alt="" />
                    <TitleLogo>FastBites</TitleLogo>
                </ContainerLogo>
                <CustomCarousel indicators={false} data-bs-theme="dark">
                    {cart.map((product: Product) => (
                        <Carousel.Item key={product.id}>
                            <CartItem>
                                <ImageCard
                                    className="d-block w-100"
                                    src={product.image}
                                    alt={product.title}
                                />
                                <ContainerTexsCard>
                                    <TitleProducts>
                                        {product.title}
                                    </TitleProducts>
                                    <DescriptionProducts>
                                        Quantity: {product.quantity}
                                    </DescriptionProducts>
                                    <DescriptionProducts>
                                        Total price: {product.price}
                                    </DescriptionProducts>
                                </ContainerTexsCard>
                            </CartItem>
                        </Carousel.Item>
                    ))}
                </CustomCarousel>
            </FirstContainerFoodOrder>

            <SecondContainerFoodOrder>
                <div>
                    <TitleFoodOrder>Pay your order</TitleFoodOrder>
                    <OrderPrice>
                        The price to pay is<DolarSigno>$ {total}</DolarSigno>
                    </OrderPrice>
                </div>
                <ContainerIcons>
                    <NequiIconImg src={NequiIcon} alt="" />
                    <MasterCardIconImg src={MasterCardIcon} alt="" />
                    <VisaIconImg src={VisaIcon} alt="" />
                </ContainerIcons>
                <ContainerExtras>
                    <ContainerIndividualExtra>
                        <FireIconImg src={FireIcon} alt="" />
                        <ContainerTextsIndividualExtra>
                            <TitleIndividualExtra>
                                Very hot
                            </TitleIndividualExtra>
                            <DescriptionIndividualExtra>
                                Freshly made food
                            </DescriptionIndividualExtra>
                        </ContainerTextsIndividualExtra>
                    </ContainerIndividualExtra>

                    <ContainerIndividualExtra>
                        <ThunderIconImg src={ThunderIcon} alt="" />
                        <ContainerTextsIndividualExtra>
                            <TitleIndividualExtra>
                                Record time
                            </TitleIndividualExtra>
                            <DescriptionIndividualExtra>
                                Orders in less than 30 min
                            </DescriptionIndividualExtra>
                        </ContainerTextsIndividualExtra>
                    </ContainerIndividualExtra>
                </ContainerExtras>

                <ButtonOrder
                    onClick={() => {
                        deleteCart();
                    }}
                    to="/Thanks"
                >
                    Pay my food
                </ButtonOrder>
            </SecondContainerFoodOrder>
        </ContainerFoodOrder>
    );
}

const ContainerFoodOrder = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
    gap: 10vw;
    min-height: 100vh;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const FirstContainerFoodOrder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32%;
    gap: 5vh;

    @media (max-width: 1000px) {
        width:80%;
    }
`;

const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 20%;
    border-radius: 20px;
    background: #f2f2f2;
    box-shadow: 2px 0px 52px 25px rgba(53, 23, 23, 0.16);
    -moz-box-shadow: 2px 0px 52px 25px rgba(53, 23, 23, 0.16);
    -webkit-box-shadow: 2px 0px 52px 25px rgba(53, 23, 23, 0.16);
`;

const HamburguerIconImage = styled.img`
    width: 100px;

    @media (max-width: 500px) {
        width: 20vw;
    }
`;

const TitleLogo = styled.h1`
    font-size: 50px;
    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const CustomCarousel = styled(Carousel)`
    .carousel-control-next-icon {
        position: absolute;
        right: -80%;
        z-index: 1;
        font-weight: bold;
        max-width: 300px;
        width: 100%;
    }

    .carousel-control-prev-icon {
        position: absolute;
        left: -80%;
        z-index: 1;
        font-weight: bold;
        max-width: 300px;
        width: 100%;
    }
`;

const CartItem = styled.div`
    display: flex;
    gap: 3vh;
    flex-direction: column;
    padding: 10% 8%;
    width: 100%;
    border-radius: 20px;
    background: #f2f2f2;
`;

const ImageCard = styled.img`
    object-fit: cover;
    width: 400px;
    border-radius: 10px;
`;

const ContainerTexsCard = styled.div``;

const TitleProducts = styled.h1`
    font-size: 30px;

    @media (max-width: 500px) {
        font-size: 7vw;
    }
`;

const DescriptionProducts = styled.h3`
    font-size: 25px;

    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

const SecondContainerFoodOrder = styled.div`
    background: #f2f2f2;
    display: flex;
    gap: 3vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    border-radius: 25px;
    box-shadow: 2px 0px 52px 25px rgba(53, 23, 23, 0.16);
    -moz-box-shadow: 2px 0px 52px 25px rgba(53, 23, 23, 0.16);
    -webkit-box-shadow: 2px 0px 52px 25px rgba(53, 23, 23, 0.16);
`;

const TitleFoodOrder = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size: 10vw;
    }
`;

const OrderPrice = styled.h3`
    display: flex;
    gap: 3%;
    justify-content: center;
    font-size: 25px;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

const DolarSigno = styled.h3`
    font-weight: bold;
    font-size: 25px;
    
    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
`;

const NequiIconImg = styled.img`
    width: 120px;

    @media (max-width: 500px) {
        width: 21vw;
    }
`;

const MasterCardIconImg = styled.img`
    width: 60px;

    @media (max-width: 500px) {
        width: 15vw;
    }
`;

const VisaIconImg = styled.img`
    width: 100px;

    @media (max-width: 500px) {
        width: 20vw;
    }
`;

const ContainerExtras = styled.div`
    display: flex;
    gap: 3vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerIndividualExtra = styled.div`
    display: flex;
    gap: 5%;
    width: 100%;
`;

const ThunderIconImg = styled.img`
    width: 50px;

    @media (max-width: 500px) {
        width: 13vw;
    }
`;

const FireIconImg = styled.img`
    width: 50px;
    padding: 5px;

    @media (max-width: 500px) {
        width: 12vw;
    }
`;

const ContainerTextsIndividualExtra = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleIndividualExtra = styled.h1`
    font-size: 25px;
    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

const DescriptionIndividualExtra = styled.h4`
    @media (max-width: 768px) {
        font-size: 18px;
        margin-left: 0px;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;

const ButtonOrder = styled(Link)`
    color: #000;
    text-decoration: none;
    background-color: #f9c80e;
    border: none;
    padding: 15px 100px;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width: 400px) {
        font-size: 5vw;
        padding: 1vh 10vw;
    }
`;