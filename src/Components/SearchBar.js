import React, { useState } from 'react';
import './SearchBar.css'

// import SearchIcon from '@mui/icons-material/Search';

// import SearchIcon from '@material-ui/icons/Search';



const SearchBar = ({placeholder, data}) => {
    console.log(data)

    const [filteredData, setFilteredData] = useState([]);
  return (
    <div className='search'>
        <div className='searchInput'>
            <input  className="inputArea" type="text" placeholder={placeholder} />
            {/* <div className="searchIcon"><SearchIcon /></div> */}
        </div>
        <div className='results'>
            {/* <ul>
                {data.map(x => <li>{x.display_groups.display_name}</li>)}
            </ul> */}
            {data.map((value, index) => {
                return (
                    <div>{value.dispay_groups.display_name}</div>
                )
            })}
        </div>
        

    </div>
  )
}

export default SearchBar