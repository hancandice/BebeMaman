import {createSwitchNavigator} from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import {createStackNavigator} from 'react-navigation-stack';
import {connect} from 'react-redux';
import LoadScreen from '../Core/onboarding/LoadScreen/LoadScreen';
import WalkthroughScreen from '../Core/onboarding/WalkthroughScreen/WalkthroughScreen';
import WelcomeScreen from '../Core/onboarding/WelcomeScreen/WelcomeScreen';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const LoginStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: 'Welcome',
    initialRouteParams: {
      appStyles: 'DynamicAppStyle',
      appConfig: 'BebemamanConfig',
    },
    headerMode: 'none',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    LoadScreen: {screen: LoadScreen},
    Walkthrough: {screen: WalkthroughScreen},
    LoginStack: {screen: LoginStack},
    // MainStack: {screen: MainStackNavigator},
  },
  {
    initialRouteName: 'LoadScreen',
    initialRouteParams: {
      appStyles: 'DynamicAppStyle',
      appConfig: 'BebemamanConfig',
    },
  },
);

const AppContainer = createReduxContainer(RootNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});
const AppNavigator = connect(mapStateToProps)(AppContainer);

export {RootNavigator, AppNavigator, middleware};
