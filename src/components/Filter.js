import React,{useState} from 'react'
import './Filter.css'

const Filter = () => {
    const[search,setSearch]=useState("")
    const countries = ["india", "uk", "usa", "germany","japan",'rushia','china','pakistan','bangladesh']
  const filteredCountries=countries.filter((item)=>{
    if(search===""){
        return item
    }else if(item.toLowerCase().includes(search.toLowerCase())){
        return item
    }
  })
 
    return (
        <>
            <div className='main'>
                <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='Search...' />
                {filteredCountries.map((item,index)=>{
                   return <h3 key={index}>{item}</h3>
                })}
              
            </div>




        </>
    )
}

export default Filter
