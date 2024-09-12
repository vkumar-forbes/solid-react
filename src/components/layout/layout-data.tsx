import { SidebarAward, SidebarStar, SidebarThumbsUp } from "@/assets/icons";

export default [
  {
    Icon: SidebarStar,
    heading: "Data-Driven Insights",
    caption: "Our ratings are based on reliable, data-driven methodologies.",
  },
  {
    Icon: SidebarAward,
    heading: "Comprehensive Research",
    caption:
      "We analyzed 25 debt relief companies on 18 data points in the categories of fees, customer satisfaction and experience, digital experience, history and the number of services provided.",
  },
  {
    Icon: SidebarThumbsUp,
    heading: "Trusted Expertise",
    caption:
      "We tailor our recommendations based on what's most important to each borrower. Join the thousands of borrowers who trust Forbes Advisor for their loan needs.",
  },
] as const;
