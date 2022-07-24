export interface Provider {
  _id: string;
  iframeW: number;
  iframeH: number;
  order: number;
  name: string;
  provider: string;
  vendor: string;
  type: string;
  enabled: boolean;
  logo: string;
  tags: string[];
  gamesCount: number;
}
