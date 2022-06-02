import React from "react";
import Box from "../components/box/Box";
import { useTheme, styled } from "@mui/system";
import DoughnutChart from "../components/CircularChart/doughnutChart";

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

export default function Graph() {

    const theme = useTheme()

    return(
        <Container>
            <Box>
                <DoughnutChart 
                  height="350px"
                  
                />
            </Box>
        </Container>
    )
}