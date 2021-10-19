import React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Image, StatusBar, Text, useColorScheme, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {BMLocalized} from '../../localization/BMLocalization';
import authDeviceStorage from '../utils/AuthDeviceStorage';
import dynamicStyles from './styles';

const WalkthroughScreen = props => {
  const {navigation} = props;
  const appConfig =
    navigation.state.params.appConfig || navigation.getParam('appConfig');
  const appStyles =
    navigation.state.params.appStyles || navigation.getParam('appStyles');
  const colorScheme = props.screenProps.theme || useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: index,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
      };
    },
  );

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const _renderItem = ({item}) => (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  const _onDone = () => {
    authDeviceStorage.setShouldShowOnboadingFlow('false');
    navigation.navigate('Welcome');
  };

  const _renderNextButton = () => {
    return <Text style={styles.button}>{BMLocalized('Next')}</Text>;
  };

  const _renderSkipButton = () => {
    return <Text style={styles.button}>{BMLocalized('Skip')}</Text>;
  };

  const _renderDoneButton = () => {
    return <Text style={styles.button}>{BMLocalized('Done')}</Text>;
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      onDone={_onDone}
      showSkipButton={true}
      onSkip={_onDone}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      renderDoneButton={_renderDoneButton}
    />
  );
};

WalkthroughScreen.propTypes = {
  navigation: PropTypes.object,
};

WalkthroughScreen.navigationOptions = {
  header: null,
};

export default WalkthroughScreen;
