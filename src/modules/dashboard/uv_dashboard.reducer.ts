import { UVAction } from "../../shared/Types"
import UV_DASHBOARD from "./uv_dashboard.constants"

const initialState = {
  table: []
}

const UVDashboardReducer = (state = initialState, action: UVAction) => {
  switch(action.type) {
    case UV_DASHBOARD.UPDATE:
      return {
        ...state,
        table: action.data
      }
    default:
      return state;
  }
}

export default UVDashboardReducer;