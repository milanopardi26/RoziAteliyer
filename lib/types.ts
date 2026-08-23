export type Creator = {
  id: string;
  display_name: string;
  handle: string;
  bio: string | null;
  location: string | null;
  avatar_url: string | null;
  banner_url: string | null;
  website_url: string | null;
  is_verified: boolean;
  design_count: number;
  follower_count: number;
  created_at: string;
  updated_at: string;
};

export type Shop = {
  id: string;
  creator_id: string;
  name: string;
  slug: string;
  description: string | null;
  banner_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type Design = {
  id: string;
  creator_id: string;
  shop_id: string | null;
  title: string;
  slug: string;
  description: string | null;
  image_url: string;
  thumbnail_url: string | null;
  colors: string[];
  width_px: number;
  height_px: number;
  dpi: number;
  is_public: boolean;
  is_featured: boolean;
  view_count: number;
  favorite_count: number;
  review_count: number;
  avg_rating: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  creators?: Creator;
  shops?: Shop;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon_name: string | null;
  design_count: number;
};

export type Collection = {
  id: string;
  creator_id: string | null;
  name: string;
  slug: string;
  slug: string;
  description: string | null;
  cover_image_url: string | null;
  is_public: boolean;
  creators?: Creator;
  item_count: number;
  creators?: Creator;
};

export type Review = {
  id: string;
  design_id: string;
  creator_id: string;
  rating: number;
  comment: string | null;
  created_at: string;

export type Favorite = {
  id: string;
  user_id: string;
  design_id: string;
  created_at: string;
};
  creators?: Creator;
};

export type Favorite = {
  id: string;
  user_id: string;
  design_id: string;
  created_at: string;
};
