import React, {FC} from 'react';
import Product from "./Product";
import styled from "styled-components";
import {IProduct} from "../types/types";

const ProductsList: FC<{ products: IProduct[] }> = ({ products }) => {
    return (
        <ProductsContainer>
            {products.map((p) => (
                <SingleProductLink>
                    <Product
                        key={p.id}
                        name={p.name}
                        amount={p.amount}
                        category={p.category}
                        image={p.image}
                        id={p.id}
                        price={p.price}
                    />
                </SingleProductLink>
            ))}
        </ProductsContainer>
    );
};
const SingleProductLink = styled.div`
  text-decoration: none;
`

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 15px;
  margin-top: 20px;
  //margin-bottom: 60px;
`

export default ProductsList;