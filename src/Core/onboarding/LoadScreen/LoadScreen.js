import React, {useEffect} from 'react';
import {View} from 'react-native';
import authDeviceStorage from '../utils/AuthDeviceStorage';
import PropTypes from 'prop-types';

const LoadScreen = props => {
  const {navigation} = props;
  const appStyles =
    navigation.state.params.appStyles || navigation.getParam('appStyles');
  const appConfig =
    navigation.state.params.appConfig || navigation.getParam('appConfig');

  useEffect(() => {
    setAppState();
  }, []);

  const setAppState = async () => {
    const shouldShowOnboadingFlow =
      await authDeviceStorage.getShouldShowOnboadingFlow();

    if (shouldShowOnboadingFlow) {
      navigation.navigate('Walkthrough', {
        appStyles,
        appConfig,
      });
    } else {
      navigation.navigate('LoginStack');
    }
  };

  return <View />;
};

LoadScreen.propTypes = {
  navigation: PropTypes.object,
};

LoadScreen.navigationOptions = {
  header: null,
};

export default LoadScreen;
