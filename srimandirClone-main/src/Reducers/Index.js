import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice"
import profileReducer from "../Slices/ProfileSlice"
import poojaReducer from "../Slices/PoojaSlice"
import coupneReducer from "../Slices/CoupneSlice"
import PaymentReducer from "../Slices/PaymentSlice";


export const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    pooja:poojaReducer,
    coupne:coupneReducer,
    payment:PaymentReducer
})