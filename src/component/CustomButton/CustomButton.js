import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputBox from "../../atom/Input/Input";
import { useState } from "react";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [Proceed, setProceed] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    if (
      user === "" ||
      name === "" ||
      Lname === "" ||
      password === "" ||
      Cpassword === ""
    ) {
      alert("Please enter correct Detail");
    } else {
        setProceed(true)
    }
  };
  const handleSave = () => {
    if (
      address === "" ||
      country === "" ||
      state === "" ||
      city === "" ||
      zip === ""
    ) {
      alert("Please enter correct Detail");
    } else {
       const customerDetails = {

        user,
        name,
        Lname,
        password,
        Cpassword,
        address,
        country,
        state,
        city,
        zip


       }

       

    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      { Proceed ? <>
        <DialogTitle id="alert-dialog-title">
      {"Add Details | Login Details"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <InputBox
          placeHolder="Address Line"
          Type="text"
          Value={address}
          OnChange={(e) => setAddress(e.target.value)}
        />
        <InputBox
          placeHolder="Country"
          Type="text"
          Value={country}
          OnChange={(e) => setCountry(e.target.value)}
        />
        <InputBox
          placeHolder="State"
          Type="text"
          Value={state}
          OnChange={(e) => setState(e.target.value)}
        />
        <InputBox
          placeHolder="City"
          Type="text"
          Value={city}
          OnChange={(e) => setCity(e.target.value)}
        />
        <InputBox
          placeHolder="Zip code"
          Type="number"
          Value={zip}
          OnChange={(e) => setZip(e.target.value)}
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button style={{ border: "1px solid black" }} onClick={handleClose}>
        Cancle
      </Button>
      <Button
        style={{ border: "1px solid black" }}
        onClick={handleSave}
        autoFocus
      >
        Save
      </Button>
    </DialogActions>
    </>
    :

         <>
        <DialogTitle id="alert-dialog-title">
          {"Add Details | Login Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <InputBox
              placeHolder="UserName"
              Type="text"
              Value={user}
              OnChange={(e) => setUser(e.target.value)}
            />
            <InputBox
              placeHolder="First Name"
              Type="text"
              Value={name}
              OnChange={(e) => setName(e.target.value)}
            />
            <InputBox
              placeHolder="Last Name"
              Type="text"
              Value={Lname}
              OnChange={(e) => setLName(e.target.value)}
            />
            <InputBox
              placeHolder="Password "
              Type="password"
              Value={password}
              OnChange={(e) => setPassword(e.target.value)}
            />
            <InputBox
              placeHolder="Confirm Password
            "
              Type="password"
              Value={Cpassword}
              OnChange={(e) => setCPassword(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ border: "1px solid black" }} onClick={handleClose}>
            Cancle
          </Button>
          <Button
            style={{ border: "1px solid black" }}
            onClick={handleProceed}
            autoFocus
          >
            Proceed
          </Button>
        </DialogActions>
        </>
      }
      </Dialog>
    </div>
  );
}
