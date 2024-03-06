import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import BasicPie from "../components/PieChart";
import DataTable from "../components/Table";
import { Link } from "react-router-dom";

const ListInvoices = () => {
  return (
    <div>
      {/* Top */}
      <div className="justify-between flex w-full items-center py-3">
        {/* Left side */}
        <div className=" text-2xl font-semibold">
          Invoices
          {/* Right side */}
        </div>
        <div>
          <Link to="/create">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              className=" text-2xl"
            >
              Add
            </Button>
          </Link>
        </div>
      </div>
      {/* Middle */}
      <div className=" flex w-full justify-between bg-[#d9f0fa] p-5 rounded mt-5">
        {/* Left side */}
        <div className=" w-1/2">
          <div>
            <div className=" text-xs font-semibold text-gray-500">
              TOTAL NET INCOME
            </div>
            <div className="mt-2 mb-6 text-2xl font-semibold">$12,200.00</div>
          </div>
          <div className="text-gray-500">
            From a total of <span className=" font-bold ">6</span> invoices
          </div>
        </div>
        {/* Right side */}
        <div className="flex w-1/2 justify-between">
          {/* PieChart */}
          <div className=" items-center">
            <BasicPie />
          </div>
          {/* Numbers */}
          <div className=" w-full -space-x-20 items-center text-xm text-sm">
            <p></p>
            <div className="flex justify-between py-2">
              <span>Ongoing</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Paid</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Overdue</span>
              <span>$20.00</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className=" mt-7">
        <DataTable />
      </div>
    </div>
  );
};

export default ListInvoices;
