import React, { useState, useEffect, useRef } from 'react';

import { useAuth } from '../Authenticate'; // Import the useAuth function

const routes = [
  {
    href: "/",
    name: "Home",
  },
  {
    name: "Noora",
    href: "/noora",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Ask Noora",
    href: "/ask-noora",
  },
  {
    href: "/#",
    name: "Sign Out",
  },
];

export default routes;
