import { Box, Button, Card, CardContent, CardHeader, Divider, FormControl, InputLabel, MenuItem, Select, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import styles from './Services.module.css'

import Service from '../assets/icons/service.svg?react'
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import type { IService } from "../types/service";
import { useNavigate } from "react-router";
import { SERVICE_TYPES } from "../types/enums/serviceType";
import { request } from "../actions/request";
import axiosInstance from "../helper/axiosInstance";

export function Services() {
  const navigate = useNavigate()

  const [onSend, setOnSend] = useState(false)

  const methods = useForm<IService>({
    mode: "all",
    defaultValues: {
    nome: '',
    tipo: '',
  },
  });

  const { handleSubmit, control } = methods;

  const handleCreateAndSend = async (servico: IService) => {
      const { data, error, success } = await request<IService>({
        axiosInstance,
        url: "/servico",
        method: "POST",
        payload: servico,
      });
      if (success) {
        console.log(data);
        setOnSend(true);
        navigate("/");
      } else {
        console.log(error);
      }
    }

  return (
    <>
      <Box className={styles.services}>
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
                <SvgIcon component={Service} sx={{
                  width: 32,
                  height: 32,
                }} />
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                  Serviços
                </Typography>
              </Stack>
            }
            subheader={
              <Typography sx={{ textAlign: 'left' }}>
                Preencha os campos abaixo para cadastrar um serviço:
              </Typography>}
            sx={{ textAlign: 'center', fontWeight: 700 }}
          />
          <Divider />
          <CardContent sx={{ marginTop: 2 }}>
            <form onSubmit={handleSubmit(handleCreateAndSend)}>
              <Stack spacing={3}>
                <Controller
                  name='nome'
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
                        label='Nome'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='tipo'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Tipo de serviço
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
                          labelId="service-type-label"
                          label='Tipo de serviço'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {SERVICE_TYPES.map((s, index) => {
                            return (
                              <MenuItem key={index} value={s}>{s}</MenuItem>
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