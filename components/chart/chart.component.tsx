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

interface ChartProps {
  data: Mint.ChartHistory[];
}

const strokes = ["#6EE7B7", "#93C5FD", "#FCA5A5", "#C4B5FD"];

const Chart: React.FC<ChartProps> = ({ data }) => {
  const dataKeys = [
    ...new Set(
      data
        .flatMap((item) => Object.keys(item))
        .filter((keyName) => !["date", "name"].includes(keyName))
    ),
  ];

  return (
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          formatter={(value: number) =>
            `£${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
        />
        <Legend />
        {dataKeys.map((key, idx) => (
          <Line key={key} type="monotone" dataKey={key} stroke={strokes[idx]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
