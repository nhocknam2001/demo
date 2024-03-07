import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function CustomFilter({ onFilterChange, activeStatus }) {
  const handleFilterChange = (status) => {
    onFilterChange(status);
  };

  return (
    <Box className="flex font-medium pl-4  text-sm border-b text-neutral-500">
      <button
        style={{
          color: activeStatus === "" ? "green" : "",
          borderBottom: activeStatus === "" ? "3px solid green" : "",
          width: "90px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        onClick={() => handleFilterChange("")}
      >
        Show All
      </button>
      <button
        style={{
          color: activeStatus === "Ongoing" ? "green" : "",
          borderBottom: activeStatus === "Ongoing" ? "3px solid green" : "",
          width: "90px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        onClick={() => handleFilterChange("Ongoing")}
      >
        Ongoing
      </button>
      <button
        style={{
          color: activeStatus === "Paid" ? "green" : "",
          borderBottom: activeStatus === "Paid" ? "3px solid green" : "",
          width: "90px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        onClick={() => handleFilterChange("Paid")}
      >
        Paid
      </button>
      <button
        style={{
          color: activeStatus === "Overdue" ? "green" : "",
          borderBottom: activeStatus === "Overdue" ? "3px solid green" : "",
          width: "90px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        onClick={() => handleFilterChange("Overdue")}
      >
        Overdue
      </button>
    </Box>
  );
}
