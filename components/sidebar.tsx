"use client";

import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { menuItems } from "@/mock-data/menu-items";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("All Orders");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`w-${
        isCollapsed ? "16" : "56"
      } bg-white border-r border-[#e8e8e8] flex flex-col h-full relative`}
    >
      {/* Collapse button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 text-[#6d7076] rounded-full hover:bg-[#f5f5f5] absolute top-2 right-2 z-10"
      >
        {isCollapsed ? (
          <ChevronRightCircle className="w-5 h-5" />
        ) : (
          <ChevronLeftCircle className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar Content */}
      <div className="h-14 border-b border-[#e8e8e8] flex items-center px-4"></div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <div key={item.name}>
              {item.header && index > 0 && (
                <div className="text-xs font-medium text-[#6d7076] px-3 pt-5 pb-2">
                  {!isCollapsed && item.header}
                </div>
              )}
              <Link
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                  activeItem === item.name
                    ? "bg-[#ffe8e8] text-[#df1f26]"
                    : "text-[#414651] hover:bg-[#f5f5f5]"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span>{item.name}</span>}
                {item.badge && (
                  <span className="ml-auto bg-[#f5f5f5] text-[#414651] text-xs px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
