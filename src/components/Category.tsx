import React, {FC} from 'react';
import styled from "styled-components";

interface CategoryProps {
    name: string;
    image: string;
    background?: string;
    rgbColor: string;
}

const Category: FC<CategoryProps> = ({image, name, rgbColor}) => {
    return (
        <Box rgbColor={rgbColor}>
            <Image src={image}/>
            <Name>{name}</Name>
        </Box>
    );
};


const Box = styled.div<{ rgbColor: string }>`
  margin-top: 20px;
  position: relative;
  border: 1px solid rgb(${props => props.rgbColor});
  border-radius: 18px;
  background-color: rgba(${props => props.rgbColor}, 0.2);
  padding: 28px 31px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 190px;
 //width: 50%;
`;

const Image = styled.img`
width: 120px;
 
  object-fit: contain;
`

const Name = styled.div`
  text-align: center;
  font-family: 'Roboto-Medium', sans-serif;
`

export default Category;