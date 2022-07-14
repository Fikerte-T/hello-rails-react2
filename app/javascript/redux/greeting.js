const GET_DATA_FROM_API = 'hello-rails-react/greeting/GET_DATA_FROM_API';
const initialState = [];

export const getDataFromApi = () => (async (dispatch) => {
  const response = await fetch('v1/greetings.json');
  const responseData = await response.json();
  const greetingMsg = responseData.data.greeting.message

  dispatch({
    type: GET_DATA_FROM_API,
    payload: greetingMsg,
  });

});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;