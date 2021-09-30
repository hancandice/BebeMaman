import I18n from 'i18n-js';
import {memoize} from 'lodash';
import * as Localization from 'react-native-localize';
import {I18nManager} from 'react-native';

export const translationGetters = {
  kr: () => require('../../Translation/kr.json'),
  en: () => require('../../Translation/en.json'),
  fr: () => require('../../Translation/fr.json'),
};

export const BMLocalized = memoize(
  (key, config) =>
    I18n.t(key, config).includes('missing') ? key : I18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if there is no available language fits
  const fallback = {languageTag: 'kr', isRTL: false};

  const {languageTag, isRTL} =
    Localization.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  BMLocalized.cache.clear();

  I18nManager.forceRTL(isRTL);

  I18n.translations = {
    [languageTag]: translationGetters[languageTag](),
  };

  console.log(I18n.translations);

  I18n.locale = languageTag;
};
