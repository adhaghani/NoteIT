interface TwoFactorAuth {
  enabled: boolean;
  method: "sms" | "authenticator" | "email";
  backupCodes?: string[];
}

interface SessionInfo {
  deviceId: string;
  ipAddress: string;
  lastUsed: Date;
  userAgent: string;
}

interface ImageAsset {
  url: string;
  altText: string;
}

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

interface preferences {
  theme: "light" | "dark";
  timezone: string;
  notifications: {
    isEnabled: boolean;
    email: boolean;
    activity: boolean;
    newsLetter: boolean;
    system: boolean;
    time: "08:00" | "12:00" | "18:00";
  };
}

interface AccountActivity {
  lastLogin: Date;
  lastActive: Date;
  failedLoginAttempts: number;
  isActive: boolean;
  lockUntil?: Date;
  signupSource: "web" | "mobile" | "api";
}

export interface Account {
  id: string;
  email: string;
  username: string;
  displayName: string;
  hashedPassword: string;
  twoFactor?: TwoFactorAuth;
  activeSessions: SessionInfo[];
  favouriteNotes?: string[]; // Note IDs
  avatar?: ImageAsset;
  bio?: string;
  socialLinks?: SocialLinks;

  settings: preferences;

  createdAt: Date;
  updatedAt: Date;
  lastActive: Date;
  emailVerified: boolean;
  activity: AccountActivity;
}
