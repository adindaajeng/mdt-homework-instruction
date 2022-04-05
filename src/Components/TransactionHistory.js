import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

import color from '../Supports/Styles/Color';
import spacing from '../Supports/Styles/Spacing';
import font from '../Supports/Styles/Font';

const TransactionHistory = ({
  date,
  amount,
  recipientName,
  recipientAccount,
  id,
}) => {
  return (
    <View style={{...style.container}}>
      <View>
        <Text style={{...font.fStyleBold, ...spacing.mbTwo}}>
          {date.slice(0, 10)}
        </Text>
        <Text style={{...color.secondary, ...font.fStyleLight}}>
          {recipientName}
        </Text>
        <Text
          style={{...color.secondary, ...spacing.mtOne, ...font.fStyleBold}}>
          {recipientAccount}
        </Text>
      </View>
      <View>
        <Text>{amount}</Text>
      </View>
    </View>
  );
};

export default TransactionHistory;

const style = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
