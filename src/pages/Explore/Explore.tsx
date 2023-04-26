import React, {FC} from 'react';
import {Container} from "../../components/UI/Container";
import styled from "styled-components";
import Category from "../../components/Category";
import veg from '/public/assets/categories/vegetables.png'
import fruits from '/public/assets/categories/fruita.png'
import beans from '/public/assets/categories/beans.png'
import berries from '/public/assets/categories/berries.png'
import nuts from '/public/assets/categories/nuts.png'
import oil from '/public/assets/categories/oil.png'
import Navigation from "../../components/Navigation";
import {Link} from "react-router-dom";

const Explore: FC = () => {
    return (

        <Container>
            <Heading>Оберіть категорію</Heading>
            <Categories>

                <CategoryLink to='/explore/:vegetables'>
                    <Category name={'Свіжі овочі'}
                              image={veg}
                              rgbColor={'83, 177, 117'}/>
                </CategoryLink>

                <CategoryLink to='/explore/:fruits'>
                    <Category name={'Фрукти'}
                              image={fruits}
                              rgbColor={'247, 165, 147'}/>
                </CategoryLink>

                <CategoryLink to='/explore/:oils'>
                    <Category name={'Олія та масло'}
                              image={oil}
                              rgbColor={'248, 164, 76'}/>
                </CategoryLink>

                <CategoryLink to='/explore/:berries'>
                    <Category name={'Сезонні ягоди'}
                              image={berries}
                              rgbColor={'211, 176, 224'}/>
                </CategoryLink>

                <CategoryLink to='/explore/:nuts'>
                    <Category name={'Горіхи'}
                              image={nuts}
                              rgbColor={'183, 223, 245'}/>
                </CategoryLink>

                <CategoryLink to='/explore/:beans'>
                    <Category name={'Боби'}
                              image={beans}
                              rgbColor={'253, 229, 152'}/>
                </CategoryLink>
            </Categories>
            <Navigation/>
        </Container>

    );
};


const Heading = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Categories = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 15px;
  //margin-bottom: 60px;

`

export default Explore;