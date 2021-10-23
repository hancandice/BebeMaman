import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import dynamicStyles from './styles';
const TNProfilePictureSelector = props => {
  console.log(props);

  const {appStyles} = props;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  return (
    <>
      <View style={styles.imageBlock}>
        <Text>ji</Text>
        <Text>ji</Text>
        <Text>ji</Text>
        <Text>ji</Text>
      </View>
      <View style={styles.imageBlock}>
        <Text>ji</Text>
        <Text>ji</Text>
        <Text>ji</Text>
        <Text>ji</Text>
      </View>
    </>
  );
};

export default TNProfilePictureSelector;
