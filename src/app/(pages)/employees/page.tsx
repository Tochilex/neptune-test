"use client";

import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  useTheme,
  useMediaQuery,
  TableContainer,
  TableSortLabel,
  TablePagination,
  Paper,
  Divider,
  Link,
  Tooltip,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; //New
import DeleteIcon from "@mui/icons-material/Delete"; //New
import EmployeeRightSideBar from "@/components/EmployeeRightSideBar";

// type for sorting order NEW
type Order = "asc" | "desc";

interface EmployeeData {
  name: string;
  employeeId: string;
  department: string;
  payGroup: string;
}

const sampleData: EmployeeData[] = [
  {
    name: "John Doe",
    employeeId: "EID: 009122211",
    department: "Audit",
    payGroup: "Senior",
  },
  {
    name: "Kelvin Olamide",
    employeeId: "EID: 009122212",
    department: "Finance",
    payGroup: "Senior",
  },
  {
    name: "Richmond Asaka",
    employeeId: "EID: 009122213",
    department: "Tax",
    payGroup: "Senior",
  },

  {
    name: "Daniel Jones",
    employeeId: "EID: 009122671",
    department: "Tax",
    payGroup: "Senior",
  },
  {
    name: "Jane Moe",
    employeeId: "EID: 122456889",
    department: "Marketing",
    payGroup: "Junior",
  },
  {
    name: "Michel Lookman",
    employeeId: "EID: 041456789",
    department: "Consulting",
    payGroup: "Senior",
  },
  {
    name: "Osimen Joe",
    employeeId: "EID: 123456789",
    department: "Risk",
    payGroup: "Junior",
  },
];

