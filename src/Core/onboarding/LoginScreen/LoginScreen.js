import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {setUserData} from '../redux/auth';

const LoginScreen = props => {
  return <Text>LoginScreen</Text>;
};

export default connect(null, {setUserData})(LoginScreen);
