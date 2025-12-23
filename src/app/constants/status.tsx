export const AdminVerifyStatus = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
} as const;

export type AdminVerifyStatus =
  (typeof AdminVerifyStatus)[keyof typeof AdminVerifyStatus];


  
export const Status = {
  ACTIVE: "active",
  INVACTIVE: "innactive",
  BLOCKED: "blocked",
} as const;

export type Status =
  (typeof Status)[keyof typeof Status];


