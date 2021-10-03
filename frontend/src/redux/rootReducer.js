import { combineReducers } from 'redux'

import buildReducer from './reducers/buildSlice'
import personalInfoReducer from './reducers/personalInfoSlice'

const rootReducer = combineReducers({
    build: buildReducer,
    personalInfo: personalInfoReducer
})

export default rootReducer