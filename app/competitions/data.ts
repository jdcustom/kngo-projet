export type Competition = {
  slug: string;
  title: string;
  description: string;
  price: number;
  maxEntries: number;
  soldEntries: number;
  closesAt: string;
  image: string;
};

export const competitions: Competition[] = [
  {
    slug: "tech-bundle",
    title: "£5,000 Tech Bundle",
    description: "Answer the skill question correctly for a chance to win.",
    price: 5,
    maxEntries: 2500,
    soldEntries: 1342,
    closesAt: "2026-03-01T20:00:00Z",
    image: "/competitions/tech.jpg",
  },
  {
    slug: "cash-prize",
    title: "Cash Prize Draw",
    description: "Transparent entry limits and live winner announcements.",
    price: 10,
    maxEntries: 1500,
    soldEntries: 982,
    closesAt: "2026-03-05T20:00:00Z",
    image: "/competitions/cash.jpg",
  },
  {
    slug: "weekly-tech",
    title: "Weekly Tech Drop",
    description: "New competitions every week — skill always required.",
    price: 3,
    maxEntries: 3000,
    soldEntries: 2145,
    closesAt: "2026-02-25T20:00:00Z",
    image: "/competitions/weekly.jpg",
  },
];
