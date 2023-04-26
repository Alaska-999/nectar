import React from 'react';
import {Container} from "../../components/UI/Container";
import ProductsHeader from "../../components/ProductsHeader";
import {IProduct} from "../../types/types";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import ProductsList from "../../components/ProductsList";

const CategoryProducts = () => {
    const {category} = useParams();
    const productsList: IProduct[] = useTypedSelector(
        (state) => state.productsReducer.products
    );
    const categoryProducts: IProduct[] = productsList.filter(
        (product) => `:${product.category}` === category
    );
    const searchTerm: string = useTypedSelector(
        (state) => state.productsReducer.searchTerm
    );
    const filteredProducts = categoryProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <ProductsHeader/>
           <ProductsList products={filteredProducts}/>
        </Container>
    );
};


export default CategoryProducts;