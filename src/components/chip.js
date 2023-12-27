import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function BasicChips ({ label, icon }) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip color="warning" label={label} icon={icon} />
  </Stack>
)
}
 