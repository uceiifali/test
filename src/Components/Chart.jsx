import * as React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { curveCardinal } from 'd3-shape';
// import './styles.css';

const data = [
  {
    name: '10 Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '11 Jan',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '12 Jan',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '13 Jan',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '14 Jan',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '15 Jan',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '16 Jan',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const cardinal = curveCardinal.tension(0.2);

export default function App() {
  return (
    <div className="w-full h-60  rounded-2xl bg-new flex flex-col">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-[#294E6D] font-semibold text-lg">Revenue</h1>
        <h1 className="text-[#294E6D] font-medium text-base">Last 10 Days</h1>
      </div>
      <ResponsiveContainer>
        <AreaChart
          width={680}
          height={180}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            type={cardinal}
            dataKey="uv"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
