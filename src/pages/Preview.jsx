/* eslint-disable react/no-unescaped-entities */
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import BasicTable from "../components/PreviewTable";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";

const Preview = () => {
  return (
    <div>
      {/* Back button */}
      <Link to="/">
        <div className=" font-semibold cursor-pointer hover:bg-gray-200 transition duration-300 rounded py-2 w-fit px-1 flex justify-between items-center">
          <KeyboardBackspaceIcon />
          <h5 className=" ml-2 text-sm">Invoices</h5>
        </div>
      </Link>

      {/* Title */}
      <div className=" py-5 flex justify-between  ">
        <h1 className=" text-2xl font-semibold">Invoice Preview</h1>
        <div>
          <Link to="/">
            <Button
              variant="contained"
              startIcon={<MoveToInboxOutlinedIcon />}
              className=" text-2xl"
            >
              Download
            </Button>
          </Link>
        </div>
      </div>

      {/* Box */}
      <Box className="shadow-md border p-6 space-y-4 rounded-md">
        {/* row1 */}
        <div className="flex justify-between text-2xl font-semibold">
          <span>
            <h1>DEV5437</h1>
          </span>{" "}
          <span>
            <h1 className=" text-red-500">ONGOING</h1>
          </span>
        </div>
        {/* row2 */}
        <div className="flex justify-between pb-8">
          <div className="flex flex-col text-gray-500 text-sm">
            <h2 className=" text-black mb-2">Invoice to</h2>
            <p>Acme LTD GB54423345</p>
            <p>340 Lemon St. #5554</p>
            <p>Spring Valley, California</p>
            <p>United States</p>
          </div>
          <div className="flex flex-col text-right  text-gray-500 text-sm">
            <h2 className=" text-black mb-2">Invoice for</h2>
            <p>Natalie Rusell</p>
            <p>3845 Salty Street</p>
            <p>Salt Lake City</p>
            <p>United States</p>
          </div>
        </div>
        {/* row 3 */}
        <div className=" flex justify-between pb-8">
          <div className="flex flex-col  text-gray-500 text-sm">
            <h2 className=" text-black mb-2">Invoice Date</h2>
            <p>25 Feb 2024</p>
          </div>
          <div className="flex flex-col text-right  text-gray-500 text-sm">
            <h2 className=" text-black mb-2">Due Date</h2>
            <p>03 Mar 2024</p>
          </div>
        </div>
        <div className="pb-8">
          <BasicTable />
        </div>
        <div className="flex flex-col text-gray-500 text-sm">
          <h2 className=" text-black mb-2">Notes</h2>
          <p>"Please confirm once paid."</p>
        </div>
      </Box>
    </div>
  );
};

export default Preview;
