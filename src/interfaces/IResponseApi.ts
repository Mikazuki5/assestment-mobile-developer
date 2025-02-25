import { AxiosError } from 'axios';

type links = {
  first: string | null;
  last: string | null;
  next: string | null;
  prev: string | null;
};

type MetaInteface = {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export interface BaseSortInterface {
  sort: string;
  sortBy: string;
  page: number;
  groupByDate: string;
}

export interface APIResponse<D> {
  data: D;
  links?: links;
  meta?: MetaInteface;
  match?: boolean;
  message: string;
  error: boolean;
}

export type APIError = AxiosError<APIResponse<never>>;
