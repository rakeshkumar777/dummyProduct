import React, { useEffect, useState } from 'react'
import './Filter.css'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const Filter = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([])
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const logeddata = localStorage.getItem("loggedin")
    console.log(logeddata, 'logeddata')
    console.log(productList, 'productList')

    const columns1 = [
        {
          selector: row => {
            return (
              <>
                <div style={{cursor:"pointer"}} onClick={()=>navigate(`/singleProduct/${row?.id}`)} className='productViewCard mb-4'  >
                  <img style={{width:"150px"}} src={row.image} alt="image" className='img-fluid productImage_' />
                  <div className='productDetials'>
                    <div className='productViewHead'>
                      <h1 className='productHeading'>{row?.name} </h1>
                    </div>
                    <ul className='productCategory'>
                      <li>
                        <p className='subtextSmall_'>Category: </p>
                        <p className='subtextSmall_'>{row?.category}</p>
                      </li>
                      <li>
                        <p className='subtextSmall_'>Title: </p>
                        <p className='subtextSmall_'>{row?.title}</p>
                      </li>
                      <li>
                        <p className='subtextSmall_'>Price: </p>
                        <p className='subtextSmall_'>${row?.price}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          },
        },
      ];
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      const handleRowsPerPageChange = (currentRowsPerPage, currentPage) => {
        setPerPage(currentRowsPerPage);
        setCurrentPage(1);
      };
    
      const paginationOptions = {
        rowsPerPageText: 'Rows per page:',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
      };

    const getAllProducts = () => {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products?limit=${perPage}`)
            .then(res => {
                setProductList(res?.data)
                setLoading(false)
            })
            .catch(()=>{
                setLoading(false)
            })
    }

    useEffect(() => {
        getAllProducts()
    }, [currentPage, perPage])

    return (
        <>
            <div className='main'>
                <div className='row'>
                    <DataTable
                        className='columsGrid'
                        columns={columns1}
                        data={productList}
                        progressPending={loading}
                        pagination
                        paginationServer
                        paginationTotalRows={totalRows}
                        paginationPerPage={perPage}
                        paginationComponentOptions={paginationOptions}
                        onChangePage={handlePageChange}
                        onChangeRowsPerPage={handleRowsPerPageChange}
                    />
                </div>
            </div>




        </>
    )
}

export default Filter
