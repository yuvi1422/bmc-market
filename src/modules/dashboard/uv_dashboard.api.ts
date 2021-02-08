import axios from 'axios';
import * as dashboardData from './uv_dashboard.json';

const getDashboardData = ()=> {
  return axios.get(dashboardData.config.apis.dashboard.url);
}

const getStocksData = ()=> {
  return axios.get(dashboardData.config.apis.stocks.url);
}

const UVDashboardApi = {
  getDashboardData: getDashboardData,
  getStocksData: getStocksData
};

export default UVDashboardApi;