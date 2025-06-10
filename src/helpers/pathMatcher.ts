export function isSidebarItemActive(currentPath: string, itemLink: string): boolean {
  if (itemLink === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(itemLink);
}