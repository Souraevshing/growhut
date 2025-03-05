"use client";

import { StrictMode, useState } from "react";

import Dashboard from "@/components/dashboard";

export default function Page() {
  const [dealership, setDealership] = useState("All");
  const [serviceType, setServiceType] = useState("All");
  const [mode, setMode] = useState("All");
  const [status, setStatus] = useState("All");

  return (
    <StrictMode>
      <Dashboard
        dealership={dealership}
        setDealership={setDealership}
        serviceType={serviceType}
        setServiceType={setServiceType}
        mode={mode}
        setMode={setMode}
        status={status}
        setStatus={setStatus}
      />
    </StrictMode>
  );
}
