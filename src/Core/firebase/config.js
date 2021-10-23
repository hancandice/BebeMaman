import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCztL9kx58Tc4WncronRJRuEzd3EIYR2U0',
  authDomain: 'bebemaman-inc.firebaseapp.com',
  projectId: 'bebemaman-inc',
  storageBucket: 'bebemaman-inc.appspot.com',
  messagingSenderId: '743656679439',
  appId: '1:743656679439:web:39debe1aded6b4fc801b7a',
  measurementId: 'G-84L2PF09WB',
};

import * as firebase from 'firebase';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebase};
