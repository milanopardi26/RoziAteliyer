import type { Design } from '@/lib/types';
import { fallbackCreators } from './creators';

function findCreator(id: string) {
  return fallbackCreators.find((c) => c.id === id);
}

function makeDesign(partial: Partial<Design> & Pick<Design, 'id' | 'title' | 'slug' | 'image_url' | 'creator_id'>): Design {
  return {
    creator_id: '',
    shop_id: null,
    title: '',
    slug: '',
    description: null,
    image_url: '',
    thumbnail_url: null,
    colors: ['#999999'],
    width_px: 1500,
    height_px: 1500,
    dpi: 150,
    is_public: true,
    is_featured: false,
    view_count: 0,
    favorite_count: 0,
    review_count: 0,
    avg_rating: 4.5,
    published_at: '',
    created_at: '',
    updated_at: '',
    creators: findCreator(partial.creator_id),
    ...partial,
  };
}

export const fallbackDesigns: Design[] = [
  makeDesign({ id: '1', creator_id: '1', title: 'Mediterranean Bloom', slug: 'mediterranean-bloom', image_url: 'https://images.pexels.com/photos/5117322/pexels-photo-5117322.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#E8A0BF'], is_featured: true, view_count: 4521, favorite_count: 312, review_count: 28, avg_rating: 4.8, published_at: '2024-03-12T00:00:00Z' }),
  makeDesign({ id: '2', creator_id: '2', title: 'Asanoha Grid', slug: 'asanoha-grid', image_url: 'https://images.pexels.com/photos/2268541/pexels-photo-2268541.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#2C3E50'], is_featured: true, view_count: 5234, favorite_count: 389, review_count: 31, avg_rating: 4.8, published_at: '2024-03-10T00:00:00Z' }),
  makeDesign({ id: '3', creator_id: '3', title: 'Pastel Dreams', slug: 'pastel-dreams', image_url: 'https://images.pexels.com/photos/4391611/pexels-photo-4391611.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#FADBD8'], is_featured: true, view_count: 6789, favorite_count: 512, review_count: 35, avg_rating: 4.9, published_at: '2024-03-08T00:00:00Z' }),
  makeDesign({ id: '4', creator_id: '4', title: 'Monstera Wild', slug: 'monstera-wild', image_url: 'https://images.pexels.com/photos/3686275/pexels-photo-3686275.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#27AE60'], is_featured: true, view_count: 5678, favorite_count: 423, review_count: 29, avg_rating: 4.8, published_at: '2024-03-06T00:00:00Z' }),
  makeDesign({ id: '5', creator_id: '2', title: 'Tokyo Night', slug: 'tokyo-night', image_url: 'https://images.pexels.com/photos/2268528/pexels-photo-2268528.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#E74C3C'], is_featured: true, view_count: 4123, favorite_count: 312, review_count: 24, avg_rating: 4.9, published_at: '2024-03-04T00:00:00Z' }),
  makeDesign({ id: '6', creator_id: '5', title: 'Desert Dreams', slug: 'desert-dreams', image_url: 'https://images.pexels.com/photos/2158532/pexels-photo-2158532.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#D35400'], is_featured: true, view_count: 3102, favorite_count: 234, review_count: 17, avg_rating: 4.7, published_at: '2024-03-02T00:00:00Z' }),
  makeDesign({ id: '7', creator_id: '1', title: 'Linen Whisper', slug: 'linen-whisper', image_url: 'https://images.pexels.com/photos/5117322/pexels-photo-5117322.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#F5F0E8'], is_featured: false, view_count: 2103, favorite_count: 178, review_count: 12, avg_rating: 4.6, published_at: '2024-02-28T00:00:00Z' }),
  makeDesign({ id: '8', creator_id: '3', title: 'Sunburst Rhythm', slug: 'sunburst-rhythm', image_url: 'https://images.pexels.com/photos/4391611/pexels-photo-4391611.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop', colors: ['#F39C12'], is_featured: false, view_count: 3890, favorite_count: 276, review_count: 19, avg_rating: 4.7, published_at: '2024-02-26T00:00:00Z' }),
];
