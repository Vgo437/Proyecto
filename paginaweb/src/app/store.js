import { configureStore } from '@reduxjs/toolkit';
import  loginReducer from '../utilidades/login/loginSlice';
import contador1Reducer from '../utilidades/contador1Slice';
import contador2Reducer from '../utilidades/contador2Slice';

export default configureStore({
    reducer: {
      login: loginReducer,
      contador1: contador1Reducer,
      contador2: contador2Reducer,
    },
  })
