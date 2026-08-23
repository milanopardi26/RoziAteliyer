'use client';

import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Category, Collection, Design } from '@/lib/types';
import { useLocale } from '@/components/locale-provider';
import { fallbackDesigns } from '@/data/designs';
import { fallbackCategories } from '@/data/categories';
import { fallbackCollections } from '@/data/collections';
import { Header, Footer } from '@/components/layout/SiteChrome';
import { Hero } from '@/components/marketplace/Hero';
import { MarketplaceSearch } from '@/components/marketplace/MarketplaceSearch';
import { CategoryGrid } from '@/components/marketplace/CategoryGrid';
import { FeaturedDesignsSection } from '@/components/marketplace/FeaturedDesignsSection';
import { TrendingSection } from '@/components/marketplace/TrendingSection';
import { NewArrivalsSection } from '@/components/marketplace/NewArrivalsSection';
import { CollectionsSection } from '@/components/marketplace/CollectionsSection';
import { CreatorsSection } from '@/components/marketplace/CreatorsSection';
import { DiscoverMoreSection } from '@/components/marketplace/DiscoverMoreSection';
import { JournalBanner } from '@/components/marketplace/JournalBanner';
import { PortfolioPreview } from '@/components/extensions/PortfolioPreview';
import { EducationPreview } from '@/components/extensions/EducationPreview';
import { OwnerShopPreview } from '@/components/extensions/OwnerShopPreview';
import { SectionHeader } from '@/components/shared/SectionHeader';

const categoryCoverMap: Record<string, string> = {
  floral: fallbackDesigns[0].image_url,
  geometric: fallbackDesigns[1].image_url,
  abstract: fallbackDesigns[5].image_url,
  botanical: fallbackDesigns[3].image_url,
  watercolor: fallbackDesigns[2].image_url,
  minimalist: 'https://images.pexels.com/photos/2268543/pexels-photo-2268543.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
};

export default function Home() {
  const { locale, dict } = useLocale();
  const base = `/${locale}`;

  const [designs, setDesigns] = useState<Design[]>(fallbackDesigns);
  const [categories, setCategories] = useState<Category[]>(fallbackCategories);
  const [collections, setCollections] = useState<Collection[]>(fallbackCollections);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadMarketplace() {
      const [designResponse, categoryResponse] = await Promise.all([
        supabase
          .from('designs')
          .select('*, creators(*)')
          .eq('is_public', true)
          .order('published_at', { ascending: false })
          .limit(12),
        supabase.from('categories').select('*').order('design_count', { ascending: false }),
      ]);
      if (designResponse.data && designResponse.data.length > 0) setDesigns(designResponse.data as Design[]);
      if (categoryResponse.data && categoryResponse.data.length > 0)
        setCategories(categoryResponse.data as Category[]);
    }
    loadMarketplace();
  }, []);

  const filteredDesigns = useMemo(() => {
    if (!search.trim()) return designs;
    return designs.filter((design) =>
      `${design.title} ${design.creators?.display_name ?? ''}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [designs, search]);

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((f) => f !== id) : [...current, id]
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <Header favoriteCount={favorites.length} />

      <Hero />

      <MarketplaceSearch value={search} onChange={setSearch} />

      <section id="categories" className="border-y border-border/60 bg-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            eyebrow={dict.sections.exploreByMood}
            title={dict.sections.whatDrawnTo}
            ctaLabel={dict.sections.browseEverything}
            ctaHref={`${base}/discover`}
            variant="accent"
          />
          <CategoryGrid
            categories={categories}
            coverMap={categoryCoverMap}
            base={base}
            fallbackImage={fallbackDesigns[5].image_url}
          />
        </div>
      </section>

      <FeaturedDesignsSection
        designs={filteredDesigns}
        favorites={favorites}
        onFavorite={toggleFavorite}
      />

      <TrendingSection designs={designs} favorites={favorites} onFavorite={toggleFavorite} />

      <NewArrivalsSection designs={designs} favorites={favorites} onFavorite={toggleFavorite} />

      <CollectionsSection collections={collections} />

      <CreatorsSection />

      <DiscoverMoreSection />

      <PortfolioPreview />

      <EducationPreview />

      <OwnerShopPreview />

      <JournalBanner />

      <Footer />
    </main>
  );
}
