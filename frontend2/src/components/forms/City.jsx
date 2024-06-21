import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export default function City(props) {
  const { label, name, control } = props;

  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.7rem'
      }}
    >
      <Box sx={{ width: '50ch' }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: 'white' }}
          >
            {label}
          </InputLabel>
          <Controller
            name = {name}
            control = {control}
            render={({
              field: {onChange, value},
              fieldState: {error},
              formState,
            }) => (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={onChange}
                sx={{
                  color: 'white', // Text color
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color when focused
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white', // Icon color
                  }
                }}
              >
                <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"Pune"}>Pune</MenuItem>
                <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                <MenuItem value={"Jaipur"}>Jaipur</MenuItem>
              </Select>
              )}
            />
        </FormControl>
      </Box>
    </Box>
  );
}