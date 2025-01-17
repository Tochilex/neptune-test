"use client";
import React from "react";

import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmployeeDetails from "@/components/EmployeeDetails";
import { PersonalInfoForm } from "@/components/PersonalInfoForm";



// Interface for Business details
export interface EmployeeFormValues {
  firstName: string;
  lastName: string;
  otherNames?: string;
  phoneNumber?: string;
  workEmail: string;
  country: string;
  state: string;
  address: string;
  jobTitle: string;
  department: string;
}

// Interface for personal info
interface PersonalInfoValues {
  photo?: File;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  homeAddress: string;
}

const AddEmployees = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [formValues, setFormValues] = React.useState<EmployeeFormValues>({
    firstName: "",
    lastName: "",
    otherNames: "",
    phoneNumber: "",
    workEmail: "",
    country: "",
    state: "",
    address: "",
    jobTitle: "",
    department: "",
  });

  const [personalInfoValues, setPersonalInfoValues] =
    React.useState<PersonalInfoValues>({
      gender: "other",
      dateOfBirth: "",
      maritalStatus: "single",
      homeAddress: "",
    });

  const [activeTab, setActiveTab] = React.useState("business"); // Track the active tab

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleChange =
    (name: keyof EmployeeFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [name]: event.target.value });
    };

  const handleCountryChange = (event: React.ChangeEvent<{ value: string }>) => {
    setFormValues({ ...formValues, country: event.target.value });
  };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Handle form submission here (e.g., send data to server)
  //   console.log("Form submitted:", formValues);
  // };

  // Handle changes for personal info
  const handlePersonalInfoChange =
    (name: keyof PersonalInfoValues) =>
    (event: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setPersonalInfoValues({
        ...personalInfoValues,
        [name]: event.target
          .value as PersonalInfoValues[keyof PersonalInfoValues],
      });
    };

  // Handle photo upload
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPersonalInfoValues({
        ...personalInfoValues,
        photo: event.target.files[0],
      });
    }
  };

  // Different submit handlers for different tabs
  const submitBusiness = () => {
    console.log("Business tab submitted:", formValues);
    // Here you would handle the business form submission
  };

  const submitPersonalInfo = () => {
    console.log("Personal Info tab submitted:", personalInfoValues);
    // Handle personal info form submission
  };

  const submitCompensation = () => {
    console.log("Compensation tab submitted:", formValues); // Assuming compensation uses business details
    // Handle compensation form submission
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    switch (activeTab) {
      case "business":
        submitBusiness();
        break;
      case "personalInfo":
        submitPersonalInfo();
        break;
      case "compensation":
        submitCompensation();
        break;
      default:
        console.log("Unexpected tab:", activeTab);
    }
  };

  return (
    <Box
      sx={{
        mt: isSmDown ? 4 : 8, // Adjust margin-top to avoid overlapping with the header
        ml: isSmDown ? 4 : 40, // Adjust margin-left to provide space for the sidebar
        pr: 4, // Add padding-right for better spacing
        mb: 5,
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon sx={{ fontSize: "1.3rem" }} />}
        sx={{ mb: "1.5rem" }}
      >
        <Link underline="hover" color="inherit" href="/employees">
          Employees
        </Link>

        <Typography color="text.primary">Add Employee</Typography>
      </Breadcrumbs>

      <Typography variant="h4" gutterBottom>
        Add Employee
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Fill out the employee details below to add them to your team.
      </Typography>

      {/* Tab Navigation */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2, mt: 2 }}>
        <Typography
          variant="body1"
          sx={{
            textDecoration:
              activeTab === "business" ? "underline blue" : "none",
            textUnderlineOffset: 6,
            cursor: "pointer",
          }}
          onClick={() => handleTabChange("business")}
        >
          Business
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ml: 2,
            textDecoration:
              activeTab === "personalInfo" ? "underline blue" : "none",
            textUnderlineOffset: 6,
            cursor: "pointer",
          }}
          onClick={() => handleTabChange("personalInfo")}
        >
          Personal Info
        </Typography>

        <Typography
          variant="body1"
          sx={{
            ml: 2,
            textDecoration:
              activeTab === "compensation" ? "underline blue" : "none",
            textUnderlineOffset: 6,
            cursor: "pointer",
          }}
          onClick={() => handleTabChange("compensation")}
        >
          Compensation
        </Typography>
      </Box>

      {/* Conditional rendering of form sections based on active tab */}
      {activeTab === "business" && (
        <Box sx={{ mt: 3 }}>
          <EmployeeDetails
            formValues={formValues}
            handleChange={handleChange}
            handleCountryChange={handleCountryChange}
          />
        </Box>
      )}
      {activeTab === "personalInfo" && (
        <Box sx={{ mt: 3 }}>
          <PersonalInfoForm
            personalInfoValues={personalInfoValues}
            handleChange={handlePersonalInfoChange}
            handlePhotoChange={handlePhotoChange}
            onSubmit={() => handleSubmit}
            isSubmitting={false} // Adjust as needed for your submission state
          />
        </Box>
      )}
      {activeTab === "compensation" && (
        <Box sx={{ mt: 3 }}>
          <Typography>Test field 3</Typography>
          {/* ... Emergency Contact form fields here ... */}
        </Box>
      )}

      <Button
        variant="contained"
        sx={{ mt: 3, width: "30%", backgroundColor: "black", color: "white" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddEmployees;
