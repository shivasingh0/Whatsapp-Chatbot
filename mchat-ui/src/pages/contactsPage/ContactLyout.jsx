import React from "react";
import ContactTable from "./table/ContactTable";

const ContactLyout = () => {
  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Contacts</h4>
      </div>
      <hr />
      <div className="table-box">
        <div className="col-md-5">
          <ContactTable />
        </div>
        <div className="col-md-1">
        <button className="btn btn-primary btn-sm">
             Replace all
          </button>
        <button className="btn btn-primary btn-sm mt-4">
            Import all
          </button>
        </div>
        <div className="col-md-5">
          <ContactTable />
        </div>
      </div>
    </>
  );
};

export default ContactLyout;
