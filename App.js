import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {AppNavigator} from './src/navigations/AppNavigation';
import configureStore from './src/redux/store/index';

const MainNavigator = AppNavigator;
const store = configureStore();
const hello = 'hello';
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator screenProps={{hello}} />
    </Provider>
  );
};

App.propTypes = {};
App.defaultProps = {};

AppRegistry.registerComponent('App', () => App);

export default App;
