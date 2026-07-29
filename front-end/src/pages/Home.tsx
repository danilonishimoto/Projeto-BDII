import { Box, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import styles from './Home.module.css'
import { HighlightCard } from "../components/HighlightCard";
import City from '../assets/icons/city-blue.svg?react'
import Money from '../assets/icons/money-blue.svg?react'
import Service from '../assets/icons/services-blue.svg?react'

import { CityInvestmentRanking } from "../components/rankings/CityInvestmentRanking";
import { CityServiceQuantityRanking } from "../components/rankings/CityServiceQuantityRanking";
import { CompanyServiceRevenueRanking } from "../components/rankings/CompanyServiceRevenueRanking";
import { CompanyServiceQuantityRanking } from "../components/rankings/CompanyServiceQuantityRanking";
import { CityServiceQuantityHistogram } from "../components/rankings/CityServiceQuantityHistogram";
import { CityInvestmentHistogram } from "../components/rankings/CityInvestmentHistogram";

import { cityInvestmentHistogramFormatter } from "../utils/cityInvestmentHistogramFormatter";

import axiosInstance from "../helper/axiosInstance";

import useAxios from "../actions/request";
import type { ICityInvestmentRanking } from "../types/city-investment-ranking";
import type { ICityServiceQuantityRanking } from "../types/city-service-quantity-ranking";
import type { ICompanyServiceQuantityRanking } from "../types/company-service-quantity-ranking";
import type { ICompanyServiceRevenueRanking } from "../types/company-service-revenue-ranking";
import type { ICityServiceQuantityHistogram } from "../types/city-service-quantity-histogram";
import type { ICityInvestmentHistogram } from "../types/city-investment-histogram";

export function Home() {
  const { data: cityInvestmentRanking } = useAxios<ICityInvestmentRanking[]>({
    axiosInstance,
    url: 'cidade/top-5-valor',
    method: 'GET'
  })

  const { data: cityServiceQuantityRanking } = useAxios<ICityServiceQuantityRanking[]>({
    axiosInstance, 
    url: 'cidade/top-5-quantidade',
    method: 'GET'
  })

  const { data: companyServiceQuantityRanking } = useAxios<ICompanyServiceQuantityRanking[]>({
    axiosInstance,
    url: 'empresa/top-5-quantidade',
    method: 'GET'
  })

  const { data: companyServiceRevenueRanking } = useAxios<ICompanyServiceRevenueRanking[]>({
    axiosInstance,
    url: 'empresa/top-5-valor',
    method: 'GET'
  })

  const { data: cityServiceQuantityHistogram } = useAxios<ICityServiceQuantityHistogram[]>({
    axiosInstance,
    url: 'pedido/histograma/numero-servicos',
    method: 'GET'
  })

  const { data: cityInvestmentHistogram } = useAxios<ICityInvestmentHistogram[]>({
    axiosInstance,
    url: 'pedido/histograma/pagamento-servicos',
    method: 'GET'
  })

  const cityInvestmentHistogramFormatted = cityInvestmentHistogramFormatter(cityInvestmentHistogram || [])

  console.log(cityInvestmentHistogramFormatted)

  return (
    <Box className={styles.home}>
      <Box className={styles.head}>
        <Box className={styles.container} style={{ marginBottom: '20px' }}>
          <Typography style={{ fontSize: '48px', fontWeight: 500 }}>
            Dashboard
          </Typography>
          <Typography>
            Olá, confira abaixo as métricas solicitadas da empresa de mudanças:
          </Typography>
        </Box>
        <Stack direction='row' spacing={2} style={{ marginBottom: '20px' }}>
          <HighlightCard
            label="Maior pagamento recebido:"
            statistic={cityInvestmentRanking?.at(0)?.valor || 0}
          >
            <SvgIcon component={Money} />
          </HighlightCard>
          <HighlightCard
            label="Cidade com mais serviços:"
            statistic={`${cityServiceQuantityRanking?.at(0)?.nome}, ${cityServiceQuantityRanking?.at(0)?.valor}`}
          >
            <SvgIcon component={City} />
          </HighlightCard>
          <HighlightCard
            label="Empresa que mais investiu:"
            statistic={companyServiceRevenueRanking?.at(0)?.nome || ''}
          >
            <SvgIcon component={Service} />
          </HighlightCard>
        </Stack>
      </Box>

      <Box className={styles.statistics}>
        <Grid container className={styles.statisticsFirstRow} spacing={2}>
          <Grid size={6}>
            <Box className={styles.metric} style={{ padding: 0 }}>
              <Typography style={{ padding: '16px 16px 16px 16px' }}>
                Cidades com maior valor investido:
              </Typography>
              <CityInvestmentRanking data={cityInvestmentRanking ?? []} />
            </Box>
          </Grid>
          <Grid size={6}>
            <Stack direction='column' spacing={2} sx={{ height: '100%' }}>
              <Box className={styles.metric}>
                <Typography>
                  Serviços por cidade:
                </Typography>
                <CityServiceQuantityHistogram data={cityServiceQuantityHistogram || []} />
              </Box>
              <Box className={styles.metric}>
                <Typography sx={{ textAlign: 'left' }}>
                  Pagamentos por cidade:
                </Typography>
                <CityInvestmentHistogram data={cityInvestmentHistogramFormatted || []} />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container className={styles.statisticsSecondRow} spacing={2}>
          <Grid size={6}>
            <Box className={styles.metric}>
              <Typography>
                Cidades x serviços:
              </Typography>
              <CityServiceQuantityRanking data={cityServiceQuantityRanking || []} />
            </Box>
          </Grid>
          <Grid size={6}>
            <Stack direction='row' spacing={2} sx={{ height: '100%' }}>
              <Box className={styles.metric} sx={{ gap: 3 }}>
                <Typography>
                  Empresa x valor ganho:
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <CompanyServiceRevenueRanking data={companyServiceRevenueRanking || []} />
                </Box>
              </Box>
              <Box className={styles.metric} sx={{ gap: 4 }}>
                <Typography>
                  Empresas x serviço:
                </Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <CompanyServiceQuantityRanking data={companyServiceQuantityRanking || []} />
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}