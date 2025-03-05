"use client";

import { useState } from "react";
import FilterDropdowns from "./filter-dropdowns";
import OrdersTable from "./orders-table";

export default function OrdersPage() {
  const [dealership, setDealership] = useState("All");
  const [serviceType, setServiceType] = useState("All");
  const [mode, setMode] = useState("All");
  const [status, setStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
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
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border border-[#e8e8e8] rounded-md w-64 text-sm focus:outline-none focus:ring-1 focus:ring-[#4976f4]"
        />
      </div>
      <OrdersTable
        dealership={dealership}
        serviceType={serviceType}
        mode={mode}
        status={status}
        searchQuery={searchQuery}
      />
    </div>
  );
}
