/**
 * 24 Sekki (二十四節気) - The 24 Solar Terms
 * 
 * An ancient East Asian calendrical system that divides the solar year
 * into 24 micro-seasons to track natural, agricultural, and climatic changes.
 */

export interface Sekki {
  id: string;
  kanji: string;
  romaji: string;
  english: string;
  startMonth: number;    // 1-12
  startDay: number;      // Approximate start day
  description: string;   // Natural phenomena description
  context: string;       // Extended meaning and cultural significance
  reflection: string;    // Contemplative prompt
  wisdom: string;        // Practical seasonal suggestion
  color: string;         // Subtle accent color (tailwind class)
  season: "spring" | "summer" | "autumn" | "winter";
}

export const SEKKI_DATA: Sekki[] = [
  // SPRING (春)
  {
    id: "risshun",
    kanji: "立春",
    romaji: "Risshun",
    english: "Beginning of Spring",
    startMonth: 2,
    startDay: 4,
    description: "Spring begins. The east wind melts the ice.",
    context: "The first of the 24 sekki marks the astronomical start of spring. Though often still cold, ancient farmers watched for subtle signs: plum blossoms starting to bloom, the lengthening days bringing new energy.",
    reflection: "What new beginning is stirring within you?",
    wisdom: "A season for Create and Focus — plant seeds for the year ahead",
    color: "bg-emerald-400/10",
    season: "spring",
  },
  {
    id: "usui",
    kanji: "雨水",
    romaji: "Usui",
    english: "Rain Water",
    startMonth: 2,
    startDay: 19,
    description: "Snow turns to rain. The earth awakens with moisture.",
    context: "As temperatures rise, precipitation shifts from snow to rain. The name literally means 'rain water' — moisture that will soon nourish the soil for planting. Fish begin to swim upward, breaking through thinning ice.",
    reflection: "What frozen parts of yourself are ready to thaw?",
    wisdom: "A season for Health and Rest — nourish yourself as spring nourishes the earth",
    color: "bg-sky-400/10",
    season: "spring",
  },
  {
    id: "keichitsu",
    kanji: "啓蟄",
    romaji: "Keichitsu",
    english: "Awakening of Insects",
    startMonth: 3,
    startDay: 6,
    description: "Hibernating creatures emerge. Thunder stirs the sky.",
    context: "The word 啓蟄 means 'opening' and 'insects hiding in the ground.' Spring thunder awakens dormant creatures. Caterpillars become butterflies. This sekki honors the stirring of life that has been waiting through winter.",
    reflection: "What dormant dreams are ready to emerge?",
    wisdom: "A season for Create and Joy — energy rises, let it move you",
    color: "bg-lime-400/10",
    season: "spring",
  },
  {
    id: "shunbun",
    kanji: "春分",
    romaji: "Shunbun",
    english: "Spring Equinox",
    startMonth: 3,
    startDay: 21,
    description: "Day and night are equal. Swallows return from the south.",
    context: "One of two days when light and darkness are perfectly balanced. In Japan, this marks Ohigan—a time to honor ancestors and reflect on the middle path. Swallows return, cherry blossoms begin their brief, beautiful bloom.",
    reflection: "Where do you seek balance between action and stillness?",
    wisdom: "A season for Review — pause at the midpoint, recalibrate your path",
    color: "bg-green-400/10",
    season: "spring",
  },
  {
    id: "seimei",
    kanji: "清明",
    romaji: "Seimei",
    english: "Clear and Bright",
    startMonth: 4,
    startDay: 5,
    description: "The air is fresh and clear. Cherry blossoms reach full bloom.",
    context: "The name evokes the pure, bright quality of spring at its peak. In China, this is Qingming Festival—a time to tend graves and celebrate renewal. Everything seems to shimmer with possibility and fresh beginnings.",
    reflection: "What clarity is emerging in your vision?",
    wisdom: "A season for Focus and Create — clarity breeds momentum",
    color: "bg-pink-300/10",
    season: "spring",
  },
  {
    id: "kokuu",
    kanji: "穀雨",
    romaji: "Kokuu",
    english: "Grain Rain",
    startMonth: 4,
    startDay: 20,
    description: "Spring rains nourish the crops. Peonies bloom.",
    context: "The final spring sekki brings the gentle rains essential for grain crops. Farmers prepare rice paddies. Peonies—the 'king of flowers' in East Asia—reach full magnificence. The earth is lush and ready for the work ahead.",
    reflection: "What are you cultivating that needs patient tending?",
    wisdom: "A season for Health and Focus — steady effort brings growth",
    color: "bg-teal-400/10",
    season: "spring",
  },
  // SUMMER (夏)
  {
    id: "rikka",
    kanji: "立夏",
    romaji: "Rikka",
    english: "Beginning of Summer",
    startMonth: 5,
    startDay: 6,
    description: "Summer begins. Frogs begin to sing.",
    context: "Summer's first sekki arrives as rice planting season begins. Days noticeably lengthen. Frogs chorus in the paddies. Wisteria drapes purple curtains. Energy expands outward as nature reaches toward the sun.",
    reflection: "What will you bring to full expression this season?",
    wisdom: "A season for Joy and Create — embrace the expanding light",
    color: "bg-yellow-300/10",
    season: "summer",
  },
  {
    id: "shoman",
    kanji: "小満",
    romaji: "Shōman",
    english: "Lesser Fullness",
    startMonth: 5,
    startDay: 21,
    description: "Grain begins to ripen. Life reaches towards fullness.",
    context: "Grain heads begin to fill but aren't yet ripe—hence 'lesser' fullness. Silkworms feast on mulberry leaves. Life is abundant but not yet complete. This sekki teaches the beauty of potential on the cusp of realization.",
    reflection: "What is ripening in your life right now?",
    wisdom: "A season for Focus and Social — share your growing abundance",
    color: "bg-amber-300/10",
    season: "summer",
  },
  {
    id: "boshu",
    kanji: "芒種",
    romaji: "Bōshu",
    english: "Grain in Ear",
    startMonth: 6,
    startDay: 6,
    description: "Wheat ripens. Praying mantises hatch.",
    context: "芒 refers to the 'awns' or bristles on grain heads—wheat is now ready for harvest as rice planting continues. Mantises emerge as tiny hunters. The rainy season (tsuyu) often begins, bringing necessary moisture.",
    reflection: "What seeds planted long ago are now bearing fruit?",
    wisdom: "A season for Focus and Health — sustained effort in rising heat",
    color: "bg-orange-300/10",
    season: "summer",
  },
  {
    id: "geshi",
    kanji: "夏至",
    romaji: "Geshi",
    english: "Summer Solstice",
    startMonth: 6,
    startDay: 21,
    description: "The longest day. Light reaches its peak.",
    context: "The sun reaches its highest point. Light is at maximum, darkness at minimum. Yet this peak marks the beginning of light's retreat. Japanese tradition sees this as a time for contemplation amidst celebration—yang begins its turn toward yin.",
    reflection: "How will you use this abundance of light?",
    wisdom: "A season for Joy and Social — celebrate at the peak of brightness",
    color: "bg-yellow-400/10",
    season: "summer",
  },
  {
    id: "shosho",
    kanji: "小暑",
    romaji: "Shōsho",
    english: "Lesser Heat",
    startMonth: 7,
    startDay: 7,
    description: "Heat begins to intensify. Warm winds blow.",
    context: "The rainy season ends and true summer heat arrives. Lotus flowers bloom in ponds. Cicadas begin their chorus. This sekki marks Tanabata, the star festival celebrating celestial lovers who meet once yearly across the Milky Way.",
    reflection: "Where can you find coolness amidst intensity?",
    wisdom: "A season for Rest and Health — pace yourself in rising heat",
    color: "bg-orange-400/10",
    season: "summer",
  },
  {
    id: "taisho",
    kanji: "大暑",
    romaji: "Taisho",
    english: "Greater Heat",
    startMonth: 7,
    startDay: 23,
    description: "The hottest period. Cicadas sing loudly.",
    context: "The year's most intense heat. Cicadas reach peak volume. Traditional wisdom advises eating eel for stamina. This is summer's crucible—a time when endurance itself becomes the practice, and seeking shade becomes an art.",
    reflection: "What can only grow in this crucible of heat?",
    wisdom: "A season for Rest and Joy — find shade, seek water, move slowly",
    color: "bg-red-400/10",
    season: "summer",
  },
  // AUTUMN (秋)
  {
    id: "risshū",
    kanji: "立秋",
    romaji: "Risshū",
    english: "Beginning of Autumn",
    startMonth: 8,
    startDay: 8,
    description: "Autumn begins. Cool winds start to blow.",
    context: "Though still hot, autumn has officially begun. Subtle signs appear: slightly cooler evenings, a different quality of light. In Japan, seasonal greetings shift from 'heat' to 'lingering heat.' The harvest mindset begins.",
    reflection: "What are you ready to harvest?",
    wisdom: "A season for Review and Create — gather what you've grown",
    color: "bg-amber-400/10",
    season: "autumn",
  },
  {
    id: "shosho_autumn",
    kanji: "処暑",
    romaji: "Shosho",
    english: "End of Heat",
    startMonth: 8,
    startDay: 23,
    description: "The heat retreats. Rice ripens in the fields.",
    context: "処 means 'to stop' or 'to stay'—the heat finally begins to subside. Rice paddies turn golden. Typhoon season peaks. This transitional sekki honors the relief of cooling and the beauty of golden fields.",
    reflection: "What intensity is ready to soften?",
    wisdom: "A season for Focus and Health — transition mindfully",
    color: "bg-yellow-500/10",
    season: "autumn",
  },
  {
    id: "hakuro",
    kanji: "白露",
    romaji: "Hakuro",
    english: "White Dew",
    startMonth: 9,
    startDay: 8,
    description: "Dew glistens on grass. Wild geese return.",
    context: "Morning dew appears white on grass and leaves—a sign of true autumn. Migratory geese begin their southward journey. The moon viewing season approaches. There's a poetic melancholy to this sekki, honoring beauty's transience.",
    reflection: "What beauty appears in the quiet morning?",
    wisdom: "A season for Rest and Review — early mornings hold wisdom",
    color: "bg-slate-300/10",
    season: "autumn",
  },
  {
    id: "shubun",
    kanji: "秋分",
    romaji: "Shūbun",
    english: "Autumn Equinox",
    startMonth: 9,
    startDay: 23,
    description: "Day and night are equal. Thunder ceases.",
    context: "The second equinox—another perfect balance of light and dark. Japan observes Ohigan again, visiting family graves as red spider lilies bloom. The harvest moon rises full. Thunder storms give way to clear autumn skies.",
    reflection: "What balance are you seeking as light fades?",
    wisdom: "A season for Review and Social — honor what has passed",
    color: "bg-orange-500/10",
    season: "autumn",
  },
  {
    id: "kanro",
    kanji: "寒露",
    romaji: "Kanro",
    english: "Cold Dew",
    startMonth: 10,
    startDay: 8,
    description: "Dew turns cold. Chrysanthemums bloom yellow.",
    context: "Dew becomes cold enough to almost freeze. Chrysanthemums—symbol of longevity and autumn—reach full bloom. Geese complete their migration. The air sharpens. This sekki marks the pivot toward winter preparation.",
    reflection: "What needs to be released before winter?",
    wisdom: "A season for Focus and Rest — complete what matters most",
    color: "bg-amber-500/10",
    season: "autumn",
  },
  {
    id: "soko",
    kanji: "霜降",
    romaji: "Sōkō",
    english: "Frost Descends",
    startMonth: 10,
    startDay: 24,
    description: "First frost appears. Leaves turn crimson and gold.",
    context: "The first frost signals autumn's final phase. Maple leaves reach peak color—momijigari (autumn leaf viewing) season begins. Persimmons ripen to deep orange. There's profound beauty in this letting go before winter.",
    reflection: "What beauty emerges as things let go?",
    wisdom: "A season for Review and Joy — find beauty in release",
    color: "bg-rose-400/10",
    season: "autumn",
  },
  // WINTER (冬)
  {
    id: "ritto",
    kanji: "立冬",
    romaji: "Rittō",
    english: "Beginning of Winter",
    startMonth: 11,
    startDay: 8,
    description: "Winter begins. Water starts to freeze.",
    context: "Winter officially arrives. Camellias begin their long bloom. Bears prepare for hibernation. Traditional preparation includes airing bedding and storing preserved foods. The energy turns inward, like roots drawing down.",
    reflection: "What must you preserve for the long night?",
    wisdom: "A season for Rest and Focus — conserve energy, go inward",
    color: "bg-slate-400/10",
    season: "winter",
  },
  {
    id: "shosetsu",
    kanji: "小雪",
    romaji: "Shōsetsu",
    english: "Lesser Snow",
    startMonth: 11,
    startDay: 22,
    description: "Light snow falls. Rainbows hide.",
    context: "The first light snows dust the mountains. Rainbows become rare as moisture decreases. Mandarin oranges ripen bright against grey skies. This is a quieting time—nature whispers rather than shouts.",
    reflection: "What quiet work happens in the gathering dark?",
    wisdom: "A season for Focus and Create — depth emerges in darkness",
    color: "bg-blue-300/10",
    season: "winter",
  },
  {
    id: "taisetsu",
    kanji: "大雪",
    romaji: "Taisetsu",
    english: "Greater Snow",
    startMonth: 12,
    startDay: 7,
    description: "Heavy snow blankets the land. Bears hibernate.",
    context: "Deep snow covers the mountains. Salmon complete their spawning journeys. Bears enter full hibernation. The world becomes muffled and still. This sekki honors the wisdom of deep rest and the protection of withdrawal.",
    reflection: "What needs the protection of deep rest?",
    wisdom: "A season for Rest and Review — hibernate with purpose",
    color: "bg-slate-500/10",
    season: "winter",
  },
  {
    id: "toji",
    kanji: "冬至",
    romaji: "Tōji",
    english: "Winter Solstice",
    startMonth: 12,
    startDay: 22,
    description: "The longest night. Light begins its return.",
    context: "The darkest day, yet the turning point toward light. Traditional practices include yuzu citrus baths and eating kabocha squash for health. This profound sekki celebrates persistence through darkness and the promise of renewal.",
    reflection: "What light do you carry through the darkness?",
    wisdom: "A season for Rest and Joy — celebrate the return of light",
    color: "bg-indigo-400/10",
    season: "winter",
  },
  {
    id: "shokan",
    kanji: "小寒",
    romaji: "Shōkan",
    english: "Lesser Cold",
    startMonth: 1,
    startDay: 6,
    description: "The cold deepens. Spring stirs beneath the frost.",
    context: "The cold intensifies but hasn't peaked. New Year energy mingles with winter stillness. Beneath the frozen ground, bulbs begin their slow awakening. This is the 'cold before the cold'—a time of quiet anticipation.",
    reflection: "What seeds are you nurturing in stillness?",
    wisdom: "A season for Focus and Rest — deep work flourishes in quietude",
    color: "bg-cyan-400/10",
    season: "winter",
  },
  {
    id: "daikan",
    kanji: "大寒",
    romaji: "Daikan",
    english: "Greater Cold",
    startMonth: 1,
    startDay: 20,
    description: "The coldest period. Ice is at its thickest.",
    context: "The year's final sekki brings its deepest cold. Ice reaches maximum thickness. Yet this extremity precedes spring—in two weeks, Risshun arrives. The coldest moment contains the seed of warmth. Endurance brings transformation.",
    reflection: "What strength grows in enduring the cold?",
    wisdom: "A season for Rest and Health — warmth is precious, share it",
    color: "bg-blue-500/10",
    season: "winter",
  },
];

