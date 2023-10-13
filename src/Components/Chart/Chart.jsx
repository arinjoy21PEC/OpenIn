import "./Chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dummyData = [
  { name: "Week 1", activitiesA: 500, activitiesB: 400 },
  { name: "Week 2", activitiesA: 370, activitiesB: 430 },
  { name: "Week 3", activitiesA: 200, activitiesB: 300 },
  { name: "Week 4", activitiesA: 400, activitiesB: 350 },
];

export default function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Activities</h3>
      <h4 className="month">May-June 2021</h4>
      <div className="classInfo">
        <div className="class">
          <span className="classColor" style={{ backgroundColor: "LightGreen" }}></span>
          <span className="className">User</span>
        </div>
        <div className="class">
          <span className="classColor" style={{ backgroundColor: "Pink" }}></span>
          <span className="className">Guest</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={dummyData}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Bar dataKey="activitiesA" fill="LightGreen" barSize={30}/>
          <Bar dataKey="activitiesB" fill="Pink" barSize={30}/>
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
