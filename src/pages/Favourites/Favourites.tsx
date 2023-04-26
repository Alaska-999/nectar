import React from 'react';
import {Container} from "../../components/UI/Container";
import {Heading} from "../../styles/global";
import {Line} from "../Explore/SingleProduct";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import FavItem from "./FavItem";


const Favourites = () => {
    const favourites = useTypedSelector(state => state.productsReducer.favorites)


    return (
        <Container>
            <Heading>Вибране</Heading>
            <Line/>
            {favourites.map(p => <FavItem price={p.price}
                                          amount={p.amount}
                                          name={p.name}
                                          image={p.image}
                                          id={p.id}
                                          category={p.category}
                                          key={p.id}/>)}

        </Container>
    );
};

export default Favourites;