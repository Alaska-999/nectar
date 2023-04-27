import React, {FormEvent, useState} from 'react';
import {Container} from "../../components/UI/Container";
import logo from '/assets/icons/color-logo.png'
import Button from "../../components/UI/Button";
import {
    Background,
    Content,
    ErrorMessage,
    Eye,
    Form,
    Heading,
    Info,
    Input,
    Label,
    Logo, Redirect,
    RedirectWrapper
} from "./LogIn";
import {setAuth, setUser} from "../../store/reducers/userActions";
import {nanoid} from "nanoid";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const SignIn = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [errorMessageUsername, setErrorMessageUsername] = useState<boolean>(true)
    const [errorMessagePassword, setErrorMessagePassword] = useState<boolean>(true)
    const [errorMessagePhone, setErrorMessagePhone] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setUsername('');
        } else {
            const usernameRegex = /^[a-zA-Z0-9_А-Яа-яІіЇїЄєҐґ\s]{5,20}$/u;
            if (usernameRegex.test(e.target.value)) {
                setUsername(e.target.value);
                setErrorMessageUsername(false);
            } else {
                setErrorMessageUsername(true);
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

    const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setPhone('');
        } else {
            const phoneRegex = /^\d{10}$/;
            if (phoneRegex.test(e.target.value)) {
                setPhone(e.target.value);
                setErrorMessagePhone(false);
            } else {
                setErrorMessagePhone(true);
            }
        }
    }

    const navigateHome = useNavigate()
    const dispatch = useDispatch()

    const signUpHandler = (e: FormEvent) => {
        e.preventDefault()
        if (!errorMessagePassword && !errorMessageUsername && !errorMessagePhone) {
            dispatch(setAuth())
            navigateHome('/')
            const id = Number(nanoid())
            dispatch(setUser(
                id,
                username,
                'Kiyv',
                phone
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
                <Heading>Реєстрація нового користувача</Heading>
                <Info>Введіть свої облікові дані, щоб продовжити</Info>
                <Form onSubmit={signUpHandler}>
                    <Label>Ім'я користувача
                        <Input onChange={usernameChangeHandler} type='text'/>
                        {
                            error && errorMessageUsername ? <ErrorMessage>Невірний формат</ErrorMessage> : ''
                        }
                    </Label>
                    <Label>Номер телефону
                        <Input onChange={phoneChangeHandler} type='text'/>
                        {
                            error && errorMessagePhone ? <ErrorMessage>Невірний формат</ErrorMessage> : ''
                        }
                    </Label>
                    <Label>Пароль
                        <Input type={showPassword ? 'text' : 'password'} onChange={passwordChangeHandler}/>

                        {
                            error && errorMessagePassword ? <ErrorMessage>Невірний формат</ErrorMessage> : ''
                        }
                        <Eye type="button" onClick={handleToggleShowPassword}/>
                    </Label>
                    <Button type='submit'>Увійти</Button>
                </Form>
                <RedirectWrapper>
                    Вже маєте аккаунт? <Redirect to='/login'>Увійдіть!</Redirect>
                </RedirectWrapper>

            </Content>
        </Container>
    );
};

export default SignIn;