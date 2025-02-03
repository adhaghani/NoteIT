interface Label {
  id: string;
  name: string;
  color: string;
  smartAssign?: {
    matchesKeywords: string[];
  };
}

interface LabelGroup {
  id: string;
  name: string;
  color: string;
  labels: Label[];
}
