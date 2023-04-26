import React from 'react';
import styled from "styled-components";

const AddedPopup = () => {
    return (
        <Popup>
            Added to cart
        </Popup>
    );
};
const Popup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  left: 10px;
  width: 90%;
  background-color: var(--green);
  border-radius: 18px;
  height: 45px;
`
export default AddedPopup;