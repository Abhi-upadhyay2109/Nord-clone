// import { combineReducers, legacy_createStore } from "redux";
// import { dataReducer } from "./Data/Reducer";

// const enhancer = combineReducers({
//     Data:dataReducer
// })



// export const store = legacy_createStore(enhancer)




import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { thunk }  from "redux-thunk"; 
import { dataReducer } from "./Data/Reducer";

const enhancer = combineReducers({
    Data: dataReducer
});

// Apply middleware (Thunk) to handle async actions
export const store = legacy_createStore(enhancer, applyMiddleware(thunk));