const Employees = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedEmployees, setSelectedEmployees] = React.useState<string[]>(
    []
  );
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openEdit, setOpenEdit] = React.useState(false); // State for edit dialog NEW
  const [openDelete, setOpenDelete] = React.useState(false); // State for delete confirmation dialog NEW
  const [editingEmployee, setEditingEmployee] =
    React.useState<EmployeeData | null>(null); // State to hold the employee being edited NEW
  const [deletingEmployeeId, setDeletingEmployeeId] = React.useState<
    string | null
  >(null); // State to hold the ID of the employee being deleted NEW

  // Function to handle edit action
  const handleEdit = (employee: EmployeeData) => {
    setEditingEmployee(employee);
    setOpenEdit(true);
  };

  // Function to handle delete action
  const handleDelete = (employeeId: string) => {
    setDeletingEmployeeId(employeeId);
    setOpenDelete(true);
  };

  // Function to close the edit dialog
  const handleCloseEdit = () => {
    setEditingEmployee(null);
    setOpenEdit(false);
  };

  // Function to close the delete confirmation dialog
  const handleCloseDelete = () => {
    setDeletingEmployeeId(null);
    setOpenDelete(false);
  };

  // Function to confirm delete action (you would call your API here)
  const confirmDelete = () => {
    if (deletingEmployeeId) {
      // TODO: Implement API call to delete the employee from database
      console.log(`Deleting employee with ID: ${deletingEmployeeId}`);
      // After successful deletion, update your state or fetch new data
      handleCloseDelete();
    }
  };

  // Function to confirm edit action (you would call your API here to update)
  const confirmEdit = () => {
    if (editingEmployee) {
      // TODO: Implement API call to update the employee in database
      console.log(`Updating employee with ID: ${editingEmployee.employeeId}`);
      // After successful update, update your state or fetch new data
      handleCloseEdit();
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRowSelection = (employeeId: string) => {
    if (selectedEmployees.includes(employeeId)) {
      setSelectedEmployees(selectedEmployees.filter((id) => id !== employeeId));
    } else {
      setSelectedEmployees([...selectedEmployees, employeeId]);
    }
  };

  const handleRequestSort = (property: keyof EmployeeData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Stable sort implementation
  const stableSort = (
    array: EmployeeData[],
    comparator: (a: EmployeeData, b: EmployeeData) => number
  ) => {
    const stabilizedThis = array.map(
      (el, index) => [el, index] as [EmployeeData, number]
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = <Key extends keyof EmployeeData>(
    order: Order,
    orderBy: Key
  ): ((a: Pick<EmployeeData, Key>, b: Pick<EmployeeData, Key>) => number) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = <T extends Record<string, unknown>>(
    a: T,
    b: T,
    orderBy: keyof T
  ): number => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const filteredEmployees = sampleData.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedEmployees = stableSort(
    filteredEmployees,
    getComparator(order, orderBy)
  );

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - sortedEmployees.length)
      : 0;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          mt: isSmDown ? 4 : 8, // Adjust margin-top to avoid overlapping with the header
          ml: isSmDown ? 4 : 40, // Adjust margin-left to provide space for the sidebar
          pr: 4, // Add padding-right for better spacing
          mb: 5,
          width: isSmDown ? "90%" : "60%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Employees
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Add and manage all your employees from one page.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ mr: 2 }}
          />

          <Link href="/employees/addEmployees">
            <Button variant="contained" sx={{ bgcolor: "black" }}>
              Add Employee
            </Button>
          </Link>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  {/* Checkbox function NEW */}
                  <Checkbox
                    indeterminate={
                      selectedEmployees.length > 0 &&
                      selectedEmployees.length < filteredEmployees.length
                    }
                    checked={
                      filteredEmployees.length > 0 &&
                      selectedEmployees.length === filteredEmployees.length
                    }
                    onChange={(event) => {
                      setSelectedEmployees(
                        event.target.checked
                          ? filteredEmployees.map((e) => e.employeeId)
                          : []
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "name"}
                    //direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                  >
                    Employee
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "department"}
                    //direction={orderBy === "department" ? order : "asc"}
                    onClick={() => handleRequestSort("department")}
                  >
                    Department
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "payGroup"}
                    //direction={orderBy === "payGroup" ? order : "asc"}
                    onClick={() => handleRequestSort("payGroup")}
                  >
                    Pay group
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedEmployees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employee) => (
                  <TableRow key={employee.employeeId}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedEmployees.includes(
                          employee.employeeId
                        )}
                        onChange={() => handleRowSelection(employee.employeeId)}
                      />
                    </TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.payGroup}</TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                          aria-label="edit"
                          color="primary"
                          onClick={() => handleEdit(employee)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          aria-label="delete"
                          color="error"
                          onClick={() => handleDelete(employee.employeeId)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>

            {/* Edit Dialog */}
            <Dialog open={openEdit} onClose={handleCloseEdit}>
              <DialogTitle>Edit Employee</DialogTitle>
              <DialogContent>
                {/* Here you would add form fields for editing */}
                <DialogContentText>
                  Edit details for {editingEmployee?.name || "Employee"}
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  value={editingEmployee?.name || ""}
                  onChange={(e) =>
                    setEditingEmployee((prev) =>
                      prev ? { ...prev, name: e.target.value } : prev
                    )
                  }
                />
                <TextField
                  margin="dense"
                  id="employeeId"
                  label="Employee ID"
                  type="text"
                  fullWidth
                  disabled
                  value={editingEmployee?.employeeId || ""}
                />
                <TextField
                  margin="dense"
                  id="department"
                  label="Department"
                  type="text"
                  fullWidth
                  value={editingEmployee?.department || ""}
                  onChange={(e) =>
                    setEditingEmployee((prev) =>
                      prev ? { ...prev, department: e.target.value } : prev
                    )
                  }
                />
                <TextField
                  margin="dense"
                  id="payGroup"
                  label="Pay Group"
                  type="text"
                  fullWidth
                  value={editingEmployee?.payGroup || ""}
                  onChange={(e) =>
                    setEditingEmployee((prev) =>
                      prev ? { ...prev, payGroup: e.target.value } : prev
                    )
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEdit}>Cancel</Button>
                <Button onClick={confirmEdit} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDelete} onClose={handleCloseDelete}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to delete this employee?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDelete}>Cancel</Button>
                <Button onClick={confirmDelete} color="error">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredEmployees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
      <Divider orientation="vertical" flexItem />
      <EmployeeRightSideBar />
    </Box>
  );
};

export default Employees;
