// ContactReducer.js
// initialState[user data]
const initialState = [
  {
    id: 0,
    email: "test@gmail.com",
    password: "test1234",
    name: "Jay Cump",
  },
  {
    id: 1,
    email: "test2@gmail.com",
    password: "test1245",
    name: "John Park",
  },
];

// Reducer[state, initialState, action]
const contactReducer = (state = initialState, action) => {
  // action[type]
  switch (action.type) {
    // Signup
    case "SIGNUP":
      state = [...state, action.payload];
      return state;
    // default => state data
    default:
      return state;
  }
};

// export
export default contactReducer;
