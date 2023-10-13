import React from "react";
import "./WidgetLg.scss";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Basic Tees", value: 25, color: "#0088FE"  },
  { name: "Custom Short Pants", value: 35, color: "#00C49F"  },
  { name: "Super Hoodies", value: 40, color: "#FFBB28" },
];


export default function WidgetLg() {
  return (
    <div className="charti">
      <h3 className="chartTitlei">Top Products</h3>
      <ResponsiveContainer width="100%" aspect={4 / 3} className='pie'>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="statistics">
        {data.map((item, index) => (
          <>
          <div key={index} className="statistic-item">
            <div className="color-box" style={{ background: item.color }}></div>
            <div className="category">{item.name}</div>
          </div>
          <div className="value">{item.value}%</div>
          </>
        ))}
      </div>
      <div className="date-text">May-June 2021</div>
    </div>
  );
}