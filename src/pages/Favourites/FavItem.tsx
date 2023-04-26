import React, {FC} from 'react';
import {Line} from "../Explore/SingleProduct";
import styled from "styled-components";
import {IProductLink} from "../../types/types";
import {Link} from "react-router-dom";

const FavItem: FC<IProductLink> = ({
                                       id,
                                       name,
                                       image,
                                       price,
                                       amount,
                                       category
                                   }) => {
    return (
        <div>
            <Box to={`/explore/:${category}/${id}`}>
                <Image src={image}/>
                <Row>
                    <Info>
                        <Name>{name}</Name>
                        <Amount>{amount}</Amount>
                    </Info>
                    <Col>
                        <Price>₴{price}</Price>
                    </Col>
                </Row>
            </Box>
            <Line/>
        </div>
    );
};

const Box = styled(Link)`
  display: flex;
  //justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  text-decoration: none;
  color: var(--black);
`

const Image = styled.img`
  height: 85px;
  max-width: 85px;
  object-fit: contain;
  margin: auto 35px auto 0;
  width: 20vw;

`
const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`
const Amount = styled.div`
  font-size: 16px;
  color: var(--grey);
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 73vw;
`

const Info = styled.div`

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Price = styled.div`
  font-weight: 600;
  text-align: right;
`


export default FavItem;