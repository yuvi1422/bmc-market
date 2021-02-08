import React from 'react';
import { Table } from 'react-bootstrap';
import { UVTableProps } from '../../shared/Types';

function UVTable(props: UVTableProps) {

  return (
    <div>
      <Table striped bordered responsive>
        <thead>
          <tr>
            {
              props.header.map((obj, index) => (
                <th key={index}>{obj}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            props.rows.map((row, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                {
                  props.keys.map((keyName, index) => (
                    <td>{row[keyName]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default React.memo(UVTable);