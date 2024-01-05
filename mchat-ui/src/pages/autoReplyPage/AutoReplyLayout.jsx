import React from 'react'

const AutoReplyLayout = () => {
  return (
    <>
    <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Auto Reply</h4>
        <div>
          <button className="btn btn-danger btn-sm mr-2">
            <i className="bi-trash" /> Clear All
          </button>
          <button className="btn btn-primary btn-sm mr-2">
            <i className="bi-binoculars-fill" /> Add Auto Reply
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default AutoReplyLayout