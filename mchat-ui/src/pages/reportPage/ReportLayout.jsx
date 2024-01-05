import React from 'react'

const ReportLayout = () => {
  return (
    <>
    <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Reports</h4>
        <div>
          <button className="btn btn-danger btn-sm mr-2">
            <i className="bi-trash" /> Clear All
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default ReportLayout