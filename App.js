import {ThemeProvider} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Appearance, AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {AppNavigator} from './src/navigations/AppNavigation';
import configureStore from './src/redux/store/index';

const MainNavigator = AppNavigator;
const store = configureStore();

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  enableScreens();

  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
    });
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={colorScheme}>
        <MainNavigator screenProps={{theme: colorScheme}} />
      </ThemeProvider>
    </Provider>
  );
};

App.propTypes = {};
App.defaultProps = {};

AppRegistry.registerComponent('App', () => App);

export default App;
