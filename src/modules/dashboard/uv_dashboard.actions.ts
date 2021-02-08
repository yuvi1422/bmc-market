import { UVDashboardType } from "../../shared/Types";
import UV_DASHBOARD from "./uv_dashboard.constants"

export const initDashboard = () => {
  return {
    type: UV_DASHBOARD.INIT
  }
};

export const updateDashboard = (uvDashboardData: UVDashboardType) => {
  return {
    type: UV_DASHBOARD.UPDATE,
    data: uvDashboardData
  }
}