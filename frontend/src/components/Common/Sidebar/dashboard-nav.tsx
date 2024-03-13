import { Icons } from '@/components/icons';
import { NavItem } from '@/types';
import { cn } from '@/utils/utils';
import React from 'react';
import { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from 'react-router-dom';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const DashboardNav:React.FC<DashboardNavProps> = ({items, setOpen}) => {

  const path = useLocation();
  console.log(path)
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              to={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-[5px] px-3 py-2 text-sm font-medium hover:bg-[gray] hover:bg-opacity-30",
                  path.pathname === item.href ? "bg-[gray] bg-opacity-30" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
};

export default DashboardNav;