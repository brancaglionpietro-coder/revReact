import { Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import pizzaDados from '../mock/pizzaDados.json'

export const GPizza = () => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={pizzaDados.data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="50%"
          stroke="white"
        />

        <Pie
          data={pizzaDados.data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          stroke="white"
          label
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
