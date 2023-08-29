"use client";
import DashboardCard from "./components/DashboardCard";
import Header from "./components/Header";
import { faker } from "@faker-js/faker";
/* bar chart stuff imports */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { AiOutlineBug } from "react-icons/ai";
import { BsTicketDetailed } from "react-icons/bs";
import RecentTickets from "./components/RecentTickets";
export default function Page() {
  return (
    <section className="flex-1 min-h-screen p-6 text-gray-200 bg-gray-900">
      <Header />
      <h2 className="mt-10 text-3xl font-semibold text-gray-200 capitalize">
        Ticket progress
      </h2>
      <section className="grid grid-cols-1 gap-4 mt-10 xl:grid-cols-2">
        <section className="h-[50vh] rounded-lg  bg-gray-100 p-4 lg:h-[70vh]">
          <Bar options={options} data={data} />
        </section>
        <RecentTickets />
      </section>
    </section>
  );
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  maintainAspectRatio: false,
};

const labels = ["January", "February", "March", "April", "May"];

export const data = {
  labels,
  datasets: [
    {
      label: "Open Tickets",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Bug Tickets",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
