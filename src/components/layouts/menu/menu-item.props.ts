export interface MenuItemProps {
  title: string

  key: 'Dashboard' |
    'Users' |
    'Clients' |
    'Financials' |
    'Discounts' |
    'Products' |
    'Pharmacies' |
    'Consults' |
    'Laboratories' |
    'Medical' |
    'Couriers' |
    'SMS' |
    'Posts' |
    'Complaints' |
    'Survey' |
    'Comments' |
    'Contacts' |
    'Monitoring' |
    'Versions' |
    'Settings'

  route: string

  subRoutes?: Array<MenuItemDetailProps>
}

export interface MenuItemDetailProps {
  title: string,
  route: string
}
