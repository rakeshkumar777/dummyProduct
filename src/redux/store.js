
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import {thunk} from "redux-thunk";

const middleware = [thunk];

const persistConfig = {
    key: 'jobr',
    transforms: [
      encryptTransform({
        secretKey: '4226452948404D635166546A576D5A7134743777217A25432A462D4A614E6452',
        onError: function (error) {
          // Handle the error.
        },
      }),
    ],
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
// export const store = createStore(persistedReducer);
export const persistor = persistStore(store);