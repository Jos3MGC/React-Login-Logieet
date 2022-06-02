import images from "./images"

const data = {
    user: {
        name: 'GEM',
        img: images.avt
    },
    summary: [
        {
            title: 'Ventas',
            subtitle: 'Ventas del día',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Servicios',
            subtitle: 'Servicios del día',
            value: '3000',
            percent: 49
        },
        {
            title: 'Ingresos',
            subtitle: 'Ingresos del día',
            value: '$678',
            percent: 38
        },
        {
            title: 'Objetivos del día',
            subtitle: 'Objetivos del día concluidos',
            value: '2345',
            percent: 55
        }
    ],
    columns: [
        { id: 'id', label: 'ID', minWidth: 150 },
        { id: 'lastName', label: 'Apellido', minWidth: 100 },
        { id: 'firstName', label: 'Nombre', minWidth: 100 },
        { id: 'age', label: 'Edad', minWidth: 100 },
    ],
    rows: [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ],
    revenueSummary: {
        title: 'Ingresos',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Ordenes'
        },
        {
            value: '9.876K',
            title: 'Clientes'
        },
        {
            value: '1.234K',
            title: 'Productos'
        },
        {
            value: '$5678',
            title: 'Ganancias'
        }
    ],
    revenueByChannel: [
        {
            title: 'Directo',
            value: 70
        },
        {
            title: 'Busquedas externas',
            value: 40
        },
        {
            title: 'Remisiones',
            value: 60
        },
        {
            title: 'Sociales',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data