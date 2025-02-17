"use client";

import * as React from "react";
import {
  Blocks,
  Calendar,
  Home,
  MessageCircleQuestion,
  Search,
  Settings2,
  Bell,
  Trash2,
  Notebook
} from "lucide-react";

import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavWorkspaces } from "@/components/nav-workspaces";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion
    }
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊"
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳"
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪"
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚"
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱"
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️"
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠"
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰"
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬"
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅"
    }
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔"
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏"
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟"
        }
      ]
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯"
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠"
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝"
        }
      ]
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "#",
          emoji: "✍️"
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️"
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵"
        }
      ]
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "#",
          emoji: "💰"
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧"
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅"
        }
      ]
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          emoji: "🗺️"
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎"
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸"
        }
      ]
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 z-50" {...props}>
      <SidebarHeader>
        <NavUser
          user={{
            name: "John Doe",
            email: "johndoe@example.com",
            avatar: "https://github.com/adhaghani.png"
          }}
        />
      </SidebarHeader>

      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
