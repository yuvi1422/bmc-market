import { call, put, takeEvery } from 'redux-saga/effects';

import UVDashboardApi from "./uv_dashboard.api";
import UV_DASHBOARD from './uv_dashboard.constants';
import { updateDashboard } from './uv_dashboard.actions';

function* initDashboardSaga() {
  let response = yield call(UVDashboardApi.getStocksData);
  let dashboardData = response.data.data;
  yield put(updateDashboard(dashboardData));
}

export function* UVDashboardSaga() {
  yield takeEvery(UV_DASHBOARD.INIT, initDashboardSaga);
}
