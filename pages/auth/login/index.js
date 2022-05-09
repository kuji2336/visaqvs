import React, { useCallback, useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { phoneValidation } from './helpers';



export default function SignInSide() {
    const lottieIcon = require("../../../src/assets/lotties/register.json")
    const registerIcon = JSON.stringify(lottieIcon)
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    /* Api call */
    const onSubmit = useCallback((data) => {
        event.preventDefault();
        console.log(data);
    }, []);


    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={false}
                md={7}
                sx={{
                    position: 'relative',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: "#f2f5fb",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Box sx={{ display: { xs: 'none', lg: 'block' } }} className={"is-Transformed"}>
                <lottie-player src={registerIcon} background="transparent" speed="1" style={{ width: 500, height: 500 }} loop autoplay></lottie-player>
            </Box>
            <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 11,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#ff4605' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ mt: 3, color: '#222732' }}>
                        ექაუნთში შესვლა
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="ტელეფონის ნომერი"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                            {...register("mobile", {...phoneValidation})}
                            error={errors.mobile ? true : false}
                            helperText={errors.mobile && errors.mobile.message}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="პაროლი"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            {...register("password", {
                                required: { value: true, message: "ველის მითითება სავალდებულოა!" },
                            })}
                            error={errors.password ? true : false}
                            helperText={errors.password && errors.password.message}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={() => setShowPassword((prev) => !prev)}
                                      edge="end"
                                    >
                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                        />
                        <FormControlLabel
                            sx={{ fontSize: '13px' }}
                            control={<Checkbox value="remember" color="primary" />}
                            label={<Typography style={{ marginTop: '6px', fontSize: '12px' }}>დამახსოვრება</Typography>}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, p: 1.5, borderRadius: 50, backgroundColor: "#ff4605" }}
                        >
                            <Typography style={{ marginTop: '6px', fontSize: '14px' }}>შესვლა</Typography>
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/auth/register">
                                 <Typography  sx={{ fontSize: '12px', color: "#222732", cursor:'pointer', textDecoration:'underline'}}>არ გაქვს ექაუნთი? დარეგისტრირდი</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}