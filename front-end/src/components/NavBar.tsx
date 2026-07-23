import { Box, SvgIcon, Stack, Typography } from "@mui/material";
import styles from "./NavBar.module.css";
import Thunder from '../assets/icons/thunder.svg?react'
import Home from '../assets/icons/home.svg?react'
import Business from '../assets/icons/business.svg?react'
import Client from '../assets/icons/client.svg?react'
import Employee from '../assets/icons/employee.svg?react'
import City from '../assets/icons/city.svg?react'
import Order from '../assets/icons/order.svg?react'
import Service from '../assets/icons/service.svg?react'
import { NavItem } from "./NavItem";

export function NavBar() {
  return (
    <Stack className={styles.nav}>
      <Box className={styles.user}>
        <Box className={styles.userIconContainer}>
          <SvgIcon component={Thunder} className={styles.userIcon} />
        </Box>
        <Typography className={styles.userName} style={{ fontWeight: 500 }}>
          Pérez Mudanças
        </Typography>
      </Box>
      <Box className={styles.dashboard}>
        <Typography>
          DASHBOARD
        </Typography>
        <NavItem link='Home'>
          <SvgIcon component={Home}/>
        </NavItem>
      </Box>
      <Box className={styles.cadastro}>
        <Typography>
          CADASTRO
        </Typography>
        <NavItem link='Empresas'>
          <SvgIcon component={Business}/>
        </NavItem>
        <NavItem link='Clientes'>
          <SvgIcon component={Client}/>
        </NavItem>
        <NavItem link='Cidades'>
          <SvgIcon component={City}/>
        </NavItem>
        <NavItem link='Serviços'>
          <SvgIcon component={Service}/>
        </NavItem>
        <NavItem link='Pedidos'>
          <SvgIcon component={Order}/>
        </NavItem>
        <NavItem link='Funcionários'>
          <SvgIcon component={Employee}/>
        </NavItem>
      </Box>
    </Stack>
  )
}