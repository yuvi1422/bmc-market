import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './modules/dashboard/uv_dashboard.component';
import { Container, Row } from 'react-bootstrap';
import UVHeader from './components/uv_header/uv_header';
import * as headerData from './components/uv_header/uv_header.json';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="uv-row">
          <UVHeader data={headerData.config}></UVHeader>
        </Row>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
