import React, {useState, useEffect} from 'react';
import {Container, Text} from 'native-base';
import {View, FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';

import RegisterRouter from '../../../routes/RegisterRouter';
import Account from '../../Components/Account';
import TransactionHistory from '../../Components/TransactionHistory';

// Styles
import color from './../../Supports/Styles/Color';
import spacing from './../../Supports/Styles/Spacing';
import font from './../../Supports/Styles/Font';

import AsyncStorage from '@react-native-async-storage/async-storage';
import urlAPI from '../../Supports/Constants/urlAPI';

const Home = ({navigation: {navigate}}) => {
  const [state, setState] = useState({transactionList: []});
  const [isLogin, setIsLogin] = useState(true);

  const logoutBtn = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLogin(false);
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        let token = await AsyncStorage.getItem('token').catch(err => {
          throw err;
        });

        if (!token) {
          return setIsLogin(false);
        }

        let account = await axios
          .get(`${urlAPI}/balance`, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `${token}`,
            },
          })
          .catch(err => {
            console.log(err);
            throw err;
          });

        let {accountNo, balance} = account.data;

        let transaction = await axios
          .get(`${urlAPI}/transactions`, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `${token}`,
            },
          })
          .catch(err => {
            console.log(err);
            throw err;
          });

        let {data} = transaction.data;

        setState(prevState => ({
          ...prevState,
          accountNo,
          balance,
          transactionList: data,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchAccount();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TransactionHistory
        date={item.transactionDate}
        amount={item.amount}
        recipientName={item.receipient.accountHolder}
        recipientAccount={item.receipient.accountNo}
      />
    );
  };

  if (!isLogin) {
    return <RegisterRouter />;
  }

  return (
    <View style={{...color.bgLight, flex: 1}}>
      <Text
        style={{
          alignSelf: 'flex-end',
          ...color.secondary,
          ...spacing.myFive,
          ...spacing.mxThree,
          ...font.fStyleBold,
          ...font.fsFive,
        }}
        onPress={logoutBtn}>
        Logout
      </Text>

      <Account balance={state.balance} accountNo={state.accountNo} />

      <Text
        style={{
          ...font.fsFive,
          marginHorizontal: 30,
          ...font.fStyleBold,
          marginTop: 50,
          marginBottom: 30,
        }}>
        Your Transaction History
      </Text>

      <FlatList
        style={{flexGrow: 0}}
        data={state.transactionList}
        renderItem={renderItem}
        keyExtractor={item => item.transactionId}
      />
    </View>
  );
};

export default Home;
