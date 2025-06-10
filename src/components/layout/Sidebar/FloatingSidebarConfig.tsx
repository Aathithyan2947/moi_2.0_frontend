interface SidebarDataItem {
  title: string;
  link: string;
}

interface SidebarExtensionData {
  sub_heading: string;
  data: SidebarDataItem[];
}

interface SidebarConfigItem {
  root_heading: string;
  id: number;
  extension_data: SidebarExtensionData[];
}

export const SIDEBAR_CONFIG: Record<number, SidebarConfigItem> = {
  1: {
    root_heading: 'Functions',
    id: 1,
    extension_data: [
      {
        sub_heading: 'Quick Links',
        data: [
          { title: 'Create Function', link: '/create_functions' },
          { title: 'Add Function Bill', link: '/add_function_bill' },
        ],
      },
    ],
  },
  6: {
    root_heading: 'Bin',
    id: 6,
    extension_data: [
      {
        sub_heading: 'Quick Links',
        data: [
          { title: 'Functions Bin', link: '/bin/functions_bin' },
          { title: 'Payers Bin', link: '/bin/payers_bin' },
        ],
      },
    ],
  },
};