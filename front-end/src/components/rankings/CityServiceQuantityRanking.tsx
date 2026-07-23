import { BarChart } from "@mui/x-charts";
import type { ICityServiceQuantityRanking } from "../../types/city-service-quantity-ranking";

const chartSetting = {
  // xAxis: [
  //   {
  //     label: 'Quantidade de serviços',
  //   },
  // ],
  height: 150,
  width: 500,
  margin: { left: 50 },
};

type Props = {
  data: ICityServiceQuantityRanking[];
}

export function CityServiceQuantityRanking({ data }: Props) {
  return (
    <>
      <BarChart 
        dataset={data}
        yAxis={[{ scaleType: 'band', dataKey: 'nomeCidade' }]}
        series={[{ dataKey: 'quantidade' }]}
        layout="horizontal"
        {...chartSetting}
      />
    </>
  )
}