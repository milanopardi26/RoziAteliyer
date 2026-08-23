export type Locale = 'fa' | 'en';

export const locales: Locale[] = ['fa', 'en'];
export const defaultLocale: Locale = 'fa';

export const localeConfig: Record<Locale, { name: string; nativeName: string; dir: 'rtl' | 'ltr'; htmlLang: string }> = {
  fa: { name: 'Persian', nativeName: 'فارسی', dir: 'rtl', htmlLang: 'fa-IR' },
  en: { name: 'English', nativeName: 'English', dir: 'ltr', htmlLang: 'en' },
};

export type Dictionary = typeof dictionaries.fa;

export const dictionaries = {
  fa: {
    // Brand
    brandName: 'مورو',
    tagline: 'دنیایی از الگو، ساخته‌ی انسان‌ها',

    // Nav
    nav: {
      discover: 'کاشف',
      browse: 'مرور',
      categories: 'دسته‌بندی‌ها',
      artists: 'هنرمندان',
      journal: 'نشریه',
      search: 'جستجو',
      favorites: 'علاقه‌مندی‌ها',
      menu: 'منو',
      close: 'بستن',
      joinCommunity: 'پیوستن به جامعه',
      languageSwitch: 'English',
    },

    // Hero
    hero: {
      badge: 'بازار مستقل طراحی',
      titleLine1: 'دنیایی از الگو،',
      titleLine2: 'ساخته‌ی انسان‌ها.',
      subtitle: 'طراحی‌های اصلی سطح را از هنرمندان مستقل سراسر جهان کشف کنید. آن چیزی را پیدا کنید که شبیه شماست.',
      exploreCta: 'کاشف طراحی‌ها',
      meetArtists: 'آشنایی با هنرمندان',
      statDesigns: '۱۲ هزار+ طراحی اصلی',
      statCountries: '۸۴ کشور نماینده',
      findNext: 'مورد علاقه‌ی بعدی‌ات را پیدا کن.',
    },

    // Sections
    sections: {
      curatedForYou: 'برای تو انتخاب شده',
      freshFromStudio: 'تازه از استودیو',
      viewAllDesigns: 'مشاهده همه طراحی‌ها',
      exploreByMood: 'کاوش بر اساس حال‌وهوا',
      whatDrawnTo: 'به چه کشیده می‌شوی؟',
      browseEverything: 'مرور همه چیز',
      peopleBehind: 'افراد پشت الگوها',
      madeWithIntention: 'با نیت ساخته شده.',
      sharedWithWorld: 'با دنیا به اشتراک گذاشته.',
      peopleBehindDesc: 'هر طراحی در مورو با یک انسان، یک مکان و یک دیدگاه آغاز می‌شود. با هنرمندانی که نحوه دیدن ما به جهان را شکل می‌دهند آشنا شو.',
      meetAllArtists: 'آشنایی با همه هنرمندان',
      creativelyCurious: 'برای کنجکاوهای خلاق',
      journalTitle: 'نشریه مورو',
      journalDesc: 'داستان‌ها، بازدید از استودیوها و راه‌های سنجیده برای آوردن الگو در زندگی روزمره.',
      readJournal: 'خواندن نشریه',
    },

    // Design card
    design: {
      featured: 'ویژه',
      addToFavorites: 'افزودن به علاقه‌مندی‌ها',
      removeFromFavorites: 'حذف از علاقه‌مندی‌ها',
    },

    // Discover page
    discover: {
      browseMarketplace: 'مرور بازار',
      allDesigns: 'همه طراحی‌ها',
      designsFound: '{count} طراحی یافت شد',
      oneDesignFound: 'یک طراحی یافت شد',
      searchPlaceholder: 'جستجوی طراحی‌ها یا هنرمندان...',
      sortBy: 'مرتب‌سازی بر اساس',
      sortNewest: 'جدیدترین',
      sortPopular: 'پربازدیدترین',
      sortRating: 'بالاترین امتیاز',
      sortFavorites: 'پرطرفدارترین',
      filters: 'فیلترها',
      noDesigns: 'طراحی‌ای یافت نشد',
      noDesignsDesc: 'جستجو یا فیلترها را تنظیم کنید.',
      categories: 'دسته‌بندی‌ها',
      designsUnit: 'طراحی',
    },

    // Design detail
    detail: {
      backToBrowse: 'بازگشت به مرور',
      views: 'بازدید',
      favoritesCount: 'علاقه‌مندی',
      reviews: 'نقد',
      communityReviews: 'نقد جامعه',
      totalReviews: 'مجموع نقدها',
      moreFromArtist: 'بیشتر از این هنرمند',
      viewProfile: 'مشاهده پروفایل',
      dimensions: 'ابعاد',
      resolution: 'رزولوشن',
      published: 'منتشر شده',
      getDesign: 'دریافت طراحی',
      favorited: 'افزوده شد',
      notFound: 'طراحی یافت نشد',
      notFoundDesc: 'این طراحی وجود ندارد یا حذف شده است.',
    },

    // Artist profile
    artist: {
      designs: 'طراحی',
      followers: 'دنبال‌کننده',
      follow: 'دنبال کردن',
      following: 'دنبال‌شده',
      website: 'وب‌سایت',
      allDesigns: 'همه طراحی‌ها',
      works: 'اثر',
      noDesigns: 'هنوز طراحی‌ای وجود ندارد',
      noDesignsDesc: 'این هنرمند هنوز طراحی‌ای منتشر نکرده است.',
      notFound: 'هنرمند یافت نشد',
      notFoundDesc: 'این هنرمند وجود ندارد.',
    },

    // Favorites page
    favorites: {
      yourCollection: 'مجموعه شما',
      title: 'علاقه‌مندی‌ها',
      savedCount: '{count} طراحی ذخیره شده',
      noFavorites: 'هنوز علاقه‌مندی‌ای ندارید',
      noFavoritesDesc: 'با ضربه روی قلب هر طراحی، آن را اینجا ذخیره کنید.',
      discoverDesigns: 'کاشف طراحی‌ها',
    },

    // Footer
    footer: {
      explore: 'کاوش',
      about: 'درباره',
      ourStory: 'داستان ما',
      sellOnMorrow: 'فروش در مورو',
      support: 'پشتیبانی',
      termsPrivacy: 'قوانین و حریم خصوصی',
      stayInspired: 'الهام‌بگیرید',
      newsletterDesc: 'ماهی یک بار، چیزهای زیبا را مستقیم در صندوق ورودی‌تان بگیرید.',
      emailPlaceholder: 'آدرس ایمیل شما',
      subscribe: 'عضویت',
      copyright: '© ۱۴۰۳ مورو. برای کنجکاوهای خلاق ساخته شده.',
      tagline: 'کار اصلی. صداهای مستقل.',
      description: 'خانه‌ای برای طراحی اصلی سطح و افرادی که آن را می‌سازند.',
    },

    // Common
    common: {
      loading: 'در حال بارگذاری...',
      allDesigns: 'همه طراحی‌ها',
    },
  },

  en: {
    brandName: 'Morrow',
    tagline: 'A world of pattern, made by people',

    nav: {
      discover: 'Discover',
      browse: 'Browse',
      categories: 'Categories',
      artists: 'Artists',
      journal: 'Journal',
      search: 'Search',
      favorites: 'Favorites',
      menu: 'Menu',
      close: 'Close',
      joinCommunity: 'Join the community',
      languageSwitch: 'فارسی',
    },

    hero: {
      badge: 'The independent design marketplace',
      titleLine1: 'A world of pattern,',
      titleLine2: 'made by people.',
      subtitle: 'Discover original surface designs from independent artists around the world. Find the one that feels like you.',
      exploreCta: 'Explore designs',
      meetArtists: 'Meet the artists',
      statDesigns: '12k+ original designs',
      statCountries: '84 countries represented',
      findNext: 'Find your next favorite.',
    },

    sections: {
      curatedForYou: 'Curated for you',
      freshFromStudio: 'Fresh from the studio',
      viewAllDesigns: 'View all designs',
      exploreByMood: 'Explore by mood',
      whatDrawnTo: 'What are you drawn to?',
      browseEverything: 'Browse everything',
      peopleBehind: 'The people behind the patterns',
      madeWithIntention: 'Made with intention.',
      sharedWithWorld: 'Shared with the world.',
      peopleBehindDesc: 'Every design on Morrow begins with a person, a place, and a point of view. Get to know the artists shaping the way we see the world.',
      meetAllArtists: 'Meet all artists',
      creativelyCurious: 'For the creatively curious',
      journalTitle: 'The Morrow Journal',
      journalDesc: 'Stories, studio visits, and thoughtful ways to bring more pattern into your everyday.',
      readJournal: 'Read the journal',
    },

    design: {
      featured: 'Featured',
      addToFavorites: 'Add to favorites',
      removeFromFavorites: 'Remove from favorites',
    },

    discover: {
      browseMarketplace: 'Browse the marketplace',
      allDesigns: 'All designs',
      designsFound: '{count} designs found',
      oneDesignFound: '1 design found',
      searchPlaceholder: 'Search designs or artists...',
      sortBy: 'Sort by',
      sortNewest: 'Newest',
      sortPopular: 'Most viewed',
      sortRating: 'Highest rated',
      sortFavorites: 'Most favorited',
      filters: 'Filters',
      noDesigns: 'No designs found',
      noDesignsDesc: 'Try adjusting your search or filters.',
      categories: 'Categories',
      designsUnit: 'designs',
    },

    detail: {
      backToBrowse: 'Back to browse',
      views: 'views',
      favoritesCount: 'favorites',
      reviews: 'reviews',
      communityReviews: 'Community reviews',
      totalReviews: 'total reviews',
      moreFromArtist: 'More from this artist',
      viewProfile: 'View profile',
      dimensions: 'Dimensions',
      resolution: 'Resolution',
      published: 'Published',
      getDesign: 'Get design',
      favorited: 'Favorited',
      notFound: 'Design not found',
      notFoundDesc: 'This design does not exist or has been removed.',
    },

    artist: {
      designs: 'designs',
      followers: 'followers',
      follow: 'Follow',
      following: 'Following',
      website: 'Website',
      allDesigns: 'All designs',
      works: 'works',
      noDesigns: 'No designs yet',
      noDesignsDesc: 'This artist hasn\'t published any designs.',
      notFound: 'Artist not found',
      notFoundDesc: 'This artist does not exist.',
    },

    favorites: {
      yourCollection: 'Your collection',
      title: 'Favorites',
      savedCount: '{count} saved designs',
      noFavorites: 'No favorites yet',
      noFavoritesDesc: 'Tap the heart on any design to save it here for later.',
      discoverDesigns: 'Discover designs',
    },

    footer: {
      explore: 'Explore',
      about: 'About',
      ourStory: 'Our story',
      sellOnMorrow: 'Sell on Morrow',
      support: 'Support',
      termsPrivacy: 'Terms & privacy',
      stayInspired: 'Stay inspired',
      newsletterDesc: 'A monthly dose of beautiful things, straight to your inbox.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      copyright: '© 2024 Morrow. Made for the creatively curious.',
      tagline: 'Original work. Independent voices.',
      description: 'A home for original surface design and the people who make it.',
    },

    common: {
      loading: 'Loading...',
      allDesigns: 'All designs',
    },
  },
} as const;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}

// Persian number conversion
export function toPersianNumber(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

export function formatCount(num: number, locale: Locale): string {
  if (locale === 'fa') {
    if (num >= 1000) {
      return toPersianNumber(num >= 10000 ? Math.round(num / 1000) : (num / 1000).toFixed(1)) + ' هزار';
    }
    return toPersianNumber(num);
  }
  if (num >= 1000) {
    return num >= 10000 ? `${Math.round(num / 1000)}k` : `${(num / 1000).toFixed(1)}k`;
  }
  return String(num);
}
