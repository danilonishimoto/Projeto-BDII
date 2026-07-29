import { BarChart } from "@mui/x-charts";
import type { ICityServiceQuantityRanking } from "../../types/city-service-quantity-ranking";

const chartSetting = {
  height: 200,
  width: 600,
  margin: { left: 20 },
};

type Props = {
  data?: ICityServiceQuantityRanking[];
}

export function CityServiceQuantityRanking({ data }: Props) {
  return (
    <>
      <BarChart 
        dataset={data}
        yAxis={[{ scaleType: 'band', dataKey: 'nome', width: 100 }]}
        series={[{ dataKey: 'valor' }]}
        layout="horizontal"
        {...chartSetting}
      />
    </>
  )
}