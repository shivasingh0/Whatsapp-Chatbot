import React from "react";
import InnerLayout from "../../components/InnerLayout";

const SendMessageLayout = () => {
  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Send Message</h4>
        <div>
          <button className="btn btn-primary btn-sm mr-2">
            <i className="bi-binoculars-fill" /> Manual Import
          </button>
          <button className="btn btn-primary btn-sm mr-2">
            <i className="bi-binoculars-fill" /> Import
          </button>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <form className="row">
          <div className="col-md-4 mb-2">
            <label className="mb-1  mt-2">
              <strong>Instance*</strong>
            </label>
            <input
              type="text"
              className="form-control mt-10"
              placeholder="select instance"
            />
          </div>
          <div className="col-md-4 mb-2 mt-2">
            <label className="mb-2 mt-2">
              <strong>Template*</strong>
            </label>
            <select className="default-select  form-control wide">
              <option disabled="">- Select Template -</option>
              <option>Template 1</option>
              <option>Template 2</option>
            </select>
          </div>
          <div className="col-md-4 mb-2 mt-2">
            <label className="mb-2 mt-2">
              <strong>Message Type*</strong>
            </label>
            <select className="default-select  form-control wide">
              <option disabled="">- Select Message Type -</option>
              <option>Text</option>
              <option>Text With Media</option>
              <option>Button</option>
              <option>Button With Media</option>
              <option>List/Menu</option>
              <option>List/Menu With Media</option>
              <option>Poll</option>
              <option>Poll With Media</option>
            </select>
          </div>
        </form>
      </div>
      <hr />
      <div>
        <h4>Phone Number*</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Variable 1</th>
              <th>Variable 2</th>
              <th>Variable 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Variable 1</td>
              <td>Variable 2</td>
              <td>Variable 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SendMessageLayout;
