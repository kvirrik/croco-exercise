import { Game } from './game.interface';

export interface GameCategory {
  type: string;
  category: string;
  platform: 'desktop' | 'mobile';
  name: string;
  order: number;
  games: Game[];
  totalGames: number;
}
