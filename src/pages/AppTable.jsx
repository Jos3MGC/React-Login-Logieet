import React from "react";
import Tables from "../components/TableInfo/Tables";
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppTable = () => {
    return (
        <Container>
            <div className="title mb">
                Tabla de infomación:
            </div>
            <Tables />
            <Box py="12px" />
        </Container>
    )
}

export default AppTable
