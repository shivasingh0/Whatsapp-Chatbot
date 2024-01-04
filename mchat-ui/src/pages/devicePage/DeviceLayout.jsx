import React from "react";
import { Link } from "react-router-dom";

const DeviceLayout = () => {
  return (
    <>
      <div className="widget-heading p-2 d-flex justify-content-between align-items-center">
        <h4>
          <span className="badge badge-primary mr-2">Total Devices - 0</span>
        </h4>
        <div>
          <button className="btn btn-primary btn-sm mr-2">
            <i className="bi-binoculars-fill" /> Create Device
          </button>
        </div>
      </div>
      <hr />
      <div class="device-card">
        <span class="title">WA_NO - Device 1</span>
        <hr />
        <p class="description">
          <i class="fa-solid fa-qrcode fa-2xl"></i>
          <span className="QR-text">QR</span>
          <p className="mt-2">QR Generated</p>
        </p>
        <div class="actions">
          <button class="accept">
            <i class="fa-regular fa-pen-to-square"></i> Edit
          </button>
          <button class="accept">
            <i class="fa-solid fa-arrow-rotate-right"></i> Show QR
          </button>
          <button class="accept">
            <i class="fa-regular fa-trash-can"></i> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeviceLayout;
