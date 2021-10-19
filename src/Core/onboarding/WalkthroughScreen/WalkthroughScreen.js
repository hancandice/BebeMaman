import React from 'react';
import {Text} from 'react-native';

const WalkthroughScreen = props => {
  const {navigation} = props;

  const appConfig =
    navigation.state.params.appConfig || navigation.getParam('appConfig');
  const appStyles =
    navigation.state.params.appStyles || navigation.getParam('appStyles');

  return <Text>WalkthroughScreen</Text>;
};

export default WalkthroughScreen;
