import { Listing, User } from "@prisma/client";
import { ReactNode } from "react";

export interface IContainerProps {
  children: ReactNode;
}

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string
}