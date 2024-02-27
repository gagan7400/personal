import React from 'react'
import Navbar from './Navbar';
import Sidenavbar from './Sidenavbar';
import New from './New';

import { Outlet } from 'react-router-dom';

export default function Dashbaord() {
  return (
    <div>
      <Navbar />
      <Sidenavbar />
      <div>
        <Outlet />
      </div>
      <New />
    </div>
  )
}