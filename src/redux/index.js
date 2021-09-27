import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {combineReducers} from 'redux';
import {RootNavigator} from '../navigations/AppNavigation';

const navReducer = createNavigationReducer(RootNavigator);

const AppReducer = combineReducers({
  nav: navReducer,
});

export default AppReducer;
