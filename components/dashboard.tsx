"use client";

import { Bell, ChevronDown, ChevronLeft, Download, Search } from "lucide-react";
import { useState } from "react";

import FilterDropdowns from "@/components/filter-dropdowns";
import OrdersTable from "@/components/orders-table";
import Sidebar from "@/components/sidebar";
import { DashboardProps } from "@/types/types";

export default function Dashboard({
  dealership,
  setDealership,
  serviceType,
  setServiceType,
  mode,
  setMode,
  status,
  setStatus,
}: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-[#e8e8e8] flex items-center justify-end px-4 bg-white">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-[#6d7076]" />
              <span className="absolute -top-2 -right-2 bg-[#4976f4] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                12
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">AK Motors</span>
              <ChevronDown className="w-4 h-4 text-[#6d7076]" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <div className="flex items-center mb-6">
            <ChevronLeft className="w-5 h-5 text-[#6d7076] mr-2" />
            <h1 className="text-xl font-semibold">All Order</h1>
          </div>

          <div className="bg-white rounded-md shadow-sm border border-[#e8e8e8]">
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#414651]">
                  Filter by :
                </span>
                <FilterDropdowns
                  dealership={dealership}
                  setDealership={setDealership}
                  serviceType={serviceType}
                  setServiceType={setServiceType}
                  mode={mode}
                  setMode={setMode}
                  status={status}
                  setStatus={setStatus}
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 border border-[#e8e8e8] rounded-md">
                  <Download className="w-5 h-5 text-[#414651]" />
                </button>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#6d7076] absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-[#e8e8e8] rounded-md w-64 text-sm focus:outline-none focus:ring-1 focus:ring-[#4976f4]"
                  />
                </div>
              </div>
            </div>
            <OrdersTable
              dealership={dealership}
              serviceType={serviceType}
              mode={mode}
              status={status}
              searchQuery={searchQuery}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
