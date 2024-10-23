import { signal } from '@angular/core';
import { MenuItem } from '../menu.model';

export const MENU_ITEMS = <MenuItem[]>[
  {
    icon: 'dashboard',
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    icon: 'account_balance_wallet',
    label: 'Financial',
    children: [
      {
        icon: 'TDS',
        label: 'TDS',
        route: 'financial/tds',
      },
      {
        icon: 'TCS',
        label: 'TCS',
        route: 'financial/tds',
      },
    ],
  },
  {
    icon: 'question_answer',
    label: 'FAQ',
    route: '/faq',
  },
];
