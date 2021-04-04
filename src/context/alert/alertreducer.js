import {SHOW_ALERT,HIDE_ALERT} from "../types"

export const alertReducer = (state, {type, payload}) => {
  switch (type) {
    case SHOW_ALERT : 
      return ({...payload, visible: true})
    case HIDE_ALERT :
      return ({...state, visible: false})

    default : return state
  }
}