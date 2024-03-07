import { Box } from "@mui/material";
import { useState } from "react";
import { list } from "../data";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ActionPopper from "./ActionPopover";
import CustomFilter from "./FilterValueButton";

function CustomToolbar() {
  return (
    <Box className="flex justify-center pb-2 pt-5">
      <GridToolbarQuickFilter
        variant="outlined"
        size="small"
        sx={{ width: "90%" }}
      />
    </Box>
  );
}

export default function DataTable() {
  const data = list;
  const [activeStatus, setActiveStatus] = useState(""); // State for managing active status
  const [isPopperOpen, setIsPopperOpen] = useState(false); // State for managing popper open/close actions
  const [filteredData, setFilteredData] = useState(data);

  // Function for filter
  const handleFilterChange = (status) => {
    setActiveStatus(status);
    if (status === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.status === status);
      setFilteredData(filtered);
    }
  };

  // Function for action popper
  const handlePopperClick = () => {
    setIsPopperOpen((prev) => !prev); // Toggle popper open/close actions
  };

  // Col data
  const columns = [
    {
      field: "id",
      headerName: "Invoice Ref",
      width: 150,
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "issueDate",
      headerName: "Issue Date",
      width: 180,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 180,
    },
    {
      field: "total",
      headerName: "Total",
      width: 150,
    },
    {
      field: "method",
      headerName: "Payment Method",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      type: "string",
      renderCell: (params) => {
        if (params.row.status === "Ongoing") {
          return (
            <>
              <span className=" mr-2 text-blue-500">
                <FiberManualRecordIcon fontSize="" />
              </span>
              {params.row.status}
            </>
          );
        }
        if (params.row.status === "Paid") {
          return (
            <>
              <span className=" mr-2 text-green-500">
                <FiberManualRecordIcon fontSize="" />
              </span>
              {params.row.status}
            </>
          );
        }
        if (params.row.status === "Overdue") {
          return (
            <>
              <span className=" mr-2 text-red-500">
                <FiberManualRecordIcon fontSize="" />
              </span>
              {params.row.status}
            </>
          );
        }
        if (params.row.status === "Draft") {
          return (
            <>
              <span className=" mr-2 text-orange-400">
                <FiberManualRecordIcon fontSize="" />
              </span>
              {params.row.status}
            </>
          );
        }
      },
    },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      width: 80,
      renderCell: () => {
        return (
          <>
            <ActionPopper open={isPopperOpen} onClose={handlePopperClick} />
          </>
        );
      },
    },
  ];

  // Main
  return (
    <div className="shadow-md bg-white rounded">
      <div>
        <Box
          style={{ height: 506, width: "100%" }}
          className="items-center shadow-lg"
          sx={{
            "& .super-app-theme--cell": {
              fontWeight: "500",
            },
          }}
        >
          <CustomFilter
            onFilterChange={handleFilterChange}
            activeStatus={activeStatus}
          />

          <DataGrid
            rows={filteredData}
            columns={columns}
            rowHeight={65}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            checkboxSelection
            sx={{ border: "none" }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            slots={{
              toolbar: CustomToolbar,
            }}
          />
        </Box>
      </div>
    </div>
  );
}
