import { useState } from "react";
import "./Sidebar.css";

import { IoLogoApple } from "react-icons/io";
import {
  FaKey,
  FaCube,
  FaUser,
  FaWallet,
  FaPercent,
  FaQuestion,
} from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`sidebar ${open ? "" : "collapsed"}`}>
      <div className="brand" onClick={() => setOpen((p) => !p)}>
        <IoLogoApple size={22} className="menu-icon" />
        {open && (
          <div>
            <span className="title">Dashboard</span>
          </div>
        )}
      </div>

      <nav className="nav">
        <Link to={"/dashboard"}>
          <NavItem icon={FaKey} label="Dashboard" active open={open} />
        </Link>
        <Link to={"/product"}>
          <NavItem icon={FaCube} label="Product" open={open} />
        </Link>
        <Link to={"/customer"} className=''>
          <NavItem icon={FaUser} label="Customers" open={open} />
        </Link>
        <NavItem icon={FaWallet} label="Income" open={open} />
        <NavItem icon={FaPercent} label="Promote" open={open} />
        <NavItem icon={FaQuestion} label="Help" open={open} />
      </nav>

      <div className="pro-card">
        {open && (
          <>
            <p>
              Upgrade to <strong>PRO</strong> <br /> to get access&nbsp;all
              features!
            </p>
            <button>Get Pro Now!</button>
          </>
        )}
      </div>

      <div className={`user ${open ? "" : "center"}`}>
        <img
          src="https://i.pravatar.cc/40?u=evano"
          alt="Evano"
          className="avatar"
        />
        {open && (
          <div className="user-info">
            <span className="name">Evano</span>
            <span className="role">Project Manager</span>
          </div>
        )}
      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, label, active = false, open }) {
  return (
    <div
      href="#!"
      className={`nav-item ${active ? "active" : ""} ${open ? "" : "center"}`}
    >
      <Icon className="nav-icon" />
      {open && <span className="nav-text">{label}</span>}
    </div>
  );
}
