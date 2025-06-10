import { FaUserEdit } from 'react-icons/fa';
import { ImBin2 } from 'react-icons/im';
import { IoMdPersonAdd } from 'react-icons/io';
import { IoPieChartSharp } from 'react-icons/io5';
import { MdOutlineFestival } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { IconType } from 'react-icons';

export interface SidebarMenuItem {
  name: string;
  link: string;
  shortname: string;
  icon: IconType;
  id: number;
}

export const SIDEBAR_MENU_LIST: SidebarMenuItem[] = [
  {
    name: 'Funtions',
    link: '/',
    shortname: 'Funtions',
    icon: MdOutlineFestival,
    id: 1,
  },
  {
    name: 'Payers',
    link: '/payers',
    shortname: 'Payers',
    icon: IoMdPersonAdd,
    id: 2,
  },
  {
    name: 'Reports',
    link: '/reports',
    shortname: 'Reports',
    icon: TbReportAnalytics,
    id: 3,
  },
  {
    name: 'Charts',
    link: '/charts',
    shortname: 'Charts',
    icon: IoPieChartSharp,
    id: 4,
  },
  {
    name: 'Edit Logs',
    link: '/edit_logs',
    shortname: 'Logs',
    icon: FaUserEdit,
    id: 5,
  },
  {
    name: ' Bin',
    link: '/bin/payers_bin',
    shortname: 'Bin',
    icon: ImBin2,
    id: 6,
  },
];

export interface FloatingSidebarPosition {
  topPosition: string;
  topPosition2: string;
}

export const FLOATING_SIDBAR_POSITIONS: Record<number, FloatingSidebarPosition> = {
  0: { topPosition: '54px', topPosition2: '56px' },
  1: { topPosition: '102px', topPosition2: '112px' },
  2: { topPosition: '150px', topPosition2: '168px' },
  3: { topPosition: '198px', topPosition2: '224px' },
  4: { topPosition: '246px', topPosition2: '280px' },
  5: { topPosition: '294px', topPosition2: '336px' },
  6: { topPosition: '342px', topPosition2: '392px' },
};