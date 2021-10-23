const UPDATE_USER = 'UPDATE_USER';
const LOG_OUT = 'LOG_OUT';

export const DUMMY_USER_DATA = {
  name: 'Jeeyoung Han',
  gender: 'Female',
};

export const setUserData = data => ({
  type: UPDATE_USER,
  data,
});

const initialState = {
  user: DUMMY_USER_DATA,
  users: [],
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.data.user,
      };

    default:
      return state;
  }
};
