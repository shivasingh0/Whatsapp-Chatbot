import React from 'react'
import Table from 'react-bootstrap/Table';

const UnsubscribersTable = () => {
  return (
    <>
    <Table bordered hover>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default UnsubscribersTable