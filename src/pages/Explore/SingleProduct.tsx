import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../types/types";
import {Container} from '../../components/UI/Container';
import styled from "styled-components";
import fav from '/public/assets/icons/navigation/fav.svg'
import Counter from "../../components/Counter";
import down_arr from '/assets/icons/arrow-down.svg'
// import right_arr from '/assets/icons/arrow-right.svg'
import back from '/assets/icons/back_arrow.svg'
import Button from "../../components/UI/Button";
import {addToCart, addToFavourites, removeFromFavourites} from "../../store/reducers/productsActions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { useNavigate } from 'react-router-dom';

const SingleProduct: FC<IProduct> = ({
                                         id,
                                         name,
                                         amount,
                                         category,
                                         image,
                                         details,
                                         nutritious,
                                         price
                                     }) => {

    const favourites = useTypedSelector(state => state.productsReducer.favorites)

    const [activeDetails, setActiveDetails] = useState<boolean>(false)
    const [activeNutritious, setActiveNutritious] = useState<boolean>(false)

    const [counter, setCounter] = useState<number>(1)
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const navigate = useNavigate();

    useEffect(() => {
        setIsFavorite(favourites.some(p => p.id === id))
    }, [favourites, id])

    const dispatch = useDispatch()

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const addToCartHandler = () => {
        if (counter >= 1) {
            dispatch(addToCart({
                id,
                name,
                amount,
                image,
                price,
                quantity: counter
            }))
            setCounter(1)
        } else {
            console.log('error')
        }
    }

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavourites(id))
        } else {
            dispatch(addToFavourites({
                id,
                name,
                image,
                price,
                amount,
                category
            }))
        }
    }

    return (
        <Container>
            <Header>
                <Back onClick={() => navigate(-1)}/>
            </Header>
            <Image src={image}/>
            <Info>
                <Row>
                    <div>
                        <Name>{name}</Name>
                        <Amount>{amount}</Amount>
                    </div>
                    <FavButton className={isFavorite ? 'is-favorite' : ''} onClick={toggleFavorite}/>
                </Row>
                <Row>
                    <Counter count={counter} decrement={decrement} increment={increment}/>
                    <Price>₴{price}</Price>
                </Row>
                <Line/>
                <Details>
                    <DetailsRow onClick={() => setActiveDetails(!activeDetails)}>
                        <Subtitle>Детальніше про продукт</Subtitle>
                        <Down/>
                    </DetailsRow>
                    {activeDetails ?
                        <DetailsContent>{details}</DetailsContent>
                        : ''
                    }

                </Details>
                <Line/>
                <Details>
                    <DetailsRow onClick={() => setActiveNutritious(!activeNutritious)}>
                        <Subtitle>Поживна цінність</Subtitle>
                        <Down/>
                    </DetailsRow>
                    {activeNutritious ?
                        <DetailsContent>
                            Калорійність - {nutritious.calorieContent},
                            Білки - {nutritious.proteins},
                            Жири - {nutritious.fats},
                            Вуглеводи - {nutritious.carbohydrates}
                        </DetailsContent>
                        : ''
                    }
                </Details>
            </Info>
            <ButtonWrapper>
                <Button onClick={addToCartHandler}>Додати в корзину</Button>
            </ButtonWrapper>
        </Container>
    );
}


const Header = styled.div`

`
const Image = styled.img`
  height: 250px;
  max-width: 370px;
  object-fit: contain;
  display: block;
  margin: 0 auto 30px;
`
const Info = styled.div`

`

const Back = styled.div`
  ::before {
    content: url(${back});
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
`
const Name = styled.h3`
  margin-bottom: 5px;
`
const Amount = styled.div`
  font-size: 18px;
  color: var(--grey);
`
const FavButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  width: 24px;
  height: 24px;
  margin-bottom: 18px;

 
  ::after {
    content: url(${fav});
    filter: brightness(0) saturate(0);
  }
  &.is-favorite {
    ::after {
      filter: brightness(1) saturate(1);
    }
   
  }
`
const Price = styled.div`
  font-size: 26px;
  font-weight: 600;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E2E2E2;
`

const Details = styled.div`

`

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`

const Subtitle = styled.h4`

`

export const Down = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: 15px;
  height: 15px;

  ::before {
    content: url(${down_arr});
  }
`

const DetailsContent = styled.div`
  margin-bottom: 20px;
`
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 35px;
  width: 90vw;
`


export default SingleProduct;