import { PieChart } from "@mui/x-charts"
import type { ICompanyServiceQuantityRanking } from "../../types/company-service-quantity-ranking"

const settings = {
  width: 160,
  height: 160,
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
              rowGap: '12px',
              '&.MuiChartsLegend-root': {
                marginLeft: 2,
              },
            },
          },
        }}
        sx={{
          "& .MuiChartsLegend-label": {
            fontSize: "14px",
            textAlign: 'left'
          },
          "& .MuiChartsLegend-mark": {
            width: "6px",
            height: "6px",
          },
        }}
        {...settings}
      />
    </>
  )
}