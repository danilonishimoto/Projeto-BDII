import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { IOrder } from "../types/order";
import type { IRequest } from "../types/request";
import { Box, Button, Card, CardContent, CardHeader, Divider, FormControl, InputLabel, MenuItem, Select, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import OrderSvg from '../assets/icons/order.svg?react'
import styles from './Clients.module.css'
import useAxios, { request } from "../actions/request";
import axiosInstance from "../helper/axiosInstance";
import type { ICompany } from "../types/company";
import type { IClient } from "../types/client";
import type { IEmployee } from "../types/employee";
import type { ICity } from "../types/city";
import type { IService } from "../types/service";

type ICreateOrder = {
  pedido: IOrder;
  solicitam: IRequest
}

export function Orders() {
  const navigate = useNavigate()

  const [onSend, setOnSend] = useState(false)

  const methods = useForm<ICreateOrder>({
    mode: "all",
    defaultValues: {
      pedido: {
        empresaId: 0,
        clienteId: 0,
        cidadeNomePartida: '',
        cidadeNomeDestino: '',
        dataSolicitacao: new Date(),
        enderecoPartida: '',
        enderecoDestino: ''
      },
      solicitam: {
        servicoNome: '',
        funcionarioCpf: '',
        tempoDuracao: 0,
        carga: 0,
      },
    },
  });

  const { handleSubmit, control } = methods;

  const { data: empresas } = useAxios<ICompany[]>({
      axiosInstance,
      url: 'empresa',
      method: 'GET'
    })

    const { data: clientes } = useAxios<IClient[]>({
      axiosInstance,
      url: 'cliente',
      method: 'GET'
    })

    const { data: funcionarios } = useAxios<IEmployee[]>({
      axiosInstance,
      url: 'funcionario',
      method: 'GET'
    })

    const { data: cidades } = useAxios<ICity[]>({
      axiosInstance,
      url: 'cidade',
      method: 'GET'
    })

    const { data: servicos } = useAxios<IService[]>({
      axiosInstance,
      url: 'servico',
      method: 'GET'
    })

  const handleCreateAndSend = async (payload: ICreateOrder) => {
    const { data: pedidoResponse, error, success } = await request<IOrder>({
      axiosInstance,
      url: "/pedido",
      method: "POST",
      payload: payload.pedido,
    });
    if (success && pedidoResponse?.id) {
      const { data: solicitamResponse, error, success } = await request<IRequest>({
        axiosInstance,
        url: "/solicitam",
        method: "POST",
        payload: {
          ...payload.solicitam,
          pedidoId: pedidoResponse.id
        },
      })
      if (success) {
        console.log(solicitamResponse);
        setOnSend(true);
        navigate("/");
      } else {
        console.log(error)
      }
    } else {
      console.log(error);
    }
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
                <SvgIcon component={OrderSvg} sx={{
                  width: 32,
                  height: 32,
                }} />
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                  Pedidos
                </Typography>
              </Stack>
            }
            subheader={
              <Typography sx={{ textAlign: 'left' }}>
                Preencha os campos abaixo para cadastrar um pedido:
              </Typography>}
            sx={{ textAlign: 'center', fontWeight: 700 }}
          />
          <Divider />
          <CardContent sx={{ marginTop: 2 }}>
            <form onSubmit={handleSubmit(handleCreateAndSend)}>
              <Stack spacing={3}>
                <Controller
                  name='pedido.empresaId'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Empresa
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
                          label='Empresa'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {empresas?.map((e, index) => {
                            return (
                              <MenuItem key={index} value={e.id}>{e.nome}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='pedido.clienteId'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Cliente
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
                          label='Cliente'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {clientes?.map((c, index) => {
                            return (
                              <MenuItem key={index} value={c.id}>{c.nome}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>
                <Stack spacing={3} direction='row'>

                  <Controller
                  name='pedido.cidadeNomePartida'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Cidade de partida
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
                          label='Cidade de partida'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {cidades?.map((c, index) => {
                            return (
                              <MenuItem key={index} value={c.nome}>{c.nome}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>

                  <Controller
                    name='pedido.enderecoPartida'
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <TextField
                        sx={{ width: '100%' }}
                        label='Endereço de partida'
                        {...field}
                        inputRef={field.ref}
                      />
                    )}
                  />
                </Stack>

                <Stack spacing={3} direction='row'>
                  <Controller
                  name='pedido.cidadeNomeDestino'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Cidade de destino
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
                          label='Cidade de destino'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {cidades?.map((c, index) => {
                            return (
                              <MenuItem key={index} value={c.nome}>{c.nome}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>

                  <Controller
                    name='pedido.enderecoDestino'
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <TextField
                        sx={{ width: '100%' }}
                        label='Endereço de destino'
                        {...field}
                        inputRef={field.ref}
                      />
                    )}
                  />
                </Stack>

                <Controller
                  name='solicitam.servicoNome'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Serviço nome
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
                          label='Serviço nome'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {servicos?.map((s, index) => {
                            return (
                              <MenuItem key={index} value={s.nome}>{s.nome}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='solicitam.funcionarioCpf'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => {
                    return (
                      <FormControl fullWidth>
                        <InputLabel shrink id="service-type-label">
                          Funcionário
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
                          label='Funcionário'
                          sx={{ textAlign: 'left' }}
                          {...field}
                          inputRef={field.ref}
                        >
                          <MenuItem value=''>Selecione um tipo</MenuItem>
                          {funcionarios?.map((f, index) => {
                            return (
                              <MenuItem key={index} value={f.cpf}>{f.nome}</MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
                    )
                  }}
                >
                </Controller>

                <Stack spacing={3} direction='row'>
                  <Controller
                    name='solicitam.tempoDuracao'
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <TextField
                        sx={{ width: '100%' }}
                        type='number'
                        label='Tempo de duração'
                        {...field}
                        inputRef={field.ref}
                      />
                    )}
                  />

                  <Controller
                    name='solicitam.carga'
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <TextField
                        sx={{ width: '100%' }}
                        type='number'
                        label='Carga'
                        {...field}
                        inputRef={field.ref}
                      />
                    )}
                  />
                </Stack>

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