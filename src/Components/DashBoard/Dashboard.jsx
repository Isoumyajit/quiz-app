import React from 'react'
import { Grid } from '@mui/material'
export const Dashboard = (props) => {
  return (
      <div>
          <Grid container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}>
              <Grid item xs={1} >{props.children}</Grid>
              
          </Grid>
    </div>
  )
}
