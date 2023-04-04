import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import dataReducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig,dataReducer)
 
  export const store = configureStore({
    reducer: {
        persistedReducer
    }
})
  export const persistor = persistStore(store)
 