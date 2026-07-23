import styles from './AppLayout.module.css'
import { Box } from '@mui/material'
import { NavBar } from '../components/NavBar.tsx'
import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <Box className={styles.app}>
      <NavBar />
      <Outlet />
    </Box>
  )
}