import React, {FormEvent, useState} from 'react';
import {Container} from "../../components/UI/Container";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import logo from '/assets/icons/color-logo.png'
import bg from '/assets/background_pic/login-form-bg.jpg'
import eye from '/assets/icons/eye.png'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setAuth, setUser} from "../../store/reducers/userActions";
import {nanoid} from "nanoid";

const LogIn = () => {

    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');

    const [errorMessagePhone, setErrorMessagePhone] = useState<boolean>(true)
    const [errorMessagePassword, setErrorMessagePassword] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)


    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setPhone('');
        } else {
            const phoneRegex = /^\d{9}$/;
            if (phoneRegex.test(e.target.value)) {
                setPhone(e.target.value);
                setErrorMessagePhone(false);
            } else {
                setErrorMessagePhone(true);
            }
        }
    }


    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setPassword('');
        } else {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if (passwordRegex.test(e.target.value)) {
                setPassword(e.target.value);
                setErrorMessagePassword(false);
            } else {
                setErrorMessagePassword(true);
            }
        }
    }

    const navigateHome = useNavigate()
    const dispatch = useDispatch()

    const logInHandler = (e: FormEvent) => {
        e.preventDefault()
        if (!errorMessagePhone && !errorMessagePassword) {
            dispatch(setAuth())
            navigateHome('/')
            const id = Number(nanoid())
            dispatch(setUser(
                id,
                'Крістіна Гаранчук',
                'Kiyv',
                '0966735903'
            ))

        } else {
            setError(true)
        }
    }

    return (
        <Container>
            <Background/>
            <Content>
                <Logo src={logo} alt='logo'/>
                <Heading>Вхід у аккаунт</Heading>
                <Info>Введіть свій номер телефону та пароль</Info>
                <Form onSubmit={logInHandler}>
                    <Label>Номер телефону
                        <PhoneNum>+380</PhoneNum>
                        <Input onChange={phoneChangeHandler} type='text' paddingLeft='47px'/>
                        {
                            error && errorMessagePhone ? <ErrorMessage>Невірний формат</ErrorMessage> : ''
                        }
                    </Label>
                    <Label>Пароль
                        <Input type={showPassword ? 'text' : 'password'} onChange={passwordChangeHandler}/>

                        {
                            error && errorMessagePassword ? <ErrorMessage>Пароль має містити принаймні 6 символів, 1 цифру, по 1 букві нижнього та верхнього регістру</ErrorMessage> : ''
                        }
                        <Eye type="button" onClick={handleToggleShowPassword}/>
                    </Label>
                    <Button type='submit'>Увійти</Button>
                </Form>
                <RedirectWrapper>
                    Не маєте акаунту? <Redirect to='/signin'>Зареєструйтесь!</Redirect>
                </RedirectWrapper>

            </Content>
        </Container>
    );
};


export const Background = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 302px;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
`

export const Logo = styled.img`
  width: 47px;
  height: 55px;
  margin: 25px auto 40px;
  z-index: 10;
`

export const Heading = styled.h3`
  margin-bottom: 10px;
  z-index: 10;
`

export const Info = styled.div`
  font-size: 18px;
  color: var(--grey);
  margin-bottom: 40px;
  z-index: 10;
`

export const Form = styled.form`
  z-index: 10;
`

export const ErrorMessage = styled.div`
  color: red;
  padding-bottom: 35px;
  font-size: 18px;
  margin-top: -10px;

`

export const Label = styled.label`
  font-size: 18px;
  color: var(--grey);
  position: relative;

`

export const PhoneNum = styled.div`
  position: absolute;
  top: 2.67rem;
  font-size: 20px;
  font-weight: 500;
`
interface InputProps {
    paddingLeft?: string;
}
export const Input = styled.input<InputProps>`
  border: none;
  width: 100%;
  border-bottom: 1px solid #E2E2E2;
  background-color: inherit;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 11px;
  padding-top: 20px;
  padding-left: ${(props) => props.paddingLeft};
`

export const Eye = styled.button`
  width: 21px;
  height: 21px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: sticky;
  bottom: 580px;
  left: 2000px;
  padding-right: 30px;

  ::after {
    content: url(${eye});
  }
`

export const RedirectWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
`

export const Redirect = styled(Link)`
  text-decoration: none;
  color: var(--green);
  font-family: "Roboto-Medium", sans-serif;
`


export default LogIn;