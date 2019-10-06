import {combineReducers} from 'redux' ;
import userRecuder from './user/user.reducer' ;
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory-reducer'
import {persistReducer} from 'redux-persist';
import storage  from 'redux-persist/lib/storage'


const rootReducer =   combineReducers({
  user :userRecuder,
  cart :cartReducer,
  directory :directoryReducer,
  shop :shopReducer
})

const persistConfig ={
  key:'store',
  storage,
  whitelist:['cart']
}
export default persistReducer(persistConfig,rootReducer)