/**
 * Get the current sekki for a given date
 */
export function getSekki(date: Date): Sekki {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();
  
  // Find the sekki that contains this date
  // We need to check if the date falls within each sekki's range
  for (let i = 0; i < SEKKI_DATA.length; i++) {
    const current = SEKKI_DATA[i];
    const next = SEKKI_DATA[(i + 1) % SEKKI_DATA.length];
    
    // Handle year wrap (Daikan -> Risshun)
    const currentMonthDay = current.startMonth * 100 + current.startDay;
    const nextMonthDay = next.startMonth * 100 + next.startDay;
    const dateMonthDay = month * 100 + day;
    
    // Check if date falls in this sekki's range
    if (nextMonthDay > currentMonthDay) {
      // Normal case: same year
      if (dateMonthDay >= currentMonthDay && dateMonthDay < nextMonthDay) {
        return current;
      }
    } else {
      // Year wrap case (e.g., Daikan spans Dec-Jan boundary conceptually,
      // but actually Daikan is Jan 20, Risshun is Feb 4)
      // Handle the special case where current is late in year and next is early
      if (dateMonthDay >= currentMonthDay || dateMonthDay < nextMonthDay) {
        return current;
      }
    }
  }
  
  // Fallback: return Shokan (first sekki of calendar year)
  return SEKKI_DATA[22]; // shokan
}

