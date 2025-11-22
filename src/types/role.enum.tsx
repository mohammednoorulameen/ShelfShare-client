export const Role =  {
  USER : "user",
  VENDOR : "vendor",
  ADMIN : "admin",
} as const

export type Role  = typeof Role[keyof typeof Role]