'use client'
import React from 'react'
import { Autocomplete, TextField, Button, Chip } from '@mui/material'

export const metadata = {
  title: 'This is Page'
}

export default function Posts() {
  const [vendorName, setVendorName] = React.useState<string[]>([])
  const vendorOptions = ['a', 'b']
  const onReset = () => {
    setVendorName([])
  }
  return (
    <>
      <Autocomplete
        limitTags={2}
        multiple
        disableCloseOnSelect
        fullWidth
        size="small"
        getOptionLabel={(option) => option}
        value={vendorName}
        options={vendorOptions}
        onChange={(event, newValue) => {
          setVendorName(newValue)
        }}
        renderInput={(params) => {
          return <TextField label="廠商名稱" {...params} />
        }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          )
        }}
      />
      <Button onClick={onReset}>Reset</Button>
    </>
  )
}
