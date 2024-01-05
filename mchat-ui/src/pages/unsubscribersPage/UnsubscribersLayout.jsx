import React from "react";
import UnsubscribersTable from "./table/UnsubscribersTable";

const UnsubscribersLayout = () => {
  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>Unsubscribers</h4>
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
      <div className="table-box">
        <UnsubscribersTable />
      </div>
    </>
  );
};

export default UnsubscribersLayout;
