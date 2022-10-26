export interface ColumnConfig {
  alias: string;
  name: string;
  isSortable: boolean;
  displayFunction?: (item: any) => string;
}
