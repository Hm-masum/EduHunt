"use client";

import * as React from "react";
import {
  Activity,
  BookOpenText,
  ChartNoAxesColumnIncreasing,
  Mails,
  PenTool,
  UserRoundCog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const NavItems = (role: "tutor" | "student") => {
  if (role === "tutor") {
    return [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: ChartNoAxesColumnIncreasing,
        isActive: true,
      },
      {
        title: "My Applications",
        url: "/tutor/my-application",
        icon: Mails,
        isActive: true,
      },
      {
        title: "Payment History",
        url: "/tutor/payment-history",
        icon: Activity,
        isActive: true,
      },
      {
        title: "Tutor Posts",
        url: "#",
        icon: PenTool,
        items: [
          {
            title: "Create Tutor Posts",
            url: "/tutor/create-post",
          },
          {
            title: "Manage Tutor Posts",
            url: "/tutor/manage-posts",
          },
          {
            title: "Applicant Info",
            url: "/tutor/applicant-info",
          },
        ],
      },
      {
        title: "Blogs",
        url: "#",
        icon: BookOpenText,
        items: [
          {
            title: "Create Blog",
            url: "/dashboard/create-blog",
          },
          {
            title: "Manage Blogs",
            url: "/dashboard/manage-blogs",
          },
        ],
      },
      {
        title: "Profile",
        url: "#",
        icon: UserRoundCog,
        items: [
          {
            title: "My Profile",
            url: "/dashboard/my-profile",
          },
          {
            title: "Update Profile",
            url: "/dashboard/update-profile",
          },
        ],
      },
    ];
  } else if (role === "student") {
    return [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: ChartNoAxesColumnIncreasing,
        isActive: true,
      },
      {
        title: "My Applications",
        url: "/student/my-application",
        icon: Mails,
        isActive: true,
      },
      {
        title: "Payment History",
        url: "/student/payment-history",
        icon: Activity,
        isActive: true,
      },
      {
        title: "Student Posts",
        url: "#",
        icon: PenTool,
        items: [
          {
            title: "Create Student Posts",
            url: "/student/create-post",
          },
          {
            title: "Manage Student Posts",
            url: "/student/manage-posts",
          },
          {
            title: "Applicant Info",
            url: "/student/applicant-info",
          },
        ],
      },
      {
        title: "Blogs",
        url: "#",
        icon: BookOpenText,
        items: [
          {
            title: "Create Blog",
            url: "/dashboard/create-blog",
          },
          {
            title: "Manage Blogs",
            url: "/dashboard/manage-blogs",
          },
        ],
      },
      {
        title: "Profile",
        url: "#",
        icon: UserRoundCog,
        items: [
          {
            title: "My Profile",
            url: "/dashboard/my-profile",
          },
          {
            title: "Update Profile",
            url: "/dashboard/update-profile",
          },
        ],
      },
    ];
  }
};

export function AppSidebar({
  role,
  ...props
}: { role: "tutor" | "student" } & React.ComponentProps<typeof Sidebar>) {
  const navMain = NavItems(role);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="dark:bg-gray-600 flex items-center justify-center"
              asChild
            >
              <Link href="/" className="flex items-center w-[25%]">
                <Image width={40} height={40} src={logo} alt="" />
                <h2 className="font-semibold md:text-2xl">
                  Edu<span className="text-purple-700">Hunt</span>
                </h2>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>{navMain && <NavMain items={navMain} />}</SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
