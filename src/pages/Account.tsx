import React from 'react';
import {logOut} from "../store/reducers/userActions";
import {useDispatch} from "react-redux";
import Button from "../components/UI/Button";
import {useNavigate} from "react-router-dom";
import {Container} from '../components/UI/Container';
import styled from "styled-components";
import avatar from '/assets/images/userAvatar.png'
import {useTypedSelector} from "../hooks/useTypedSelector";
// import {Background} from "./Authorization/Auth";
import support from '/assets/images/telegram.png'
import {Background} from "./Authorization/LogIn";

const Account = () => {

    const user = useTypedSelector(state => state.userReducer.user)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutHandler = () => {
        dispatch(logOut())
        navigate('/auth')
    }

    console.log(user.phone)

    return (
        <Container>
            <Background/>
            <Content>
                <UserInfo>
                    <Avatar src={avatar}/>
                    <UserName>{user.username}</UserName>
                    <Phone>+38{user.phone}</Phone>
                    <Email>{user.email}</Email>
                </UserInfo>
                <Button onClick={logOutHandler}>Вийти з аккаунту</Button>
                <Support>
                    <Subtitle>Маєте питання?</Subtitle>
                    <Heading>Служба піддтримки у Telegram <Link src={support}/></Heading>
                </Support>
            </Content>
        </Container>
    );
};


const Content = styled.div`
 position: relative;
  z-index: 10;

`
const UserInfo = styled.div`
  margin: 10px auto 10px;
  text-align: center;
  z-index: 10;

`
const Avatar = styled.img`
  width: 75px;
  height: 75px;
  margin-bottom: 30px;
`

const UserName = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
`

const Email = styled.div`
  margin-bottom: 25px;
  font-size: 20px;
`

const Phone = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 15px;
`

const Support = styled.div`
  margin-top: 65px;
`
const Subtitle = styled.div`
  color: var(--green);
  font-size: 20px;
  font-family: "Roboto-Medium", sans-serif;
  margin-bottom: 5px;

`
const Heading = styled.div`
  font-size: 22px;
`
const Link = styled.img`
  width: 35px;
  height: 35px;
  position: relative;
  top: 8px;
  left: 10px;
  cursor: pointer;
`


export default Account;