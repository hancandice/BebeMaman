import {createSwitchNavigator} from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import {createStackNavigator} from 'react-navigation-stack';
import {connect} from 'react-redux';
import BebemamanConfig from '../BebemamanConfig';
import DynamicAppStyles from '../DynamicAppStyles';
import LoadScreen from '../Core/onboarding/LoadScreen/LoadScreen';
import WalkthroughScreen from '../Core/onboarding/WalkthroughScreen/WalkthroughScreen';
import WelcomeScreen from '../Core/onboarding/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../Core/onboarding/LoginScreen/LoginScreen';
import SignupScreen from '../Core/onboarding/SignupScreen/SignupScreen';
import SmsAuthenticationScreen from '../Core/onboarding/SmsAuthenticationScreen/SmsAuthenticationScreen';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const LoginStack = createStackNavigator(
  {
    Welcome: {screen: WelcomeScreen},
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    Sms: {screen: SmsAuthenticationScreen},
  },
  {
    // initialRouteName: 'Welcome',
    initialRouteName: 'Signup',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: BebemamanConfig,
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
      appStyles: DynamicAppStyles,
      appConfig: BebemamanConfig,
    },
  },
);

const AppContainer = createReduxContainer(RootNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});
const AppNavigator = connect(mapStateToProps)(AppContainer);

export {RootNavigator, AppNavigator, middleware};
