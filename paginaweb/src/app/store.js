import { configureStore } from '@reduxjs/toolkit'
import  loginReducer from '../utilidades/login/loginSlice'


export default configureStore({
    reducer: {
      login: loginReducer,
    },
  })

