import React, {useEffect, useState} from 'react';
import {Image, Text, useColorScheme, View} from 'react-native';
import {connect} from 'react-redux';
import TNActivityIndicator from '../../truly-native/TNActivityIndicator';
import {setUserData} from '../redux/auth';
import dynamicStyles from './styles';

const WelcomeScreen = props => {
  console.log('WelcomeScreen Props:', props);

  const [isLoading, setIsLoading] = useState(true);
  const appStyles =
    props.navigation.state.params.appStyles ||
    props.navigation.getParam('appStyles');
  const appConfig =
    props.navigation.state.params.appConfig ||
    props.navigation.getParam('appConfig');
  const colorScheme = props.screenProps.theme || useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  useEffect(() => {
    tryToLoginFirst();
  }, []);

  const tryToLoginFirst = async () => {
    setIsLoading(true);
  };

  if (isLoading == true) {
    return <TNActivityIndicator appStyles={appStyles} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={appStyles.iconSet.logo} />
      </View>
      <Text style={styles.title}>
        {appConfig.onboardingConfig.welcomeTitle}
      </Text>
      <Text style={styles.caption}>
        {appConfig.onboardingConfig.welcomeCaption}
      </Text>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    user: auth.user,
  };
};

export default connect(mapStateToProps, {setUserData})(WelcomeScreen);
