import React from "react";
import { useState } from "react";
import {
  Box,
  IconButton,
  Collapse,
  Container,
  Input,
  TextField,
  Select,
  MenuItem,
  Divider,
  cardHeaderClasses,
  InputAdornment,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import PercentIcon from "@mui/icons-material/Percent";
import dayjs from "dayjs";
import { Percent } from "@mui/icons-material";
export default function SearchForm({ submitFunction, loading }) {
  let obj = {
    amount: "",
    currentRate: "",
    fixedRate: "",
    plusRate: "",
    givenAt: undefined,
    from: undefined,
    to: undefined,
    userId: "",
  };
  const [empty, setEmpty] = useState(false);
  const [values, setValues] = useState({ ...obj });
  const [open, setOpen] = useState(true);
  const [dateType, setDateType] = useState("between");
  const [interestType, setInterestType] = useState("fixed");
  function changeValue(key, value) {
    if (
      (key === "givenAt" || key === "from" || key === "to") &&
      value !== undefined &&
      value !== ""
    ) {
      value = value.format("YYYY/MM/DD");
    }
    console.log(key, value);
    let currentValues = { ...values };
    currentValues[key] = value;
    setValues(currentValues);
  }
  function handleSubmit() {
    setEmpty(false);
    let data = Object.values(values);
    let keys = Object.keys(values);
    var empty = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== undefined && data[i] !== "") {
        empty = false;
      }
      if (data[i] === undefined) {
        changeValue(keys[i], '')
        console.log(values[keys[i]]);
      }
    }
    if (empty) {
      setEmpty(true);
      return;
    }
    console.log(values);
    submitFunction(values);
    setOpen(false);
  }
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          border: "solid 0.5px gray",
          borderRadius: "3px",
          height: "80px",
          paddingTop: "35px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
          sx={{ marginBottom: "18px", width: "120px" }}
        >
          {open ? (
            <>
              Close
              <KeyboardArrowUp />
            </>
          ) : (
            <>
              Advanced Search <KeyboardArrowDown />
            </>
          )}
        </IconButton>
        <TextField
          id="standard-basic"
          variant="outlined"
          label="User Name"
          value={values.userId}
          onChange={(e) => changeValue("userId", e.target.value)}
          sx={{ width: "50%" }}
        ></TextField>
        <TextField
          id="standard-basic"
          variant="outlined"
          label="Amount"
          value={values.amount}
          type="number"
          onChange={(e) => {
            changeValue("amount", e.target.value);
          }}
          sx={{ marginRight: "13px" }}
        ></TextField>
      </Box>

      <Collapse
        in={open}
        timeout="auto"
        sx={{ height: "fit-content", width: "100%" }}
      >
        <Box
          sx={{
            width: "100%",
            border: "solid 0.5px gray",
            borderRadius: "3px",
            height: "350px",
            marginTop: " 29px",
          }}
        >
          <Box
            sx={{
              width: "96%",
              display: "flex",
              flexDirection: "column",
              margin: "12px",
            }}
          >
            <h1>Date</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateType}
                  sx={{ width: "25%" }}
                  // label={dateType}
                  onChange={(e) => setDateType(e.target.value)}
                >
                  <MenuItem value={"between"}>Given Between</MenuItem>
                  <MenuItem value={"at"}>Given At</MenuItem>
                </Select>
                {dateType === "between" && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "70%",
                    }}
                  >
                    <DatePicker
                      id="standard-basic"
                      variant="outlined"
                      label={"From"}
                      value={values.from}
                      onChange={(e) => changeValue("from", e)}
                      sx={{ width: "45%" }}
                      slotProps={{
                        field: { clearable: true },
                      }}
                    ></DatePicker>

                    <DatePicker
                      id="standard-basic"
                      variant="outlined"
                      label={"To"}
                      value={values.to}
                      onChange={(e) => changeValue("to", e)}
                      sx={{ width: "45%" }}
                    ></DatePicker>
                  </Box>
                )}
                {dateType == "at" && (
                  <>
                    <DatePicker
                      id="standard-basic"
                      variant="outlined"
                      label={"Given At"}
                      value={values.givenAt}
                      onChange={(e) => changeValue("givenAt", e)}
                      sx={{ width: "50%", marginRight: "20%" }}
                    ></DatePicker>
                  </>
                )}
              </Box>
            </LocalizationProvider>

            <Divider sx={{ margin: "12px" }} />
            <h1>Interest</h1>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={interestType}
                sx={{ width: "25%" }}
                // label={dateType}
                onChange={(e) => setInterestType(e.target.value)}
              >
                <MenuItem value={"fixed"}>Fixed</MenuItem>
                <MenuItem value={"prime"}>Prime</MenuItem>
              </Select>
              {interestType === "prime" && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "70%",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    variant="outlined"
                    label={"Current Rate"}
                    value={values.currentRate}
                    onChange={(e) => changeValue("currentRate", e.target.value)}
                    type="number"
                    sx={{ width: "45%" }}
                  ></TextField>
                  <TextField
                    id="standard-basic"
                    variant="outlined"
                    label={"Prime Plus"}
                    type="number"
                    value={values.plusRate}
                    onChange={(e) => changeValue("plusRate", e.target.value)}
                    sx={{ width: "45%" }}
                  ></TextField>
                </Box>
              )}
              {interestType == "fixed" && (
                <>
                  <TextField
                    id="standard-basic"
                    variant="outlined"
                    label={"Annual Rate"}
                    value={values.fixedRate}
                    type="number"
                    onChange={(e) => changeValue("fixedRate", e.target.value)}
                    sx={{ width: "50%", marginRight: "20%" }}
                  ></TextField>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Collapse>
      {empty && (
        <Alert severity="error" sx={{ marginTop: "17px" }}>
          Please fill at least one field to search!
        </Alert>
      )}

      <Box display="flex" justifyContent="center" sx={{ margin: "22px" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="outlined"
            sx={{ width: "157px" }}
            onClick={() => {
              handleSubmit();
            }}
          >
            Search
          </Button>
        )}
      </Box>
    </Box>
  );
}
