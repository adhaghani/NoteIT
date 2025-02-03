interface SearchResult {
  noteId: string;
  highlight: {
    text: string;
    matchStart: number;
    matchEnd: number;
  }[];
  relevanceScore: number;
  foundIn: "title" | "content" | "comments";
}

interface SearchFilter {
  dateRange?: [Date, Date];
  tags?: string[];
  contentTypes?: ("text" | "image" | "code")[];
  minWordCount?: number;
  hasAttachments?: boolean;
}
