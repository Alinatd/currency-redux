import {AMOUNT, FIRSTVAL,SECONDVAL,REVERSE,GETVAL, } from "../actions";

const initialState ={
    amountVal : 0,
    firstVal: 0,
    secondVal:0,
    result:0

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case AMOUNT:
        return { ...state, amountVal: action.payload };
      case FIRSTVAL:
        return { ...state,firstVal: action.payload };
      case SECONDVAL:
        return { ...state, secondVal: action.payload };
        case REVERSE:
      return {
        ...state,
        firstVal: state.secondVal,
        secondVal: state.firstVal,
        amountVal: state.amountVal / state.firstVal > state.amountVal * state.secondVal
      };
    case GETVAL:
      return {
        ...state,
        result:
          state.firstVal !== 0 && state.secondVal !== 0 ?
            state.firstVal > state.secondVal ?
              state.amountVal / state.firstVal :
              state.amountVal * state.secondVal :
            0
      };
      default:
        return state;
    }
  };
  
