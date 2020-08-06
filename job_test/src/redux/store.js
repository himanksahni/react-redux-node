import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './mainReducer'
// import logger from 'redux-logger'


const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store