import styled from "@emotion/styled";
import { useEffect, useState } from "react";

function Header() {

    const titlePhrases = [
        "Saborea la deliciosa rapidez en cada bocado, en nuestra página de comida rápida.",
        "Encuentra la combinación perfecta entre sabor y rapidez en nuestra página de comida rápida.",
        "Disfruta de la conveniencia y el placer de una comida rápida exquisita en nuestro sitio web.",
        "Explora un mundo de sabores irresistibles a solo un clic de distancia en nuestra página de comida rápida.",
        "Déjate llevar por la explosión de sabores y la comodidad incomparable en nuestra página de comida rápida.",
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            const phraseTimeout = setTimeout(() => {
                if (
                    currentPhrase.length <
                    titlePhrases[currentPhraseIndex].length
                ) {
                    const nextCharIndex = currentPhrase.length;
                    setCurrentPhrase(
                        titlePhrases[currentPhraseIndex].substring(
                            0,
                            nextCharIndex + 1
                        )
                    );
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setCurrentPhrase("");
                        setCurrentPhraseIndex(
                            (prevIndex) => (prevIndex + 1) % titlePhrases.length
                        );
                        setIsTyping(true);
                    }, 2000);
                }
            }, 50);

            return () => clearTimeout(phraseTimeout);
        }
    }, [currentPhrase, currentPhraseIndex, isTyping, titlePhrases]);


    return (
        <HeaderContainer>
        <TitleHeader>{currentPhrase}</TitleHeader>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    max-width: 70%;
    padding: 10% 2%;

    @media (max-width: 1000px) {        
        max-width: 100%;
    }
`

const TitleHeader = styled.header`
    font-size: 45px;

    @media (max-width: 600px) {        
        font-size: 40px;
    }

    @media (max-width: 500px) {        
        font-size: 35px;
    }

    @media (max-width: 400px) {        
        font-size: 30px;
    }

    @media (max-width: 300px) {        
        font-size: 20px;
    }

    @media (max-width: 200px) {        
        font-size: 15px;
    }

    @media (max-width: 100px) {        
        font-size: 10vw;
    }

`