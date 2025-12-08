export const AdminVerifyStatus = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
} as const;

export type AdminVerifyStatus =
  (typeof AdminVerifyStatus)[keyof typeof AdminVerifyStatus];
