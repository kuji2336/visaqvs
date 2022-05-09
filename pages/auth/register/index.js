import React, { useCallback, useState } from "react";
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
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import { passwordValidation, phoneValidation } from "../login/helpers";



const registerIntention = [
    {value:1, label:'მინდა ვიყიდო'},
    {value:2, label:'მინდა გავყიდო'},
    {value:3, label:'მინდა გავცვალო'},
    {value:4, label:'სხვა'}
]


export default function SignInSide() {
    const lottieIcon = require("../../../src/assets/lotties/register2.json")
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
                        my: 2,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#ff4605' }}>
                        <HowToRegIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ mt: 3, color: '#222732' }}>
                        რეგისტრაცია
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="სახელი"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            {...register("name", {
                                required: { value: true, message: "ველის მითითება სავალდებულოა!" },
                            })}
                            error={errors.name ? true : false}
                            helperText={errors.name && errors.name.message}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="surname"
                            label="გვარი"
                            name="surname"
                            autoComplete="surname"
                            autoFocus
                            {...register("surname", {
                                required: { value: true, message: "ველის მითითება სავალდებულოა!" },
                            })}
                            error={errors.surname ? true : false}
                            helperText={errors.surname && errors.surname.message}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="ტელეფონის ნომერი"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                            {...register("mobile", { ...phoneValidation })}
                            error={errors.mobile ? true : false}
                            helperText={errors.mobile && errors.mobile.message}
                        />
                        <InputLabel id="demo-select-small" sx={{ fontSize: "11px", mt:2}}>რეგისტრაციის მიზანი:</InputLabel>
                         <Select 
                          defaultValue={registerIntention[0].value}
                          sx={{ fontSize: "12px", width: "100%", my:1}}
                          labelId="demo-select-small"
                          id="demo-select-small"
                          label={'რეგისტრაციის მიზანი'}
                          {...register("intention", {
                            required: { value: true, message: "ველის მითითება სავალდებულოა!" },
                          })}
                          error={errors.intention ? true : false}
                        >
                          {registerIntention.map((select) => (
                            <MenuItem
                              key={select.value}
                              sx={{ fontSize: "12px" }}
                              value={select.value}
                            >
                              {select.label}
                            </MenuItem>
                          ))}
                        </Select>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="პაროლი"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            {...register("password", {...passwordValidation})}
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
                                <Link href="/auth/login">
                                <Typography  sx={{ fontSize: '12px', color: "#222732", cursor:'pointer', textDecoration:'underline'}}>გაქვს ექაუნთი? სისტემაში შესვლა</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}