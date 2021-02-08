import React from 'react';
import { useSelector } from 'react-redux';
import UVTable from '../../components/Table/uv_table.component';
import { UVRootState } from '../../root.reducer';

import * as dashboardData from './uv_dashboard.json';

export default function UVDashboard() {
  let tableHeaders = dashboardData.config.tableHeaders;
  let rows = useSelector((state: UVRootState) => {
    return state.dashboard.table;
  });
  let tableKeys = dashboardData.config.tableKeys;

  return (
    <div>
      <UVTable header={tableHeaders} rows={rows} keys={tableKeys}></UVTable>
    </div>
  );
}