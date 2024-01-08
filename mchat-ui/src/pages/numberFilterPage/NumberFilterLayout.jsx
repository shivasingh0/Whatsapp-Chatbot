import React from "react";
import Alert from "react-bootstrap/Alert";
import ContactTable from "../contactsPage/table/ContactTable";

const NumberFilterLayout = () => {

  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Number Filter</h4>
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
      <div>
        <Alert danger>
          Don't use more than 1000 phone number, This feature under development
          !!!
        </Alert>
        <button className="btn btn-primary btn-sm mr-2 mb-3">
          <i className="bi-binoculars-fill" /> Add contact Row
        </button>
        <ContactTable/>
        <button className="btn btn-primary btn-sm mr-2 mb-3">
          <i className="bi-binoculars-fill" /> Filter
        </button>
      </div>
    </>
  );
};

export default NumberFilterLayout;
