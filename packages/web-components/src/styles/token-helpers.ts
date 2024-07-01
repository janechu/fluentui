export interface CSSTokenMap {
  name: string;
  default: string | null;
  fallback?: CSSTokenMap;
}
