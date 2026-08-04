import React from "react";
import CtaBanner from "@/components/admin/CtaBanner";
import StatCard from "@/components/admin/StatCard";
import DataTable, { ClientItem } from "@/components/admin/DataTable";
import ChartCard from "@/components/admin/ChartCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Windmill Admin",
  description: "Windmill Admin Dashboard main view",
};

export default function AdminDashboardPage() {
  const clientsData: ClientItem[] = [
    {
      name: "Hans Burger",
      title: "10x Developer",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    },
    {
      name: "Jolina Angelie",
      title: "Unemployed",
      amount: "$ 369.95",
      status: "Pending",
      statusBadge: "text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Sarah Curry",
      title: "Designer",
      amount: "$ 86.00",
      status: "Denied",
      statusBadge: "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Rulia Joberts",
      title: "Actress",
      amount: "$ 1276.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Wenzel Dashington",
      title: "Actor",
      amount: "$ 863.45",
      status: "Expired",
      statusBadge: "text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Dave Li",
      title: "Influencer",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Maria Ramovic",
      title: "Runner",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
    {
      name: "Hitney Wouston",
      title: "Singer",
      amount: "$ 863.45",
      status: "Approved",
      statusBadge: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
      date: "6/10/2020",
      avatar: "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200",
    },
  ];

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>

      {/* Metric Stat Cards Grid */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total clients"
          value="6389"
          iconBgColor="bg-orange-100 dark:bg-orange-500"
          iconTextColor="text-orange-500 dark:text-orange-100"
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z"></path>
            </svg>
          }
        />

        <StatCard
          title="Account balance"
          value="$ 46,760.89"
          iconBgColor="bg-green-100 dark:bg-green-500"
          iconTextColor="text-green-500 dark:text-green-100"
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
          }
        />

        <StatCard
          title="New sales"
          value="376"
          iconBgColor="bg-blue-100 dark:bg-blue-500"
          iconTextColor="text-blue-500 dark:text-blue-100"
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 100-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          }
        />

        <StatCard
          title="Pending contacts"
          value="35"
          iconBgColor="bg-teal-100 dark:bg-teal-500"
          iconTextColor="text-teal-500 dark:text-teal-100"
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
            </svg>
          }
        />
      </div>

      {/* Data Table Component */}
      <DataTable data={clientsData} />

      {/* Charts Section */}
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Charts
      </h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard
          title="Revenue"
          chartId="pie"
          chartPlaceholder="Revenue Distribution Chart (Pie)"
          legends={[
            { color: "bg-blue-500", label: "Shirts" },
            { color: "bg-teal-600", label: "Shoes" },
            { color: "bg-purple-600", label: "Bags" },
          ]}
        />

        <ChartCard
          title="Traffic"
          chartId="line"
          chartPlaceholder="Traffic Trends Chart (Line)"
          legends={[
            { color: "bg-teal-600", label: "Organic" },
            { color: "bg-purple-600", label: "Paid" },
          ]}
        />
      </div>
    </>
  );
}
