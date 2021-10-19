import {Platform} from 'react-native';
import {BMLocalized, setI18nConfig} from './Core/localization/BMLocalization';

setI18nConfig();

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
const regexForAge = /[0-9]/g;

const BebemamanConfig = {
  isSMSAuthEnabled: true,
  appIdentifier: 'bebemaman',
  onboardingConfig: {
    welcomeTitle: BMLocalized('Find your soul mate'),
    welcomeCaption: BMLocalized(
      'Match and chat with people you like from your area.',
    ),
    walkthroughScreens: [
      {
        icon: require('../assets/images/fire-icon.png'),
        title: 'Get a Date',
        description: BMLocalized(
          'Swipe right to get a match with people you like from your area.',
        ),
      },
      {
        icon: require('../assets/images/chat.png'),
        title: 'Private Messages',
        description: BMLocalized('Chat privately with people you match.'),
      },
      {
        icon: require('../assets/images/instagram.png'),
        title: 'Send Photos & Videos',
        description: BMLocalized(
          'Have fun with your matches by sending photos and videos to each other.',
        ),
      },
      {
        icon: require('../assets/images/notification.png'),
        title: 'Get Notified',
        description: BMLocalized(
          'Receive notifications when you get new messages and matches.',
        ),
      },
    ],
  },
  tosLink: 'https://hancandice.github.io',
  editProfileFields: {
    sections: [
      {
        title: BMLocalized('PUBLIC PROFILE'),
        fields: [
          {
            displayName: BMLocalized('First Name'),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'firstName',
            placeholder: 'Your first name',
          },
          {
            displayName: BMLocalized('Last Name'),
            type: 'text',
            editable: true,
            regex: regexForNames,
            key: 'lastName',
            placeholder: 'Your last name',
          },
          {
            displayName: BMLocalized('Age'),
            type: 'text',
            editable: true,
            regex: regexForAge,
            key: 'age',
            placeholder: 'Your age',
          },
          {
            displayName: BMLocalized('Bio'),
            type: 'text',
            editable: true,
            key: 'bio',
            placeholder: 'Your bio',
          },
          {
            displayName: BMLocalized('School'),
            type: 'text',
            editable: true,
            key: 'school',
            placeholder: 'Your bio',
          },
        ],
      },
      {
        title: BMLocalized('PRIVATE DETAILS'),
        fields: [
          {
            displayName: BMLocalized('E-mail Address'),
            type: 'text',
            editable: false,
            key: 'email',
            placeholder: 'Your email address',
          },
          {
            displayName: BMLocalized('Phone Number'),
            type: 'text',
            editable: true,
            regex: regexForPhoneNumber,
            key: 'phone',
            placeholder: 'Your phone number',
          },
        ],
      },
    ],
  },
  userSettingsFields: {
    sections: [
      {
        title: BMLocalized('DISCOVERY'),
        fields: [
          {
            displayName: BMLocalized('Show Me on Instadating'),
            type: 'switch',
            editable: true,
            key: 'show_me',
            value: true,
          },
          {
            displayName: BMLocalized('Distance Radius'),
            type: 'select',
            options: ['5', '10', '15', '25', '50', '100', 'unlimited'],
            displayOptions: [
              '5 miles',
              '10 miles',
              '15 miles',
              '25 miles',
              '50 miles',
              '100 miles',
              'Unlimited',
            ],
            editable: true,
            key: 'distance_radius',
            value: 'Unlimited',
          },
          {
            displayName: BMLocalized('Gender'),
            type: 'select',
            options: ['female', 'male', 'none'],
            displayOptions: ['Female', 'Male', 'None'],
            editable: true,
            key: 'gender',
            value: 'None',
          },
          {
            displayName: BMLocalized('Gender Preference'),
            type: 'select',
            options: ['female', 'male', 'all'],
            displayOptions: ['Female', 'Male', 'All'],
            editable: true,
            key: 'gender_preference',
            value: 'All',
          },
        ],
      },
      {
        title: BMLocalized('PUSH NOTIFICATIONS'),
        fields: [
          {
            displayName: BMLocalized('New matches'),
            type: 'switch',
            editable: true,
            key: 'push_new_matches_enabled',
            value: true,
          },
          {
            displayName: BMLocalized('Messages'),
            type: 'switch',
            editable: true,
            key: 'push_new_messages_enabled',
            value: true,
          },
          {
            displayName: BMLocalized('Super Likes'),
            type: 'switch',
            editable: true,
            key: 'push_super_likes_enabled',
            value: true,
          },
          {
            displayName: BMLocalized('Top Picks'),
            type: 'switch',
            editable: true,
            key: 'push_top_picks_enabled',
            value: true,
          },
        ],
      },
      {
        title: '',
        fields: [
          {
            displayName: BMLocalized('Save'),
            type: 'button',
            key: 'savebutton',
          },
        ],
      },
    ],
  },
  contactUsFields: {
    sections: [
      {
        title: BMLocalized('CONTACT'),
        fields: [
          {
            displayName: BMLocalized('Address'),
            type: 'text',
            editable: false,
            key: 'push_notifications_enabled',
            value: '142 Steiner Street, San Francisco, CA, 94115',
          },
          {
            displayName: BMLocalized('E-mail us'),
            value: 'florian@instamobile.io',
            type: 'text',
            editable: false,
            key: 'email',
            placeholder: 'Your email address',
          },
        ],
      },
      {
        title: '',
        fields: [
          {
            displayName: BMLocalized('Call Us'),
            type: 'button',
            key: 'savebutton',
          },
        ],
      },
    ],
  },
  dailySwipeLimit: 10,
  subscriptionSlideContents: [
    {
      title: BMLocalized('Go VIP'),
      description: BMLocalized(
        'When you subscribe, you get unlimited daily swipes, undo actions, VIP badge and more.',
      ),
      src: require('../assets/images/fencing.png'),
    },
    {
      title: BMLocalized('Undo Actions'),
      description: BMLocalized('Get undo swipe actions when you subscribe.'),
      src: require('../assets/images/vip_1.png'),
    },
    {
      title: BMLocalized('Vip Badge'),
      description: BMLocalized(
        'Stand out with vip badge amongst other swipes when you subscribe',
      ),
      src: require('../assets/images/vip_2.png'),
    },
    {
      title: BMLocalized('Enjoy Unlimited Access'),
      description: BMLocalized(
        'Get unlimited app access and more features to come.',
      ),
      src: require('../assets/images/vip-pass.png'),
    },
  ],
  contactUsPhoneNumber: '+16504859694',
  IAP_SHARED_SECRET: '699db7fcf10c4922bf148caf334c89c6',
  IAP_SKUS: Platform.select({
    ios: [
      'com.instaswipey.FreeTrial.InstaswipeyAutoRenewableSubscriptionByMonth',
      'com.instaswipey.FreeTrial.InstaswipeyAutoRenewableSubscriptionByYear',
    ],
    android: ['android.test.purchased', 'android.test.canceled'],
  }),
  facebookIdentifier: '285315185217069',
};

export default BebemamanConfig;
