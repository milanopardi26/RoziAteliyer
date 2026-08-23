import type { Collection } from '@/lib/types';
import { fallbackCreators } from './creators';

function findCreator(id: string) {
  return fallbackCreators.find((c) => c.id === id);
}

export const fallbackCollections: Collection[] = [
  {
    id: 'c1',
    creator_id: '1',
    name: 'Mediterranean Summer',
    slug: 'mediterranean-summer',
    description: 'Sun-warmed palettes and garden florals from the coast.',
    cover_image_url: 'https://images.pexels.com/photos/5117322/pexels-photo-5117322.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    is_public: true,
    item_count: 12,
    creators: findCreator('1'),
  },
  {
    id: 'c2',
    creator_id: '2',
    name: 'Tokyo After Dark',
    slug: 'tokyo-after-dark',
    description: 'Neon geometry and quiet night patterns from Japan.',
    cover_image_url: 'https://images.pexels.com/photos/2268528/pexels-photo-2268528.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    is_public: true,
    item_count: 9,
    creators: findCreator('2'),
  },
  {
    id: 'c3',
    creator_id: '5',
    name: 'Warm Earth Tones',
    slug: 'warm-earth-tones',
    description: 'Desert hues and hand-drawn geometry from around the world.',
    cover_image_url: 'https://images.pexels.com/photos/2158532/pexels-photo-2158532.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    is_public: true,
    item_count: 15,
    creators: findCreator('5'),
  },
];
