import React from 'react';
import { Link } from 'react-router-dom';
import search from '../../images/serach.svg';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
            {/* <!-- Sidebar content here --> */}
            <h1 className="font-bold font text-secondary text-xl mb-4">
              Company Name
            </h1>
            <div className="form-control">
              <div className="input-group">
                <button className="border ">
                 <img src={search} alt="" />
                </button>
                <input
                  type="text"
                  placeholder="Search…"
                  className="border rounded-full "
                />
              </div>
            </div>
            <li>
              <Link to="/dashboard">View Clients</Link>
            </li>
            <li>
              <Link to="/dashboard/addclients">Add Clients</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;