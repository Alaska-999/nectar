import styled from 'styled-components';
import React, {FC} from "react";
import search from '/assets/icons/search.svg'

interface SearchProps {
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    onSubmit?: any;
}


const Search: FC<SearchProps> = ({placeholder, onChange, value}) => (
    <SearchWrapper>
        <SearchInput type="text" placeholder={placeholder} onChange={onChange} value={value}/>
        <SearchBtn/>
    </SearchWrapper>

);

const SearchWrapper = styled.form`
  width: 100%;
  position: relative;
`

const SearchInput = styled.input<SearchProps>`
  width: 100%;
  border: none;
  background-color: #F2F3F2;
  padding: 17px 15px;
  border-radius: 15px;
  font-size: 16px;
  font-family: 'Roboto-Medium', sans-serif;

  ::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(140, 255, 194, 0.26);
  }
`;

const SearchBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);


  ::after {
    content: url(${search});
  }
`;

export default Search;