import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { ICityInvestmentRanking } from '../../types/city-investment-ranking'

const columns: GridColDef<ICityInvestmentRanking>[] = [
  {
    field: 'estado',
    headerName: 'UF',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'nome',
    headerName: 'Cidade',
    flex: 2,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'valor',
    headerName: 'Valor investido',
    flex: 1,
    editable: true,
    headerAlign: 'right',
    align: 'right'
  },
];

type Props = {
  data?: ICityInvestmentRanking[] | [];
}

export function CityInvestmentRanking({ data }: Props) {
  return (
    <DataGrid
      columnHeaderHeight={40}
      sx={{
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: '#AED6FF',
          fontWeight: 700,
          border: 'none'
        },
        border: 0,
        '& .MuiDataGrid-cell': {
          border: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          borderBottom: 'none',
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
        },
      }}
      style={{ width: '100%', borderRadius: '0px 0px 20px 20px' }}
      columns={columns}
      hideFooter={true}
      rows={data}
      getRowId={(row) => row.nome}
    />
  )
}