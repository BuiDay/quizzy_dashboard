import React from 'react';
import { navItems } from "@/constants/data";
import { cn } from "../../../utils/utils";
import DashboardNav from './dashboard-nav';

const Sidebar = () => {
    return (
        <nav
        className={cn(`relative hidden h-screen border-r border-zinc-800 pt-[60px] lg:block w-60 bg-pri`)}
      >
        <div className="space-y-4 py-4 text-white">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                Overview
              </h2>
              <DashboardNav items={navItems} />
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Sidebar;