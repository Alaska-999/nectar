import React, {FC} from 'react';
import styled from "styled-components";

interface CounterProps {
    count: number;
    decrement: () => void;
    increment: () => void;
}

const Counter: FC<CounterProps> = React.memo(({count, increment, decrement}) => {

    return (
        <CounterWrapper>
            <CounterButton onClick={decrement}>−</CounterButton>
            <CounterInput min={1} readOnly value={count}/>
            <CounterButton onClick={increment}>+</CounterButton>
        </CounterWrapper>
    );
})

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`
const CounterButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 38px;
  padding: 20px;
  color: var(--grey);
  :active {
    color: var(--green);
  }
  :focus {
    color: var(--green);
  }
  
`
const CounterInput = styled.input`
  font-size: 20px;
  font-weight: 600;
  max-width: 55px;
  height: 48px;
  //padding: 0 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E2E2E2;
  border-radius: 17px;
`

export default Counter;