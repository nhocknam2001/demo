import { Box, InputAdornment, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { list } from "../data";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function DataTable() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(list);
  const columns = [
    { field: "id", headerName: "Invoice Ref", width: 170 },
    { field: "issueDate", headerName: "Issue Date", width: 180 },
    { field: "dueDate", headerName: "Due Date", width: 180, types: "datetime" },
    { field: "total", headerName: "Total", width: 150 },
    { field: "method", headerName: "Payment Method", width: 230 },
    { field: "status", headerName: "Status", width: 130 },
  ];

  return (
    <div className="shadow-md">
      <div>
        <div className=" border-b font-normal text-gray-400 py-3 pl-8">
          LIST INVOICES
        </div>
        <div className="flex justify-center pr-8 pl-8 py-6">
          <TextField
            fullWidth
            id="input-with-sx"
            placeholder="Search"
            label="Search"
            variant="standard"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div>
        <Box
          style={{ height: 435, width: "100%" }}
          className=" items-center shadow-lg"
        >
          <DataGrid
            className=" text-2xl font-bold pb-0"
            rows={data}
            columns={columns}
            rowHeight={65}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
      </div>
    </div>
  );
}
