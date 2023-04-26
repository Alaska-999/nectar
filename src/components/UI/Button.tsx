import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = styled.button<ButtonProps>`
  padding: 20px 24px;
  border: none;
  outline: none;
  border-radius: 19px;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
  background-color: #53B175;
  font-family: "Roboto-Medium", sans-serif;
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6FAE79;
  }
  
  & + & {
    margin-top: 40px;
  }
`;

export default Button;