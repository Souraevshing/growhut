"use client";

import { CheckCircle2, Circle } from "lucide-react";

import { orders } from "@/mock-data/orders";
import { OrdersTableProps } from "@/types/types";

export default function OrdersTable({
  dealership,
  mode,
  serviceType,
  status,
  searchQuery,
}: OrdersTableProps) {
  const filteredOrders = orders.filter((order) => {
    const matchesDealership =
      dealership === "All" || order.dealership === dealership;
    const matchesServiceType =
      serviceType === "All" || order.serviceType === serviceType;
    const matchesMode = mode === "All" || order.mode === mode;
    const matchesStatus = status === "All" || order.status === status;

    const searchLower = searchQuery.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      order.orderId.toLowerCase().includes(searchLower) ||
      order.customerName.toLowerCase().includes(searchLower) ||
      order.serviceType.toLowerCase().includes(searchLower) ||
      order.dealership.toLowerCase().includes(searchLower);

    return (
      matchesDealership &&
      matchesServiceType &&
      matchesMode &&
      matchesStatus &&
      matchesSearch
    );
  });

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#e8e8e8] text-sm text-[#6d7076]">
          <th className="px-4 py-3">Date</th>
          <th className="px-4 py-3">Order ID</th>
          <th className="px-4 py-3">Dealership</th>
          <th className="px-4 py-3">Customer Name</th>
          <th className="px-4 py-3">Service Type</th>
          <th className="px-4 py-3">Mode</th>
          <th className="px-4 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredOrders.map((order, index) => (
          <tr key={index} className="border-b border-[#e8e8e8]">
            <td className="px-4 py-3">{order.date}</td>
            <td className="px-4 py-3">{order.orderId}</td>
            <td className="px-4 py-3">{order.dealership}</td>
            <td className="px-4 py-3">{order.customerName}</td>
            <td className="px-4 py-3">{order.serviceType}</td>
            <td className="px-4 py-3">{order.mode}</td>
            <td className="px-4 py-3">
              <div className={`flex items-center gap-2`}>
                {order.status === "In progress" ? (
                  <>
                    <Circle className="w-4 h-4 text-[#4976f4] fill-[#4976f4]" />
                    <span className="text-sm text-[#4976f4]">In progress</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#14b34e] fill-[#14b34e]" />
                    <span className="text-sm text-[#14b34e]">Completed</span>
                  </>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
