import React from 'react'

const WelcomeMessageLayout = () => {
  return (
    <>
    <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Welcome Message</h4>
        <div>
          <button className="btn btn-primary btn-sm mr-2">
            <i className="bi-binoculars-fill" /> Add Welcome Message
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default WelcomeMessageLayout