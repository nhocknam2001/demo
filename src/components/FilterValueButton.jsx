import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function CustomFilter({ onFilterChange, activeStatus }) {
  const handleFilterChange = (status) => {
    onFilterChange(status);
  };

  return (
    <Box className="flex space-x-7 font-medium pl-4 py-4 text-sm border-b text-neutral-500">
      <button
        style={{ color: activeStatus === "" ? "green" : "" }}
        onClick={() => handleFilterChange("")}
      >
        Show All
      </button>
      <button
        style={{ color: activeStatus === "Ongoing" ? "green" : "" }}
        onClick={() => handleFilterChange("Ongoing")}
      >
        Ongoing
      </button>
      <button
        style={{ color: activeStatus === "Paid" ? "green" : "" }}
        onClick={() => handleFilterChange("Paid")}
      >
        Paid
      </button>
      <button
        style={{ color: activeStatus === "Overdue" ? "green" : "" }}
        onClick={() => handleFilterChange("Overdue")}
      >
        Overdue
      </button>
    </Box>
  );
}
