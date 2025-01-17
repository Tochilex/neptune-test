import React from "react";

import { EmployeeFormValues } from "@/app/(pages)/employees/addEmployees/page";
import {
  Box,
  //Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

interface EmployeeDetailsProps {
  formValues: EmployeeFormValues;
  handleChange: (
    name: keyof EmployeeFormValues
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryChange: (event: SelectChangeEvent<string>) => void;
}

const EmployeeDetails = ({
  formValues,
  handleChange,
  handleCountryChange,
}: EmployeeDetailsProps) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          value={formValues.firstName}
          onChange={handleChange("firstName")}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={formValues.lastName}
          onChange={handleChange("lastName")}
        />
      </Stack>
      <TextField
        id="otherNames"
        label="Other Names"
        variant="outlined"
        fullWidth
        value={formValues.otherNames}
        onChange={handleChange("otherNames")}
        sx={{ mt: 2 }}
      />
      <TextField
        id="phoneNumber"
        label="Phone Number"
        variant="outlined"
        fullWidth
        value={formValues.phoneNumber}
        onChange={handleChange("phoneNumber")}
        sx={{ mt: 2 }}
      />
      <TextField
        id="workEmail"
        label="Work Email"
        variant="outlined"
        fullWidth
        type="email"
        value={formValues.workEmail}
        onChange={handleChange("workEmail")}
        sx={{ mt: 2 }}
      />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            value={formValues.country}
            label="Country"
            onChange={(event) => handleCountryChange(event)}
          >
            {/* Add country options here */}

            <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
            <MenuItem value={"Ghana"}>Ghana</MenuItem>
            <MenuItem value={"South Africa"}>South Africa</MenuItem>
            {/* ... other countries ... */}
          </Select>
        </FormControl>
        <TextField
          id="state"
          label="State"
          variant="outlined"
          fullWidth
          value={formValues.state}
          onChange={handleChange("state")}
        />
      </Stack>
      <TextField
        id="address"
        label="Address"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        value={formValues.address}
        onChange={handleChange("address")}
        sx={{ mt: 2 }}
      />
      <TextField
        id="jobTitle"
        label="Job Title"
        variant="outlined"
        fullWidth
        value={formValues.jobTitle}
        onChange={handleChange("jobTitle")}
        sx={{ mt: 2 }}
      />
      <TextField
        id="department"
        label="Department"
        variant="outlined"
        fullWidth
        value={formValues.department}
        onChange={handleChange("department")}
        sx={{ mt: 2 }}
      />

      {/* <Button
        variant="contained"
        sx={{ mt: 3, width: "30%", backgroundColor: "black", color: "white" }}
        onClick={handleSubmit}
      >
        Submit
      </Button> */}
    </Box>
  );
};

export default EmployeeDetails;
