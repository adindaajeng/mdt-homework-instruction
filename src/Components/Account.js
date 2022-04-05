import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

import color from '../Supports/Styles/Color';
import spacing from '../Supports/Styles/Spacing';
import font from '../Supports/Styles/Font';

const Account = ({balance, accountNo}) => {
  return (
    <View style={{...style.container, ...color.bgPrimary}}>
      <Text style={{...font.fsFive, ...color.light}}>You have</Text>
      <Text
        style={{
          ...font.fsEight,
          ...color.light,
          ...spacing.mbFour,
          ...font.fStyleBold,
        }}>
        SGD {balance}
      </Text>
      <Text style={{...color.light, ...font.fStyleLight}}>Account No </Text>
      <Text style={{...color.light, ...spacing.mtOne, ...font.fStyleBold}}>
        {accountNo}
      </Text>
    </View>
  );
};

export default Account;

const style = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    padding: 17,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.6,
    shadowRadius: 9.11,

    elevation: 18,
  },
});
