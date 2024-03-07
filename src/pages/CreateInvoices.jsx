/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, InputAdornment } from "@mui/material";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { GridDeleteIcon } from "@mui/x-data-grid";

const CreateInvoices = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="">
      {/* Back button */}
      <Link to="/">
        <div className=" font-semibold cursor-pointer hover:bg-gray-200 transition duration-300 rounded py-2 w-fit px-1 flex justify-between items-center">
          <KeyboardBackspaceIcon />
          <h5 className=" ml-2 text-sm">Invoices</h5>
        </div>
      </Link>

      {/* Title */}
      <div className=" py-5">
        <h1 className=" text-2xl font-semibold">Create Invoice</h1>
      </div>

      {/* FORM */}
      <div className=" max-w-screen-2xl container mx-auto shadow-xl border rounded-md bg-white">
        {/* Form */}
        <div className=" py-5 px-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* 1st line */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 font-medium text-sm">
                  Subject
                </label>
                <TextField
                  variant="outlined"
                  required
                  size="small"
                  className="create-job-input text-sm"
                ></TextField>
              </div>
              <div className="lg:w-1/2 w-full text-gray-500">
                <label className="block mb-2 font-medium text-sm">
                  Invoiced #
                </label>
                <TextField
                  className="create-job-input"
                  variant="outlined"
                  required
                  size="small"
                  disabled="true"
                ></TextField>
              </div>
            </div>

            {/* 2nd line */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 font-medium text-sm">
                  Customer Name
                </label>
                <TextField
                  variant="outlined"
                  required
                  size="small"
                  className="create-job-input text-sm"
                ></TextField>
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 font-medium text-sm">
                  Customer Email
                </label>{" "}
                <TextField
                  className="create-job-input"
                  variant="outlined"
                  required="true"
                  type="email"
                  size="small"
                ></TextField>
              </div>
            </div>

            {/* 3rd line */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 font-medium text-sm">
                  Issue Date
                </label>
                <TextField
                  variant="outlined"
                  required="true"
                  size="small"
                  type="date"
                  className="create-job-input text-sm"
                ></TextField>
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 font-medium text-sm">
                  Due Date
                </label>
                <TextField
                  className="create-job-input"
                  variant="outlined"
                  required="true"
                  type="date"
                  size="small"
                ></TextField>
              </div>
            </div>

            {/* 4th line */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 font-medium text-sm">Item</label>
                <TextField
                  variant="outlined"
                  required="true"
                  size="small"
                  className="create-job-input text-sm"
                ></TextField>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="flex">
                  <div className=" w-28 font-sm mr-5">
                    <label className="block mb-2 font-medium text-sm">
                      Qty
                    </label>
                    <TextField
                      className="create-job-input"
                      variant="outlined"
                      required
                      type="number"
                      size="small"
                    ></TextField>
                  </div>
                  <div className=" w-28 font-sm mr-5">
                    <label className="block mb-2 font-medium text-sm">
                      Price
                    </label>
                    <TextField
                      className="create-job-input"
                      variant="outlined"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      type="number"
                      size="small"
                    ></TextField>
                  </div>
                  <div className=" w-28 font-sm mr-5 text-gray-500">
                    <label className="block mb-2 font-medium text-sm">
                      Total
                    </label>
                    <TextField
                      className="create-job-input"
                      variant="outlined"
                      required
                      type="number"
                      disabled
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$ </InputAdornment>
                        ),
                      }}
                    ></TextField>
                  </div>
                  <div className="flex items-center mt-6">
                    <div>
                      <GridDeleteIcon className=" text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7th line */}
            <div className="flex justify-between items-center w-full font-medium">
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Taxable (VAT 19%)"
              />
              <div>
                <span className=" text-sm text-gray-500">Total </span>$0.00
              </div>
            </div>

            {/* 8th row */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium">
                Additional Notes
              </label>
              <textarea
                className="w-full pl-3 py-5 focus:outline-none rounded border-2"
                rows={3}
                placeholder="Client notes"
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-between">
              <span></span>
              <input
                type="submit"
                className=" mt-3 bg-cyan-600 font-medium rounded-md cursor-pointer px-5 text-white flex py-2"
                value="Create Invoice"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoices;
