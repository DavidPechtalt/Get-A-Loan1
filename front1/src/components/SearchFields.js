import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, Alert } from "@mui/material";
import search from "./search";
export default function SearchFields({ setLoansList}) {


  
  const [fieldValues, setFieldValues] = useState({
    userId: "",
    loanSum: "",
    biggerThen: "",
    smallerThen: "",
    interestPercent: "",
    
  });
  const [errors, setErrors] = useState({
    userId: false,
    loanSum: false,
    biggerThen: false,
    smallerThen: false,
    interestPercent: false,
    allEmpty: false,
  });
  function setErrorKey(key, value) {
    const currentValues = { ...errors };
    currentValues[key] = value;
    setErrors(currentValues);
  }

  function setInputValue(key, value) {
    console.log(key, value);
    const currentValues = { ...fieldValues };
    currentValues[key] = value;
    setFieldValues(currentValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   setLoansList([])
    setErrorKey("allEmpty", false);
    let nonEmpty;
    for (let value in fieldValues) {
      console.log(value);
      if (fieldValues[value] !== "") {
        nonEmpty = true;
      }
    }
    if (!nonEmpty) {
      setErrorKey("allEmpty", true);
      console.log(errors.allEmpty);
      return;
    }
    
    search(fieldValues, setLoansList)


  };
  return (
    <>
      <h1>Search A loan by at least 1 parameter</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        width={"100%"}
        height={"100%"}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box
          // component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "fit-content",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="User ID"
            variant="filled"
            size="small"
            value={fieldValues.userId}
            onChange={(e) => setInputValue("userId", e.target.value)}
            error={errors.userId}
          />
          <TextField
            id="filled-basic"
            label="Loan Sum "
            variant="filled"
            size="small"
            value={fieldValues.loanSum}
            onChange={(e) => setInputValue("loanSum", e.target.value)}
            error={errors.loanSum}
          />
          <TextField
            id="filled-basic"
            label="Bigger Then"
            variant="filled"
            size="small"
            value={fieldValues.biggerThen}
            onChange={(e) => setInputValue("biggerThen", e.target.value)}
            error={errors.biggerThen}
          />
          <TextField
            id="filled-basic"
            label="Smaller Then"
            variant="filled"
            size="small"
            value={fieldValues.smallerThen}
            onChange={(e) => setInputValue("smallerThen", e.target.value)}
            error={errors.smallerThen}
          />
          <TextField
            id="filled-basic"
            label="Index Type"
            variant="filled"
            size="small"
            value={fieldValues.indexType}
            onChange={(e) =>
              setInputValue("indexType", e.target.value)
            }
            error={errors.indexType}
          />
          

          <Button type="submit" sx={{ display: "block" }}>
            Submit
          </Button>
          {errors.allEmpty === true && (
            <Alert severity="error" sx={{ display: "block" }}>
              Please fill at least one field
            </Alert>
          )}
        </Box>
      </form>
    </>
  );
}
