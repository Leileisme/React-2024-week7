import { createSlice } from "@reduxjs/toolkit"
import { setIsLogin  } from "./stateReducer"
import axios from "axios"

const api = import.meta.env.VITE_BASE_URL
const path = import.meta.env.VITE_API_PATH

export const apiSlice = createSlice({
  name:'api',
  initialState:{

  },
  reducers: {
    
  }
})

export const checkLogin = async (dispatch) => {
  // ???0303 dispatch
  dispatch(setIsLogin(true))
  try {
    await axios.post(`${api}/v2/api/user/check`)
    getProducts()
    setIsLogin(true)
  } catch (error) {
    console.log(error);
    navigate('/login')
  }
}


export default apiSlice.reducer