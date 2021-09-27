import {createSwitchNavigator} from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import LoadScreen from '../Core/onboarding/LoadScreen/LoadScreen';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const RootNavigator = createSwitchNavigator(
  {
    LoadScreen: {screen: LoadScreen},
    // Walkthrough: {screen: WalkthroughScreen},
    // LoginStack: {screen: LoginStack},
    // MainStack: {screen: MainStackNavigator},
  },
  {
    initialRouteName: 'LoadScreen',
    initialRouteParams: {
      appStyles: 'DynamicAppStyles',
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
