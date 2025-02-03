type NotificationType =
  | "collaboration-invite"
  | "note-updated"
  | "comment-mention"
  | "reminder-triggered"
  | "content-shared"
  | "system-alert"
  | "weekly-summary";

interface Notification {
  id: string;
  type: NotificationType;
  urgency: "routine" | "time-sensitive" | "critical";
  content: {
    headline: string;
    body: string;
    icon?: string; // URL or emoji
    deepLink?: string; // App-specific link
    context?: Record<string, unknown>;
  };
  sender?: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamps: {
    created: Date;
    scheduled?: Date;
    expires?: Date;
    read?: Date;
    interacted?: Date;
  };
  state: {
    read: boolean;
    archived: boolean;
    muted: boolean;
  };
  interactionHistory: Array<{
    action: "dismiss" | "click" | "snooze";
    timestamp: Date;
  }>;
  preferences: {
    allowSnooze: boolean;
    maxSnoozeCount: number;
    snoozeDuration?: number; // Minutes
  };
  // For push notifications
  pushConfig?: {
    badgeCount?: number;
    sound?: string;
    vibrationPattern?: number[];
  };
}
