import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {setUserData} from '../redux/auth';

const SmsAuthenticationScreen = props => {
  return <Text>SmsAuthenticationScreen</Text>;
};

export default connect(null, {setUserData})(SmsAuthenticationScreen);
