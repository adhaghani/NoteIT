type NoteContent =
  | TextContent
  | ImageContent
  | ChecklistContent
  | CodeBlockContent
  | EmbedContent
  | ListContent
  | DividerContent;

interface ChecklistContent {
  type: "checklist";
  items: {
    text: string;
    checked: boolean;
    createdBy: string;
  }[];
}

interface CodeBlockContent {
  type: "code";
  language: "typescript" | "python" | "json";
  code: string;
  showLineNumbers: boolean;
}

interface EmbedContent {
  type: "embed";
  url: string;
  provider: "youtube" | "codepen" | "figma";
  caption?: string;
}

type TextContent = {
  type: "text";
  title?: string;
  paragraphs: string[];
};

type ImageContent = {
  type: "image";
  url: string;
  altText?: string;
  caption?: string;
};

type ListContent = {
  type: "list";
  items: string[];
  style: "bullet" | "numbered" | "checklist";
};

type DividerContent = {
  type: "divider";
};

export interface Note {
  id: string;
  authorId: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  summary?: string;
  content: NoteContent[];
  tags?: string[];
  isPinned?: boolean;
  isPublic?: boolean;
  status?: "draft" | "published" | "archived";
  priority?: "low" | "medium" | "high";
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date | string;
  lastSyncedAt?: Date | string;
}
