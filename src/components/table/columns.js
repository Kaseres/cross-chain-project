export const COLUMNS = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Firstname',
        Footer: 'Firstname',
        accessor: 'first_name'
    },
    {
        Header: 'Lastname',
        Footer: 'Lastname',
        accessor: 'last_name'
    },
    // {
    //     Header: 'Email',
    //     Footer: 'Email',
    //     accessor: 'email'
    // },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age'
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
    }
]

export const GROUPED_COLUMN = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'Firstname',
                Footer: 'Firstname',
                accessor: 'first_name'
            },
            {
                Header: 'Lastname',
                Footer: 'Lastname',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Age',
                Footer: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            }
        ]
    }
]