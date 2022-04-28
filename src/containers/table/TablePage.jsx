import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import mockData from '../../components/table/data/mockdata.json';
import { COLUMNS } from '../../components/table/columns';

const TablePage = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mockData, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        pageOptions,
        canPreviousPage,
        canNextPage,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState: { pageSize: 25 }
    }, useSortBy, usePagination)

    const { pageIndex, pageSize } = state

    return (
        <div className="pt-10 pb-10">
            <div className="md:flex justify-center items-center pb-10">
                <table {...getTableProps()} className="w-[1500px]">
                    <thead className="bg-orange-400 border-b-2 border-gray-200 text-white text-center">
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className='p-3 text-sm font-semibold tracking-wide border-2'>
                                                {column.render('Header')}
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map(row => {
                                prepareRow(row)
                                return (
                                    <tr className="bg-gray-50 hover:bg-gray-100 border-b-2" {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return <td className="p-3 text-sm text-gray-700 border-2 border-primary-300" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="md:flex justify-center items-center">
                <span className='mr-5'>
                    Page : {' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mr-1">
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mr-1">
                    Previous
                </button>
                <button onClick={() => nextPage()} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-1">
                    Next
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-1">
                    {'>>'}
                </button>
                <span className='ml-5'>
                    Show :
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="form-select appearance-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded ml-2">
                        {
                            [10, 25, 50, 100].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))
                        }
                    </select>
                </span>
            </div>
        </div>
    )
}

export default TablePage