import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// eslint-disable-next-line react/prop-types
export default function StatusRenderColor({ status }) {
  const statusColors = {
    Ongoing: "blue",
    Paid: "green",
    Overdue: "red",
    Draft: "orange",
  };

  const color = statusColors[status] || "black";

  return (
    <>
      <span className={`mr-2 text-${color}-500`}>
        <FiberManualRecordIcon sx={{ fontSize: "13px" }} />
      </span>
      {status}
    </>
  );
}
