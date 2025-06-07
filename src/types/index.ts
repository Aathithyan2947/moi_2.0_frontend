import React from 'react';

export interface HoveredItemType {
  id: number;
  name: string;
  link: string;
  shortname?: string;
  icon: React.ComponentType;
  rank?: number;
}

export interface SidebarProps {
  hoveredItem: HoveredItemType | null;
  setHoveredItem: (item: HoveredItemType | null) => void;
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
}

export interface FloatingSideBarProps {
  sideBarOpen: boolean;
  hoveredItem: HoveredItemType;
  setHoveredItem: (item: HoveredItemType | null) => void;
}

export interface MobileMessageProps {}

export interface UseIsMobileReturn {
  isMobile: boolean;
}

export interface DbManagerType {
  init: () => Promise<void>;
  getUniqueValues: (type: string) => Promise<string[]>;
  setUniqueValues: (type: string, data: string[]) => Promise<void>;
  addUniqueValue: (type: string, value: string) => Promise<string[]>;
  getAllUniqueValues: () => Promise<Record<string, string[]>>;
  clearAllData: () => Promise<void>;
}

// Function related types
export interface FunctionData {
  function_id: string;
  function_name: string;
  function_owner_name: string;
  function_owner_city: string;
  function_owner_address: string;
  function_owner_phno: string;
  function_amt_spent: number;
  function_hero_name: string;
  function_heroine_name: string;
  function_held_place: string;
  function_held_city: string;
  function_start_date: string;
  function_start_time: string;
  function_end_date: string;
  function_end_time: string;
  function_total_days: number;
  _id?: string;
}

// Payer related types
export interface PayerData {
  _id: string;
  function_id: string;
  payer_name: string;
  payer_phno: string;
  payer_work: string;
  payer_given_object: 'Cash' | 'Gift';
  payer_cash_method?: string;
  payer_amount?: number;
  payer_gift_name?: string;
  payer_relation: string;
  payer_city: string;
  payer_address: string;
  payer_receipt_no?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pages: number;
    total: number;
    limit: number;
  };
  count?: number;
}

// Form related types
export interface FormErrors {
  [key: string]: string;
}

// Chart data types
export interface ChartDataPoint {
  name: string;
  value: number;
  count?: number;
}

// Edit log types
export interface EditLog {
  _id: string;
  target_type: string;
  target_id: string;
  action: string;
  before_value?: any;
  after_value?: any;
  changed_fields?: string[];
  reason?: string;
  created_by: string;
  user_name?: string;
  user_email?: string;
  created_at: string;
}