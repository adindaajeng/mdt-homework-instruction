import React from 'react';
import {
  Button,
  Col,
  Container,
  Content,
  Grid,
  Input,
  Item,
  Label,
  Row,
  Text,
} from 'native-base';
import axios from 'axios';

// Utilities
import color from './../../Supports/Styles/Color';
import spacing from './../../Supports/Styles/Spacing';
import font from './../../Supports/Styles/Font';
import {useState} from 'react/cjs/react.development';

import MainRouter from './../../../routes/MainRouter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const onFillData = (val, dataType) => {
    if (dataType === 'username') return setData({...data, username: val}); // {password: 'existValue', email: 'newVal'}
    if (dataType === 'password') return setData({...data, password: val}); // {email: 'existValue', password: 'newVal'}
  };

  const onSetAsyncStorage = token => {
    AsyncStorage.setItem('token', token)
      .then(responseAsyncStorage => {
        setIsLogin(true);
      })
      .catch(errorAsyncStorage => {
        console.log(errorAsyncStorage);
      });
  };

  const onSubmitData = () => {
    if (data.username === '' || data.password === '') {
      return setMessage('Form Have to be Filled!');
    }

    axios
      .post('https://green-thumb-64168.uc.r.appspot.com/login', {
        username: data.username,
        password: data.password,
      })
      .then(res => {
        onSetAsyncStorage(res.data.token);
      })
      .catch(err => {
        setMessage(err);
      });
  };

  if (isLogin === true) {
    return <MainRouter />;
  }

  return (
    <Container>
      <Content>
        <Grid
          style={{
            justifyContent: 'flex-end',
            ...spacing.pxFive,
            ...spacing.pyFive,
          }}>
          <Row>
            <Text style={{...font.fsFive, ...font.fStyleBold}}>Sign In</Text>
          </Row>
          <Row style={{...spacing.mtFive}}>
            <Text style={{...font.fsEight, ...font.fStyleBold}}>Welcome!</Text>
          </Row>
          <Row>
            <Text>Enter your account to continue booking!</Text>
          </Row>
          <Row style={{...spacing.mtEight}}>
            <Item floatingLabel style={{width: '100%'}}>
              <Label>Username</Label>
              <Input
                onChangeText={val => onFillData(val, 'username')}
                style={{width: '100%'}}
              />
            </Item>
          </Row>
          <Row style={{...spacing.mtFive}}>
            <Item floatingLabel style={{width: '100%'}}>
              <Label>Password</Label>
              <Input
                onChangeText={val => onFillData(val, 'password')}
                style={{width: '100%'}}
              />
            </Item>
          </Row>
          <Row style={{justifyContent: 'flex-end', ...spacing.mtThree}}>
            <Text style={{color: 'blue', ...font.fStyleBold}}>
              Forgot Password
            </Text>
          </Row>
          <Row>
            <Text style={{color: 'red'}}>{message ? message : null}</Text>
          </Row>
          <Row>
            <Button
              onPress={() => onSubmitData()}
              rounded
              block
              danger
              style={{width: '100%', ...spacing.mtFive}}>
              <Text>SIGN IN</Text>
            </Button>
          </Row>
          <Row style={{justifyContent: 'center', ...spacing.mtEight}}>
            <Text onPress={() => navigation.navigate('Register')}>
              Don't have account? Sign Up
            </Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Login;
