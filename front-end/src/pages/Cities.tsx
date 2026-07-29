import { Box, Button, Card, CardContent, CardHeader, Divider, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import styles from './Cities.module.css'

import City from '../assets/icons/city.svg?react'
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import type { ICity } from "../types/city";
import { useNavigate } from "react-router";
import { request } from "../actions/request";
import axiosInstance from "../helper/axiosInstance";

export function Cities() {
  const navigate = useNavigate()

  const [onSend, setOnSend] = useState(false)

  const methods = useForm<ICity>({
    mode: "all",
    defaultValues: {
      nome: '',
      estado: '',
    },
  });

  const { handleSubmit, control } = methods;

  const handleCreateAndSend = async (cidade: ICity) => {
    const { data, error, success } = await request<ICity>({
      axiosInstance,
      url: "/cidade",
      method: "POST",
      payload: cidade,
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
      <Box className={styles.cities}>
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
                <SvgIcon component={City} sx={{
                  width: 32,
                  height: 32,
                }} />
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                  Cidades
                </Typography>
              </Stack>
            }
            subheader={
              <Typography sx={{ textAlign: 'left' }}>
                Preencha os campos abaixo para cadastrar uma cidade:
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
                  name='estado'
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
                        label='Estado'
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