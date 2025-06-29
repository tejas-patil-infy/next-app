'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Gauge,
  Settings,
  Workflow,
  Zap,
  Triangle,
  FileText,
  Bell,
  Folder,
  ChevronRight,
  MoveHorizontal,
} from 'lucide-react';
import { usePathname } from 'next/navigation';


const SidebarNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: Gauge,
      href: '/dashboard',
      active: true
    },
    {
      name: 'Central Data',
      icon: Settings,
      href: '#central-data',
      hasSubmenu: true,
      subMenu: [
        { name: "Workflow" },
        { name: "Scenario" },
        { name: "Reports" },
        { name: "Sample" },
        { name: "Builder" }
      ]
    },
    {
      name: 'Workflows',
      icon: Workflow,
      href: '#workflows'
    },
    {
      name: 'Accelerators',
      icon: Zap,
      href: '#accelerators'
    },
    {
      name: 'Scenario Manager',
      icon: Triangle,
      href: '/scenario'
    },
    {
      name: 'Reports',
      icon: FileText,
      href: '/reports'
    },
    {
      name: 'Event Status',
      icon: Bell,
      href: '#event-status'
    },
    {
      name: 'Report Builder',
      icon: Folder,
      href: '#report-builder'
    }
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`text-white ease-in-out ${isExpanded ? 'w-60' : 'w-12'} flex flex-col`}
      style={{
        backgroundColor: '#1d1d1d',
        // height: 'calc(100vh - 48px)' // Subtract navbar height
      }}
    >
      {/* Navigation Items */}
      <nav className="flex-1 pt-4">
        <ul style={{ paddingLeft: "0px" }}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);

            return (
              <li key={item.name} title={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${isActive
                    ? 'text-white'
                    : 'text-white hover:text-white'
                    }`}
                  style={{
                    backgroundColor: isActive ? '#374151' : 'transparent', textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#374151';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <Icon
                    size={20}
                    className={`${isExpanded ? 'mr-3' : 'mx-auto'} ${isActive ? 'text-white' : 'text-white group-hover:text-white'
                      }`}
                  />

                  {isExpanded && (
                    <>
                      <span className="font-medium text-sm flex-1">{item.name}</span>
                      {item.hasSubmenu && (
                        <ChevronRight size={16} className="text-white" />
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section with Expansion Toggle */}
      <div className="p-0 mt-auto w-5 outline m-3 ml-[14px]">
        <div className="flex items-center justify-center">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 transition-colors duration-200"
            style={{ cursor: "pointer" }}
          >
            {/* {isExpanded ? (
                <span>&gt; &lt;</span>
            ) : (
              <span>&lt; &gt;</span>
            )} */}
            <MoveHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;