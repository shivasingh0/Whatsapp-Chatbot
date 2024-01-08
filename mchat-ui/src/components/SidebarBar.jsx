import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarBar = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const login = () => {
    localStorage.removeItem("user");
    Navigate("/login");
  };

  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            {/* Dashboard start */}
            <li className={location.pathname === "/" ? "mm-active" : ""}>
              <Link to="/" aria-expanded="false">
                <i className="bi bi-grid text-color" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            {/* Dashboard end */}
            {/* Students Management start */}
            {/* <li className="nav-divider ng-scope mt-10 text-th" translate="">
              <u >Student Management</u>
              <hr />
            </li> */}
            {/* <li
              className={
                location.pathname === "/students" ? "mt-10 mm-active" : "mt-10"
              }
            >
              <Link to="/students" aria-expanded="false">
                <i className="bi-person-lines-fill text-color" />
                <span className="nav-text">Total Students</span>
              </Link>
            </li> */}
            <li
              className={location.pathname === "/devices" ? "mm-active" : ""}
            >
              <Link to="/devices" aria-expanded="false">
                <i class="bi bi-patch-question-fill text-color"></i>
                <span className="nav-text"> Devices</span>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/sendmessage"
                  ? "mm-active"
                  : ""
              }
            >
              <Link to="/sendmessage" aria-expanded="false">
                <i className="bi-binoculars-fill text-color" />
                <span className="nav-text">Send Message</span>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/welcomemessage" ? "mm-active" : ""
              }
            >
              <Link to="/welcomemessage" aria-expanded="false">
                <i class="bi-calendar2-event text-color"></i>
                <span className="nav-text">Welcome Message</span>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/autoreply" ? "mm-active" : ""
              }
            >
              <Link to="/autoreply" aria-expanded="false">
                <i class="bi-calendar2-event text-color"></i>
                <span className="nav-text">Auto Reply</span>
              </Link>
            </li>
            {/* Students Management end */}
            {/* Employees Management start */}
            {/* <li className="nav-divider ng-scope mt-10 text-th" translate="">
              <u>Employees Management</u>
              <hr />
            </li> */}
            <li
              className={
                location.pathname === "/templates" ? " mm-active" : ""
              }
            >
              <Link to="/templates" aria-expanded="false">
                <i class="bi bi-briefcase-fill text-color"></i>
                <span className="nav-text"> Templates</span>
              </Link>
            </li>
            {/* <li className={location.pathname === "/teams" ? "mm-active" : ""}>
              <Link to="/teams" aria-expanded="false">
                <i class="bi bi-people-fill text-color"></i>
                <span className="nav-text">Teams</span>
              </Link>
            </li> */}
            <li
              className={
                location.pathname === "/contact" ? "mm-active" : ""
              }
            >
              <Link to="/contact" aria-expanded="false">
                <i class="bi bi-diagram-3-fill text-color"></i>
                <span className="nav-text">Contacts</span>
              </Link>
            </li>
            {/* <li className="nav-divider ng-scope text-th" translate="">
              <u>Course</u>
              <hr />
            </li> */}
            <li
              className={
                location.pathname === "/unsubscribers"
                ? "mm-active" : ""
              }
            >
              <Link to="/unsubscribers" aria-expanded="false">
                <i class="bi-journals text-color"></i>
                <span className="nav-text">Unsubscribers</span>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/numberfilter" ? "mm-active" : ""
              }
            >
              <Link to="/numberfilter" aria-expanded="false">
                <i class="bi-input-cursor-text text-color"></i>
                <span className="nav-text">Number Filter</span>
              </Link>
            </li>
            {/* <li className="nav-divider ng-scope text-th" translate="">
              <u>More</u>
              <hr />
            </li> */}
            <li
              className={
                location.pathname === "/support" ? "mm-active" : ""
              }
            >
              <Link to="/support" aria-expanded="false">
                <i className="bi-info-square text-color" />
                <span className="nav-text">Group Grabber</span>
              </Link>
            </li>
            <li className={location.pathname === "/report" ? "mm-active" : ""}>
              <Link to="/report" aria-expanded="false">
                <i className="bi bi-gear-wide-connected text-color" />
                <span className="nav-text">Report</span>
              </Link>
            </li>
            <li className={location.pathname === "/receivedmessage" ? "mm-active" : ""}>
              <Link to="/receivedmessage" aria-expanded="false">
                <i className="bi bi-gear-wide-connected text-color" />
                <span className="nav-text">Received Message</span>
              </Link>
            </li>
            <li className={location.pathname === "/setting" ? "mm-active" : ""}>
              <Link to="/setting" aria-expanded="false">
                <i className="bi bi-gear-wide-connected text-color" />
                <span className="nav-text">Setting</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarBar;
