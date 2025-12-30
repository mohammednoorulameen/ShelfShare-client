/* ================= TYPES ================= */

import type { StatusResult } from "./constants.types";

export type Column<T> = {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
  render: (item: T, index: number) => React.ReactNode;
};

export type CreateForm = {
  name: string;
  description: string;
};


export interface ManagementTableProps<
  T,
  F extends CreateForm | undefined = undefined
> {
  title: string;
  subtitle: string;
  data: T[];
  columns: Column<T>[];
  page: number;
  totalPages: number;
  form?: F;
  isLoading: boolean;
  isError: boolean;
  showCreate?: boolean;
  enableCategory?: boolean;
  enableBookData?: boolean;
  isEdit?: boolean

  onEdit?: (item: T) => void;
  onSubmit?: (e: React.FormEvent) => void;
  setForm?: React.Dispatch<React.SetStateAction<F>>;
  getName: (item: T) => string;
  getId: (item: T) => string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  getStatus?: (item: T) => StatusResult;
  getEmail?: (item: T) => string;
  getCategory?:(item: T)=> string;
  getPublisher?:(item: T)=> string;
  getLanguage?:(item: T)=> string;
  getStock?:(item: T)=> string;
  getRentPrice?:(item: T)=> number;
  getActualPrice?:(item: T)=> number;
  getRating?:(item: T)=> number;
  getPhone?: (item: T) => string;
  getDescription?: (item: T) => string;
  getCreatedDate?: (item: T) => string;
  getImage?: (item: T) => string | undefined;
  getVendorReply?: (item: T) => string | undefined;
  onApprove?: (item: T) => void;
  onReject?: (item: T, reason: string) => void;
  onToggleBlock?: (item: T) => void;
  handleCancel?: () => void;
  handleAddClick?: () => void;
}
