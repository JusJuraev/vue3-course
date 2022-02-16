export interface ListDataGetter<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  total: number;
}

export interface DetailDataGetter<T> {
  data: T;
  loading: boolean;
  error: string | null;
}
