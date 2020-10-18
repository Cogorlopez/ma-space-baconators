import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleWare = [thunk]

// Allows for app to still run if Redux DevTools is misssing from browser.
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  // composeEnhancers(applyMiddleware(...middleWare))
  composeWithDevTools((applyMiddleware(...middleWare)))
)

export default store
