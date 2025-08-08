import { User } from "firebase/auth";

export interface UseAuth {
  currentUser: User | null;
  signup: () => {};
  login: (email, password) => {};
  logout: () => {};
  resetPassword: (email) => {};
  authError: string;
}

export interface CompanyInfo {
  addOns: {
    backupAndRecovery: boolean;
    fullSupport: boolean;
    security: boolean;
  };
  address: {
    line1: string;
    line2: string;
  };
  contractUrl: string;
  hasSpares: boolean;
  logo: string;
  name: string;
  numOfDevices: number;
  supportLevelText: string;
}
