import * as React from "react";

import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { SelectChangeEvent } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

const PhotoDisplayBox = styled(Box)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: `2px solid #ccc`,
  overflow: "hidden",
  position: "relative",
  display: "flex",
  backgroundColor: "#ccc",
  alignItems: "center",
  justifyContent: "center",
}));

interface PersonalInfoValues {
  photo?: File;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  maritalStatus: "single" | "married";
  homeAddress: string;
}

interface PersonalInfoFormProps {
  personalInfoValues: PersonalInfoValues;
  handleChange: (
    name: keyof PersonalInfoValues
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: SelectChangeEvent<string>) => void;
  handlePhotoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfoValues,
  handleChange,
  handlePhotoChange,
  onSubmit,
  //isSubmitting = false,

  
 

}) => {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      sx={
        {
          //display: "flex",
          //flexDirection: "column",
          // gap: 2,
           maxWidth: 700,
          // justifyContent: "flex-start",
          // mb: 2,
          // mt: 2,
        }
      }
    >
      {/* <Box>
        <Typography variant="body1">Profile Photo</Typography>
        <label htmlFor="upload-photo">
          <Input
            accept="image/*"
            id="upload-photo"
            type="file"
            onChange={handlePhotoChange}
          />
          <Button variant="outlined" component="span">
            Add Photo
          </Button>
        </label>
      </Box> */}

      <Box>
        <Typography variant="body1">Profile Photo</Typography>
        <Typography variant="body2" mt="2px" color="text.secondary">
          Add a photo of your employee
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            p: 2,
            width: "auto%",
          }}
        >
          <PhotoDisplayBox>
            {personalInfoValues.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={URL.createObjectURL(personalInfoValues.photo)}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Typography variant="body1" color="textSecondary">
                Add
              </Typography>
            )}
          </PhotoDisplayBox>
          <label htmlFor="upload-photo">
            <Input
              accept="image/*"
              id="upload-photo"
              type="file"
              onChange={handlePhotoChange}
            />
            <Button variant="outlined" component="span" sx={{ mt: 1 }}>
              Add Photo
            </Button>
          </label>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Typography variant="body1">Gender</Typography>
          <Select
            label="Gender"
            value={personalInfoValues.gender}
            onChange={(event) => handleChange("gender")(event)}
            //displayEmpty
            variant="outlined"
            fullWidth
            inputProps={{ "aria-label": "Gender" }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography variant="body1">Date of Birth</Typography>
          <TextField
            type="date"
            value={personalInfoValues.dateOfBirth}
            onChange={() => handleChange("dateOfBirth")}
            sx={{ width: "100%" }}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Box>

      <Box>
        <Typography variant="body1">Marital Status</Typography>
        <Select
          value={personalInfoValues.maritalStatus}
          onChange={(event) => handleChange("maritalStatus")(event)}
          sx={{ width: "50%" }}
          //displayEmpty
          inputProps={{ "aria-label": "Marital Status" }}
        >
          <MenuItem value="single">Unmarried</MenuItem>
          <MenuItem value="married">Married</MenuItem>
        </Select>
      </Box>

      <Box>
        <Typography variant="body1">Home Address</Typography>
        <TextField
          value={personalInfoValues.homeAddress}
          onChange={handleChange("homeAddress")}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
      </Box>

      {/* <Button type="submit" variant="contained" color="primary" >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button> */}
    </Box>
  );
};
