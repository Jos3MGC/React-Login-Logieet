import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import { data } from '../constants/data';
import Box from '../components/box/Box';
//import { colors } from '../constants/colors';

//SE VAN A PASAR LOS DATOS COMO PROPS
//DE ESTA FORMA SE REUSA EL BARCHART
function Charts() {
    const [userData, setUserData] = useState({
        //DATOS MAPEADOS DENTRO DEL DATA DADO
        labels: data.map((item) => item.year),
        datasets: [
            {
                label: "Users Gained",
                data: data.map((item) => item.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
            },
        ],
    });

    return (
        <div>
            <Box>
                <Bar data={userData} />;
            </Box>
        </div>
    )
}

export default Charts;