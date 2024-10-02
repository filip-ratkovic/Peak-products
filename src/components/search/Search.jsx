import React, { useState } from 'react'
import "./search.css"
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";


const Search = () => {
    const [input, setInput] = useState('')

    const handleSearch = (e) => {
        setInput(e.target.value);
      };
  return (
    <main className='search-main'>
         <TextField
                onChange={handleSearch}
                id="input-with-icon-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="small"
                style={{ borderRadius:"8px"}}
                labelWidth={60}
              />
    </main>
  )
}

export default Search