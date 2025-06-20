'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';

export default function SideNav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`side-nav bg-slate-800 text-white transition-all duration-300 ${expanded ? 'w-64' : 'w-20'}`}
      style={{ minHeight: 'calc(40vh - 156px)' }} // Adjust for navbar height
    >
      <div className="p-3 d-flex justify-content-end">
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '◀' : '▶'}
        </button>
      </div>

      <Nav className="flex-column px-4">
        <Nav.Link as={Link} href='/#dashboard' className="text-white py-2">{expanded ? "Dashboard" : "D"} </Nav.Link>
        <Nav.Link as={Link} href='/#projects' className="text-white py-2">{expanded ? "Projects" : "P"} </Nav.Link>
        <Nav.Link as={Link} href='/#settings' className="text-white py-2">{expanded ? "Settings" : "S"} </Nav.Link>
      </Nav>
    </div>
  );
}