import { SagaMiddleware } from "redux-saga";
import { UVDashboardSaga } from "./modules/dashboard/uv_dashboard.saga";


const sagas = [UVDashboardSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}