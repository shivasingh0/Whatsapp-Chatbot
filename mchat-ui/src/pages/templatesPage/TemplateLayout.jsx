import React from 'react'

const TemplateLayout = () => {
  return (
    <>
    <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Templates</h4>
        <div>
          <button className="btn btn-primary btn-sm mr-2">
            <i className="bi-binoculars-fill" /> Add Template
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default TemplateLayout