import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { IOrder } from "../types/order";
import type { IRequest } from "../types/request";
import { Box, Button, Card, CardContent, CardHeader, Divider, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import OrderSvg from '../assets/icons/order.svg?react'
import styles from './Clients.module.css'
import { customAlphabet } from "nanoid";

type ICreateOrder = {
  pedido: IOrder;
  solicitam: IRequest
}

export function Orders() {
  const numericId = customAlphabet('0123456789', 10);
  const id = numericId()
  const pedidoId = numericId()
  const empresaId = numericId()
  const clienteId = numericId()

  const navigate = useNavigate()

  const [onSend, setOnSend] = useState(false)

  const methods = useForm<ICreateOrder>({
    mode: "all",
    defaultValues: {
      pedido: {
        id: Number(pedidoId),
        empresaId: Number(empresaId),
        clienteId: Number(clienteId),
        cidadeNomePartida: '',
        cidadeNomeDestino: '',
        dataSolicitacao: new Date(),
        aceite: 'Pendente',
        enderecoPartida: '',
        enderecoDestino: ''   
      },
      solicitam: {
        id: Number(id),
        servicoNome: '',
        funcionarioCPF: '',
        pedidoId: Number(pedidoId),
        tempoDuracao: 0,
        carga: 0,
      },
    },
  });

  const { handleSubmit, control } = methods;

  const handleCreateAndSend = async (data: ICreateOrder) => {
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
                <SvgIcon component={OrderSvg} sx={{
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
                  name='pedido.cidadeNomePartida'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      label='Cidade de partida'
                      {...field}
                      inputRef={field.ref}
                    />
                  )}
                />

                <Controller
                  name='pedido.enderecoPartida'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      label='Endereço de partida'
                      {...field}
                      inputRef={field.ref}
                    />
                  )}
                />

                <Controller
                  name='pedido.cidadeNomeDestino'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      label='Cidade de destino'
                      {...field}
                      inputRef={field.ref}
                    />
                  )}
                />

                <Controller
                  name='pedido.enderecoDestino'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      label='Endereço de destino'
                      {...field}
                      inputRef={field.ref}
                    />
                  )}
                />

                <Controller
                  name='solicitam.funcionarioCPF'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      label='CPF do funcionário'
                      {...field}
                      inputRef={field.ref}
                    />
                  )}
                />

                <Controller
                  name='solicitam.tempoDuracao'
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
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
                      type='number'
                      label='Carga'
                      {...field}
                      inputRef={field.ref}
                    />
                  )}
                />

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