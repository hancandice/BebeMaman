import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {combineReducers} from 'redux';
import {auth} from '../Core/onboarding/redux/auth';
import {RootNavigator} from '../navigations/AppNavigation';

const navReducer = createNavigationReducer(RootNavigator);

const AppReducer = combineReducers({
  nav: navReducer,
  auth,
});

export default AppReducer;
