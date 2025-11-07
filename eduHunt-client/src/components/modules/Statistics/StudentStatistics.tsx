"use client";

import { applicantInfoOfStudentPost } from "@/services/ApplyStudentPost";
import { myApplicationInfoOfTutorPost } from "@/services/ApplyTutorPost";
import { getMyStudentPosts } from "@/services/StudentPost";
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

//Custom shape for pie chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const COLORS = ["#00C49F", "#FFBB28", "purple"];

const StudentStatistics = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: posts } = await getMyStudentPosts();
      const { data: applicants } = await applicantInfoOfStudentPost();
      const { data: applications } = await myApplicationInfoOfTutorPost();

      setPosts(posts);
      setApplicants(applicants);
      setApplications(applications);
    };

    fetchPosts();
  }, []);

  const data = [
    { name: "Posts", value: posts?.length },
    { name: "Applicants", value: applicants?.length },
    { name: "Applications", value: applications?.length },
  ];

  return (
    <div className="min-h-[100vh]">
      <div className="shadow text-center font-semibold rounded-lg flex flex-col md:flex-row w-full">
        <div className="space-y-3 py-7 px-5 w-full md:w-1/3 border">
          <div className="text-3xl">Total Post</div>
          <div>Number of posts {posts?.length || 0}</div>
        </div>

        <div className="space-y-3 text-blue-700 py-7 px-5 w-full md:w-1/3 border">
          <div className="text-3xl text-center font-semibold">
            Total Applicant
          </div>
          <div>Number of applicant in my post {applicants?.length || 0}</div>
        </div>

        <div className="space-y-3 py-7 px-5 w-full md:w-1/3 border">
          <div className=" text-3xl text-center font-semibold">
            Total Application
          </div>
          <div>
            Number of my application in student post {applications?.length || 0}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default StudentStatistics;
