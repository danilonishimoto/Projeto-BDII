import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { IClient } from "../types/client";
import { Box, Button, Card, CardContent, CardHeader, Divider, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import Client from '../assets/icons/client.svg?react'
import styles from './Clients.module.css'
import { customAlphabet } from 'nanoid';

const numericId = customAlphabet('0123456789', 10);
const id = numericId()

export function Clients() {
  const navigate = useNavigate()

  const [onSend, setOnSend] = useState(false)

  const methods = useForm<IClient>({
    mode: "all",
    defaultValues: {
      codCli: Number(id),
      nomeCompleto: '',
      cpf: '',
      rg: '',
      enderecoCliente: ''
    },
  });

  const { handleSubmit, control } = methods;

  const handleCreateAndSend = async (data: IClient) => {
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
                <SvgIcon component={Client} sx={{
                  width: 32,
                  height: 32,
                }} />
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                  Clientes
                </Typography>
              </Stack>
            }
            subheader={
              <Typography sx={{ textAlign: 'left' }}>
                Preencha os campos abaixo para cadastrar um cliente:
              </Typography>}
            sx={{ textAlign: 'center', fontWeight: 700 }}
          />
          <Divider />
          <CardContent sx={{ marginTop: 2 }}>
            <form onSubmit={handleSubmit(handleCreateAndSend)}>
              <Stack spacing={3}>
                <Controller
                  name='codCli'
                  disabled
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
                        label='Código cliente'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='nomeCompleto'
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
                  name='cpf'
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
                  name='rg'
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
                        label='RG'
                        {...field}
                        inputRef={field.ref}
                      />
                    )
                  }}
                >
                </Controller>

                <Controller
                  name='enderecoCliente'
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
                        label='Endereço cliente'
                        {...field}
                        inputRef={field.ref}
                      />
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