"use client";
import { CustomBreadCrumbs } from "@/app/components/ui/BreadCrumb";
import { Card, Typography } from "@material-tailwind/react";
import React from "react";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const TABLE_HEAD = [
  "Date",
  "Target For Profile Keyword",
  "Achievement for Profile Keyword",
  "Remaining for Profile Keyword",
  "Target for Blog Post Keyword",
  "Achievement for Blog Post Keyword",
  "Remaining for Blog Post Keword",
];

const TABLE_ROWS = [
  {
    date: "10/10/1900",
    Target: 5000,
    targetProfileKeyword: 5000,
    achievementProfileKeyword: 4700,
    remainingProfileKeyword: 200,
    targetBlogPostKeyword: 785,
    achievementBlogPostKeyword: 750,
    remainingBlogPostKeyword: 35,
  },
  {
    date: "10/10/1900",
    Target: 5000,
    targetProfileKeyword: 5000,
    achievementProfileKeyword: 4700,
    remainingProfileKeyword: 200,
    targetBlogPostKeyword: 785,
    achievementBlogPostKeyword: 750,
    remainingBlogPostKeyword: 35,
  },
  {
    date: "10/10/1900",
    Target: 5000,
    targetProfileKeyword: 5000,
    achievementProfileKeyword: 4700,
    remainingProfileKeyword: 200,
    targetBlogPostKeyword: 785,
    achievementBlogPostKeyword: 750,
    remainingBlogPostKeyword: 35,
  },
  {
    date: "10/10/1900",
    Target: 5000,
    targetProfileKeyword: 5000,
    achievementProfileKeyword: 4700,
    remainingProfileKeyword: 200,
    targetBlogPostKeyword: 785,
    achievementBlogPostKeyword: 750,
    remainingBlogPostKeyword: 35,
  },
];

const MyStatus = () => {
  const chartData = {
    options: {
      labels: ["Target", "Achievement"],
    },
    series: [73, 27],
    colors: ["#447b40", "#cc7870", "#e74ce4"],
  };

  return (
    <div>
      <CustomBreadCrumbs
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "my status",
            link: "/super_admin/my-status/",
          },
        ]}
      />
      <h1 className="text-2xl font-bold  bg-gray-400 mb-2">My Daily Status</h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
        {/* Top Pie Chart */}
        <div className="bg-gray-200">
          <h1 className="text-xl font-bold mt-2 text-center">
            Profile Keywords
          </h1>
          {typeof window !== "undefined" && (
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="pie"
              width="350"
              colors={chartData.colors}
            />
          )}
        </div>
        <div className="bg-gray-200">
          <h1 className="text-xl mb-2 font-bold mt-2 text-center">
            Blog Post Keywords
          </h1>
          {typeof window !== "undefined" && (
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="pie"
              width="350"
              colors={chartData.colors}
            />
          )}
        </div>
      </div>
      {/* My Details Status Table */}
      <Typography
        variant="h4"
        color="blue-gray"
        className="mt-2 bg-gray-400 mb-2"
      >
        My Details Status
      </Typography>
      {/* Table data */}
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {head
                      .split(" ")
                      .reduce((acc: string[], word, index, array) => {
                        if (index % 2 === 0) {
                          acc.push(`${word} ${array[index + 1] || ""}`);
                        }
                        return acc;
                      }, [])
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({
                date,
                targetProfileKeyword,
                achievementProfileKeyword,
                remainingProfileKeyword,
                targetBlogPostKeyword,
                achievementBlogPostKeyword,
                remainingBlogPostKeyword,
              }) => {
                return (
                  <tr key={date}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {targetProfileKeyword}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {achievementProfileKeyword}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {remainingProfileKeyword}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {targetBlogPostKeyword}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {achievementBlogPostKeyword}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {remainingBlogPostKeyword}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyStatus;