/**
 * Get the sekki for today
 */
export function getCurrentSekki(): Sekki {
  return getSekki(new Date());
}

/**
 * Get the next sekki transition date from a given date
 */
export function getNextSekkiTransition(date: Date): { sekki: Sekki; date: Date } {
  const currentSekki = getSekki(date);
  const currentIndex = SEKKI_DATA.findIndex(s => s.id === currentSekki.id);
  const nextSekki = SEKKI_DATA[(currentIndex + 1) % SEKKI_DATA.length];
  
  const year = date.getFullYear();
  let transitionDate = new Date(year, nextSekki.startMonth - 1, nextSekki.startDay);
  
  // If the transition date is before the current date, it's next year
  if (transitionDate <= date) {
    transitionDate = new Date(year + 1, nextSekki.startMonth - 1, nextSekki.startDay);
  }
  
  return { sekki: nextSekki, date: transitionDate };
}

/**
 * Get days until next sekki transition
 */
export function getDaysUntilNextSekki(date: Date): number {
  const { date: transitionDate } = getNextSekkiTransition(date);
  const diffTime = transitionDate.getTime() - date.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Get the season color class for backgrounds
 */
export function getSeasonColorClass(season: Sekki["season"]): string {
  switch (season) {
    case "spring":
      return "from-emerald-500/5 to-pink-500/5";
    case "summer":
      return "from-yellow-500/5 to-orange-500/5";
    case "autumn":
      return "from-amber-500/5 to-rose-500/5";
    case "winter":
      return "from-blue-500/5 to-slate-500/5";
  }
}
