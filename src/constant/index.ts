import { NavbarLinks } from "@/types";

export const links: NavbarLinks[] = [
  {
    name: "Home",
    href: "",
    subLinks: [
      {
        name: "Sub Home",
        href: "/sub",
      },
      // Adding fake data for demonstration
      {
        name: "Sub Home 2",
        href: "/sub2",
      },
    ],
  },
  {
    name: "Profile",
    href: "",
    subLinks: [
      // Adding fake sub-links for the 'Profile' section
      {
        name: "Edit Profile",
        href: "/profile/edit",
      },
      {
        name: "Profile Settings",
        href: "/profile/settings",
      },
    ],
  },
  // Adding a completely new link with sub-links as fake data
  {
    name: "About",
    href: "",
    subLinks: [
      {
        name: "Company History",
        href: "/about/history",
      },
      {
        name: "Our Team",
        href: "/about/team",
      },
    ],
  },
  {
    name: "Page",
    href: "/page",
  },
];