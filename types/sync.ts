interface SyncState {
  deviceId: string;
  lastSyncedAt: Date;
  pendingChanges: {
    created: number;
    updated: number;
    deleted: number;
  };
  conflictResolutionLog: {
    noteId: string;
    resolvedBy: "local" | "remote";
    timestamp: Date;
  }[];
}
