
export type UVTableRow = {
  [key: string]: number | string | undefined;
  id ?: number;
  name: string;
  price: number;
}

export type UVTableProps = {
  header: string[];
  rows: UVTableRow[];
  keys: string[];
}

export type UVAction = {
  type: string;
  data ?: any;
}

export type UVHeaderConfig = {
  title: string;
  theme ?: string;
  alt ?: string;
  primaryWebsite ?: string;
  logo ?: {
    logo : string;
    width ?: string;
  }
  repository ?: {
    name ?: string;
    logo: string;
    url: string;
    height ?: string;
  }
}

export type UVHeaderProps = {
  data : UVHeaderConfig
};

export type UVDashboardType = {
  config ?: any;
};