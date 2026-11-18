import { Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

export const GPizza = () => {
  const data01 = [
    { name: "Vendas", value: 400, fill: "#8884d8" },
    { name: "Marketing", value: 300, fill: "#82ca9d" },
    { name: "Tecnologia", value: 200, fill: "#ffc658" },
    { name: "Outros", value: 100, fill: "#ff8042" },
  ];

  const data02 = [
    { name: "Concluído", value: 65, fill: "#82ca9d" },
    { name: "Pendente", value: 25, fill: "#8884d8" },
    { name: "Cancelado", value: 10, fill: "#ff8042" },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="50%"
          stroke="white"
        />

        <Pie
          data={data02}
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
