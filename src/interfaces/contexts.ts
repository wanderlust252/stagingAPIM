import { TODO } from '.';

export interface SidebarContextType {
  sidebarToggle: TODO;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}
