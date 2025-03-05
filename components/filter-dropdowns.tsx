"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { DropdownProps, FilterDropdownsProps } from "@/types/types";

function Dropdown({ label, options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 text-sm border border-[#e8e8e8] rounded-md px-3 py-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-[#6d7076]">{label} :</span>
        <span>{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#6d7076] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 bg-white border border-[#e8e8e8] rounded-md shadow-sm z-10 min-w-[180px]"
          role="menu"
        >
          {options.map((option) => (
            <button
              key={option}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-[#f5f5f5]"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              role="menuitem"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterDropdowns({
  dealership,
  setDealership,
  serviceType,
  setServiceType,
  mode,
  setMode,
  status,
  setStatus,
}: FilterDropdownsProps) {
  return (
    <div className="flex items-center gap-3">
      <Dropdown
        label="Dealership"
        options={["All", "AK Motors", "SR Motors"]}
        value={dealership}
        onChange={setDealership}
      />
      <Dropdown
        label="Service type"
        options={[
          "All",
          "General Service",
          "Express Service",
          "Quick Fix",
          "Bike Inspection",
          "Bike Care",
        ]}
        value={serviceType}
        onChange={setServiceType}
      />
      <Dropdown
        label="Mode of order"
        options={["All", "Online", "Offline"]}
        value={mode}
        onChange={setMode}
      />
      <Dropdown
        label="Status"
        options={["All", "In progress", "Completed"]}
        value={status}
        onChange={setStatus}
      />
    </div>
  );
}
