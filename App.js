import React from 'react';
import {AppRegistry, Text} from 'react-native';

const App = props => {
  return <Text>React Native App</Text>;
};

App.propTypes = {};
App.defaultProps = {};

AppRegistry.registerComponent('App', () => App);

export default App;
