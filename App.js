import {ThemeProvider} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Appearance, AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {setI18nConfig} from './src/Core/localization/BMLocalization';
import {AppNavigator} from './src/navigations/AppNavigation';
import configureStore from './src/redux/store/index';
import * as BMLocalize from 'react-native-localize';

const MainNavigator = AppNavigator;
const store = configureStore();

const App = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  enableScreens();

  useEffect(() => {
    setI18nConfig();
    BMLocalize.addEventListener('change', handleLocalizationChange);
    Appearance.addChangeListener(({colorScheme}) => {
      setColorScheme(colorScheme);
    });
    return () => {
      BMLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  const handleLocalizationChange = () => {
    setI18nConfig();
  };

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
