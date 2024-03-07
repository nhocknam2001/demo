import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Button } from "@mui/material";
import BasicTable from "../components/PreviewTable";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

import AlertDialogSlide from "../components/Notification";
import DropdownButton from "../components/Dropdown";

const Details = () => {
  const dropOptions = [
    { label: "Invoice created", value: "option1" },
    { label: "Payment received", value: "option2" },
  ];

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
          <Link to="/preview">
            <Button
              variant="contained"
              startIcon={<RemoveRedEyeOutlinedIcon />}
              className=" text-2xl"
            >
              Preview
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex text-red-500 items-center text-sm">
        <span className="">
          <FiberManualRecordIcon fontSize="inherit" />
        </span>
        <span className=" ml-2">Unpaid</span>
      </div>
      {/* Main content */}
      <div className="flex space-x-5 pt-7">
        {/* Left */}
        <div className="w-2/3 space-y-5">
          <Box className="shadow-lg border-0.5 font-medium border rounded-md bg-white">
            {/* row1 */}
            <div className=" p-4 border-b font-semibold">Invoice Details</div>
            <Box className="flex flex-row p-4 text-sm">
              <div className="w-1/2 space-y-6">
                <div className=" space-y-2">
                  <p>Invoice Ref</p>
                  <p className=" text-gray-500">DEV5437</p>
                </div>
                <div className=" space-y-2">
                  <p>Issue Date</p>
                  <p className=" text-gray-500">25 Feb 2024</p>
                </div>
                <div className=" space-y-2">
                  <p>Notes</p>
                  <p className=" text-gray-500">“Please confirm once paid.”</p>
                </div>
              </div>
              <div className="w-1/2 space-y-6">
                <div className=" space-y-2">
                  <p>Customer Name</p>
                  <p className=" text-gray-500">Natalie Rusell</p>
                </div>
                <div className=" space-y-2">
                  <p>Due Date</p>
                  <p className=" text-gray-500">03 Mar 2024</p>
                </div>
              </div>
            </Box>
          </Box>
          <Box className="shadow-lg border-0.5 font-medium border rounded-md bg-white">
            {/* row2 */}
            <div className=" p-4 border-b font-semibold">Invoice Details</div>
            <Box className="flex flex-row p-4 text-sm">
              <div className="w-1/2 space-y-6">
                <div className=" space-y-2">
                  <p>Invoice Ref</p>
                  <p className=" text-gray-500">DEV5437</p>
                </div>
                <div className=" space-y-2">
                  <p>Issue Date</p>
                  <p className=" text-gray-500">25 Feb 2024</p>
                </div>
                <div className=" space-y-2">
                  <p>Notes</p>
                  <p className=" text-gray-500">“Please confirm once paid.”</p>
                </div>
              </div>
              <div className="w-1/2 space-y-6">
                <div className=" space-y-2">
                  <p>Customer Name</p>
                  <p className=" text-gray-500">Natalie Rusell</p>
                </div>
                <div className=" space-y-2">
                  <p>Due Date</p>
                  <p className=" text-gray-500">03 Mar 2024</p>
                </div>
                <div className=" space-y-2">
                  <p>Status</p>
                  <p className=" text-gray-500">Failed</p>
                </div>
              </div>
            </Box>
          </Box>
          <Box className="shadow-lg border-0.5 font-medium border rounded-md">
            {/* row3 */}
            <div className=" p-4 border-b font-semibold bg-white">Payment</div>
            <BasicTable />
          </Box>
        </div>
        {/* Right */}
        <div className=" w-1/3 space-y-5">
          <div className="shadow-lg border-0.5 font-medium border rounded-md bg-white">
            <div className=" p-4 border-b font-semibold">Quick Actions</div>
            <div className=" py-4 px-5 flex-col space-y-3 font-medium text-sm">
              <DropdownButton options={dropOptions} />
              <AlertDialogSlide message="Email sent successfully!" />
            </div>
            <div className=" py-3 bg-neutral-100 font-normal text-sm">
              <Link to="/preview">
                <div className="cursor-pointer hover:bg-gray-300 space-x-4 items-center py-2">
                  <span className=" pl-4">
                    <RemoveRedEyeOutlinedIcon fontSize="small" />
                  </span>
                  <span>Preview</span>
                </div>
              </Link>
              <div className="cursor-pointer hover:bg-gray-300 space-x-4 items-center py-2">
                <span className=" pl-4">
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                </span>
                <span>Mark Paid</span>
              </div>
              <div className="cursor-pointer hover:bg-gray-300 space-x-4 items-center py-2">
                <span className=" pl-4">
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                </span>
                <span>Duplicate</span>
              </div>
              <div className="cursor-pointer hover:bg-gray-300 space-x-4 items-center py-2">
                <span className=" pl-4">
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                </span>
                <span>Download (PDF)</span>
              </div>
              <div className="cursor-pointer hover:bg-gray-300 space-x-4 items-center py-2">
                <span className=" pl-4">
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                </span>
                <span>Delete</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="shadow-lg border-0.5 font-medium border rounded-md bg-white">
            <div className=" p-4 border-b font-semibold">Payment History</div>
            <div className=" py-4 px-5 flex-col space-y-3 font-medium text-sm">
              <div className="flex flex-row items-center space-x-3 font-normal">
                <div>
                  <CircleOutlinedIcon
                    fontSize="inherit"
                    className=" text-gray-400 font-semibold"
                  />
                </div>
                <div className=" space-y-1">
                  <div>Stripe charge complete</div>
                  <div>Charge ID: th_2JCleBj4vHz</div>
                  <div className=" text-xs text-gray-500">
                    about 21 hours ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
