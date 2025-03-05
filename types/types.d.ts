export interface DashboardProps {
  dealership: string;
  setDealership: (value: string) => void;
  serviceType: string;
  setServiceType: (value: string) => void;
  mode: string;
  setMode: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterDropdownsProps {
  dealership: string;
  setDealership: (value: string) => void;
  serviceType: string;
  setServiceType: (value: string) => void;
  mode: string;
  setMode: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}

export interface OrdersTableProps {
  dealership: string;
  serviceType: string;
  mode: string;
  status: string;
  searchQuery: string;
}
