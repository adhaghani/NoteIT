interface ImageAsset {
  url: string;
  alt: string;
}

interface ResponsiveImage {
  mobile: ImageAsset;
  desktop: ImageAsset;
}

export interface NoteGroup {
  id: string;
  authorId: string;
  name: string;
  icon?: string;
  color?: string;
  description?: string;
  image: ResponsiveImage;
  notes?: string[]; // Array of Note IDs (not full Note objects)
  tags?: string[];
  isPinned?: boolean;
  isPublic?: boolean;
  children?: NoteGroup[];
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date | string;
  lastSyncedAt?: Date | string;
}

interface NoteGroupFilter {
  dateRange?: [Date, Date];
  tags?: string[];
  contentTypes?: ("text" | "image" | "code")[];
  minWordCount?: number;
  hasAttachments?: boolean;
}
