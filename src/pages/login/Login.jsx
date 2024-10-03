import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { store } from '../../store/store';
import { authSlice } from '../../store/authSlice';
import { useSelector } from 'react-redux';
import Layout from '../../containers/Layout';


const Login = () => {
 const [loginData, setLoginData] = useState('')
 const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate()
 const authState = useSelector((state) => state.auth);
 const accessToken = authState.token

 const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const loginSchema = yup.object({
    username: yup
      .string()
      .required("username je obavezno polje, unesite username"),
    password: yup
      .string()
      .required("Sifra je obavezno polje, unesite sifru")
      .min(6, "Sifra mora da ima najmanje 6 karaktera")
      .max(20, "Sifra mora da ima najvise 20 karaktera"),
  });
 const fetchLoginData = (username, password) => {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
  .then(res => res.json())
  .then(res=> {
    store.dispatch(
      authSlice.actions.setData({
        id: 12,
        email: res.email,
        token: res.accessToken,
        username:res.username,
        firstName:res.firstName,
        lastName:res.lastName,
      })
    );
    localStorage.setItem("userAuth", JSON.stringify({
      id: res.id,
      email: res.email,
      token: res.accessToken,
      username:res.username,
      firstName:res.firstName,
      lastName:res.lastName,}))
  });
 }


const submitLogin = async (values) => {
  try {
     fetchLoginData(values.username, values.password)
  

        navigate("/");
  } catch (error) {
    console.log(error)
  }
};

if(accessToken) {
  navigate("/")
}


  return (
   <Layout>
     <div>
       <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          submitLogin(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBlock:"50px"
            }}
          >
            <Typography variant="h3" gutterBottom mb={5}>
              Uloguj se
            </Typography>
            <Box my={1} className="login-box">
              <TextField
                variant="standard"
                label="Username"
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className="login-input"
                sx={{
                  "& label": {
                    color: "grey",
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                      color: 'grey'
                  },
                }}
              />
              <Typography variant="body2" color="error">
                {errors.username && touched.username && `* ${errors.username}`}
              </Typography>
            </Box>
            <Box my={1} className="login-box">
              <FormControl variant="standard" className="login-input" sx={{  "& label": {
                    color: "grey",
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                      color: 'grey'
                  },}}>
                <InputLabel
                  htmlFor="standard-adornment-password"
                  sx={{ color: "grey"}}
                >
                  Šifra
                </InputLabel>
                <Input
                  className="login-input"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    "& label": {
                      color: "grey",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: 'grey'
                  },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{ color: "grey" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Typography variant="body2" color="error">
                {errors.password && touched.password && `* ${errors.password}`}
              </Typography>

            
            </Box>
            <Box
              mt={5}
              sx={{
                display: "flex",
                width: "410px",
                maxWidth:"100%",
                flexDirection:"column"
              }}
            >
              <Button
                onClick={handleSubmit}
                type="button"
                variant="contained"
                style={{ width: "100%", marginBottom: "15px"}}
              >
                Uloguj se
              </Button>

            
            </Box>
           
            <Link
              to={"/registracija"}
            >
              Nemas nalog? <span>Registruj se</span>
            </Link>
          </Container>
        )}
      </Formik>
    </div>
   </Layout>
  )
}

export default Login