export interface IContentBreadcrumbs {
  underline: 'none' | 'hover' | 'always' | undefined;
  color: string;
  href: string;
  name: string;
}
export interface IBreadcrumdsProps {
  content: IContentBreadcrumbs[];
}
