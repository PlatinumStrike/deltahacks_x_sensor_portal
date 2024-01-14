"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import test from "@/app/test";

export default function LineChartCustom(props: {
  data: string;
  xKey: string;
  yKeys: Array<string>;
}) {
  let data = JSON.parse("[" + props.data + "]");

  let lines = [];
  for (let i = 0; i < props.yKeys.length; i++) {
    lines.push(
      <Line
        type="monotone"
        dataKey={props.yKeys[i]}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    );
  }

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
