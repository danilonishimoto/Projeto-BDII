import { PieChart } from "@mui/x-charts"
import type { ICompanyServiceQuantityRanking } from "../../types/company-service-quantity-ranking"

const settings = {
  width: 100,
  height: 100,
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
};

type Props = {
  data: ICompanyServiceQuantityRanking[]
}


export function CompanyServiceQuantityRanking({ data }: Props) {

  const chartData = data.map((item) => {
    return {
      value: item.quantidade,
      label: item.nomeEmpresa
    }
  })
  return (
    <>
      <PieChart
        colors={['#C6F9FD', '#AED6FF', '#73AEFC', '#4D87F9', '#2563EB']}
        series={[{ data: chartData }]}
        slotProps={{
          legend: {
            direction: 'vertical',
            sx: {
              rowGap: '4px',
              '&.MuiChartsLegend-root': {
                marginLeft: 2,
              },
            },
          },
        }}
        sx={{
          "& .MuiChartsLegend-label": {
            fontSize: "8px",
          },
          "& .MuiChartsLegend-mark": {
            width: "4px",
            height: "4px",
          },
          '&.MuiChartsLegend-root': {
            margin: 0,
          },
        }}
        {...settings}
      />
    </>
  )
}