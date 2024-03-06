import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10 },
            { id: 1, value: 15 },
            { id: 2, value: 20 },
          ],
        },
      ]}
      width={250}
      height={130}
    />
  );
}
