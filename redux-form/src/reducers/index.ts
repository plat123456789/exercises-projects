import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import messages from "./messages_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  messages
});

export default rootReducer;
