const {StyleSheet} = require('react-native');

const Primary = '#e84545';
const Secondary = '#2b2e4a';
const Light = '#f8f8f8';
const Dark = '#505050';
const Success = '#00af91';

const color = StyleSheet.create({
  bgPrimary: {
    backgroundColor: Primary,
  },
  primary: {
    color: Primary,
  },
  bgSecondary: {
    backgroundColor: Secondary,
  },
  secondary: {
    color: Secondary,
  },
  bgLight: {
    backgroundColor: Light,
  },
  light: {
    color: Light,
  },
  bgDark: {
    backgroundColor: Dark,
  },
  dark: {
    color: Dark,
  },
  bgSuccess: {
    backgroundColor: Success,
  },
  success: {
    color: Success,
  },

  bRadiusOne: {
    borderRadius: 10,
  },
  bRadiusTwo: {
    borderRadius: 20,
  },
  bRadiusThree: {
    borderRadius: 30,
  },
  bRadiusFour: {
    borderRadius: 40,
  },
  bRadiusFive: {
    borderRadius: 50,
  },

  bTest: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default color;
