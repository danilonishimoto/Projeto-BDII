import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { IEmployee } from "../types/employee";
import { Box, Button, Card, CardContent, CardHeader, Divider, InputLabel, MenuItem, Select, Stack, SvgIcon, TextField, Typography, FormControl } from "@mui/material";
import Employee from '../assets/icons/employee.svg?react'
import styles from './Clients.module.css'
import { EMPLOYEE_TYPES } from "../types/enums/employeeType";

export function Employees() {
  const navigate = useNavigate()

  const [onSend, setOnSend] = useState(false)

  const methods = useForm<IEmployee>({
    mode: "all",
    defaultValues: {
      CPFFunc: '',
      RGFunc: '',
      enderecoFunc: '',
      nomeComplFunc: '',
      telefoneCont: 0,
      tipoFunc: '',
      salario: 0
    },
  });

  const { handleSubmit, control } = methods;

  const handleCreateAndSend = async (data: IEmployee) => {
    setOnSend(true)
    navigate('/')
    console.log(data)
  }

  return (
    <>
      <Box className={styles.clients}>
        <Box className={styles.head}>
          <Box className={styles.container} style={{ marginBottom: '20px' }}>
            <Typography style={{ fontSize: '48px', fontWeight: 500 }}>
              Cadastro
            </Typography>
          </Box>
        </Box>
        <Card className={styles.card} sx={{ borderRadius: '20px', boxShadow: 'none' }}>
          <CardHeader
            title={
              <Stack direction='row' spacing={2} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <SvgIcon component={Employee} sx={{
                  width: 32,
                  height: 32,
                }} />
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                  Funcionários
                </Typography>
              </Stack>
            }
            subheader={
              <Typography sx={{ textAlign: 'left' }}>
                Preencha os campos abaixo para cadastrar um funcionário:
              </Typography>}
            sx={{ textAlign: 'center', fontWeight: 700 }}
          />
          <Divider />
          <CardContent sx={{ marginTop: 2 }}>
            <form onSubmit={handleSubmit(handleCreateAndSend)}>
              <Stack spacing={3}>
                <Controller
                  name='CPFFunc'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='CPF'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='RGFunc'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='Rg'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='enderecoFunc'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='Endereço'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='nomeComplFunc'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='Nome completo'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='telefoneCont'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='Telefone'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='nomeComplFunc'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='Nome completo'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='salario'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <TextField
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                        label='Salário'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='tipoFunc'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="employee-type-label">
                          Tipo de funcionário
                        </InputLabel>
                        <Select
                          MenuProps={{
                            slotProps: {
                              paper: {
                                sx: {
                                  ml: 40,
                                },
                              },
                            },
                          }}
                          labelId="employee-type-label"
                          label='Tipo de funcionário'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {EMPLOYEE_TYPES.map((e, index) => {
                            return (
                              <MenuItem key={index} value={e}>{e}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>
                <Button
                  variant='contained'
                  sx={{
                    width: 'fit-content',
                    alignSelf: 'flex-end',
                    padding: 2,
                    borderRadius: '6px',
                    marginTop: 4,
                    backgroundColor: '#4D87F9'
                  }}
                  disabled={onSend}
                  type="submit"
                >
                  Enviar
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}