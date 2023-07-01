import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Office {
    id: number;
    name: string;
}

interface OfficeDropdownProps {
    onChange: (selectedOffice: number) => void;
}

const OfficeDropdown: React.FC<OfficeDropdownProps> = ({ onChange }) => {
    const [offices, setOffices] = useState<Office[]>([]);

    useEffect(() => {
        // Fetch offices from API and set the offices state
        fetch('http://0.0.0.0:8000/org/offices/')
            .then(response => response.json())
            .then((data: Office[]) => {
              setOffices(data)
            });
    }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedOffice = Number(event.target.value);
    if (!isNaN(selectedOffice)) {
      onChange(selectedOffice);
    }
  };

  return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Office</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"office"}
              label="Office"
              onChange={handleChange}
          >
            <MenuItem value={1}>Ten</MenuItem>
            <MenuItem value={2}>Twenty</MenuItem>
            <MenuItem value={3}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
  );
};

export default OfficeDropdown;
