import AsyncStorage from '@react-native-async-storage/async-storage';

const SHOULD_SHOW_ONBOADING_FLOW = 'SHOULD_SHOW_ONBOADING_FLOW';

const getShouldShowOnboadingFlow = async () => {
  try {
    const result = await AsyncStorage.getItem(SHOULD_SHOW_ONBOADING_FLOW);

    return result !== null ? false : true;
  } catch (err) {
    console.log(err);
  }
};

const setShouldShowOnboadingFlow = async value => {
  try {
    await AsyncStorage.setItem(SHOULD_SHOW_ONBOADING_FLOW, value);
  } catch (err) {
    console.log(err);
  }
};

const authDeviceStorage = {
  getShouldShowOnboadingFlow,
  setShouldShowOnboadingFlow,
};

export default authDeviceStorage;
