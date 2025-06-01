export const menu = [
  { href: "/", title: "HOME" },
  { href: "/about", title: "ABOUT" },
  { href: "/yourplan", title: "CREATE YOUR PLAN" },
] as const;

// Extract RoutePath type
export type RoutePath = (typeof menu)[number]["href"];
