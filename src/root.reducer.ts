import { combineReducers } from 'redux';
import UVDashboardReducer from './modules/dashboard/uv_dashboard.reducer';


export const rootReducer =  combineReducers({
  dashboard: UVDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>