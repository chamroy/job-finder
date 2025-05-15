import React from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats, MdAdminPanelSettings } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    text: 'add job',
    path: '.', // Ensure this path is correct and matches your route
    icon: <FaWpforms />
  },
  {
    text: 'all jobs',
    path: 'all-jobs', // Ensure this path is correct and matches your route
    icon: <MdQueryStats />
  },
  {
    text: 'stats',
    path: 'stats', // Ensure this path is correct and matches your route
    icon: <IoBarChartSharp />
  },
  {
    text: 'Profile',
    path: 'profile', // Ensure this path is correct and matches your route
    icon: <ImProfile />
  },
  {
    text: 'admin',
    path: 'admin', // Ensure this path is correct and matches your route
    icon: <MdAdminPanelSettings />
  }
];

export default links;