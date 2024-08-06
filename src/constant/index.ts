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

export const homeCardData = [
  {
    title: "For Talents",
    data: [{
        subtitle: "Community",
        content: "Practice public challenges, learn new cyber security skill, apply for jobs, and participate in CTF competitions to be ranked on the top of the world.",
        button: {
          label: "Learn More",
          link: "/talent"
        }
      }
    ]
  },
  {
    title: "For Businesses",
    data: [{
        subtitle: "Hiring",
        content: "Hire the top 1% of elite cyber security professionals. Get access to our closed network of top talented cyber security freelancers and full timers.",
        button: {
          label: "Learn More",
          link: "/jobs"
        }
      },
      {
        subtitle: "Host A CTF",
        content: "Host your own cyber security capture the flag contest to get engaged with the security community or assess your employees skills.",
        button: {
          label: "Learn More",
          link: "/competitions/host"
        }
      }
    ]
  }
]