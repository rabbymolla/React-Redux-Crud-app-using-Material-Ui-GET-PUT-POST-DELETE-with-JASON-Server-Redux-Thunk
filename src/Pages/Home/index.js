import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { LoginSlice, remove } from "../../Feature/Slice/CounterSlice";
import { AiFillDelete } from "react-icons/ai";

const Home = () => {
  // validation
  const [info, setInfo] = useState({
    country: "",
    districk: "",
    date: "",
    guests: "",
    className: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Button Validation
  const dispacth = useDispatch();
  const selector = useSelector((state) => state.counter.value);
  const [stor, setStore] = useState();

  const handleButton = () => {
    if (
      info.country &&
      info.districk &&
      info.date &&
      info.guests &&
      info.className
    ) {
      setStore(dispacth(LoginSlice(info)));
      setInfo("");
      // error null
      validationScema(false);
      validationScemaone(false);
      validationScemaTwo(false);
      validationScemaThree(false);
      validationScemaFour(false);
    } else {
      // error show
      validationScema();
      validationScemaone();
      validationScemaTwo();
      validationScemaThree();
      validationScemaFour();
    }
  };

  // delete part
  const handleDelete = (k) => {
    dispacth(remove(k));
  };
  // form error
  const [error, setError] = useState();
  const [errorOne, setErrorOne] = useState();
  const [errorTwo, setErrorTwo] = useState();
  const [errorThree, setErrorThree] = useState();
  const [errorFour, setErrorFour] = useState();

  const validationScema = () => {
    if (!info.country) {
      return setError("Invalide Your Country");
    } else {
      return setError(false);
    }
  };
  const validationScemaone = () => {
    if (!info.districk) {
      return setErrorOne("Invalide Your Districk");
    } else {
      return setErrorOne(null);
    }
  };
  const validationScemaTwo = () => {
    if (!info.date) {
      return setErrorTwo("Invalide Your Date");
    } else {
      return setErrorTwo(null);
    }
  };
  const validationScemaThree = () => {
    if (!info.guests) {
      return setErrorThree("Invalide Your Guests");
    } else {
      return setErrorThree(null);
    }
  };
  const validationScemaFour = () => {
    if (!info.className) {
      return setErrorFour("Invalide Your Class Name");
    } else {
      return setErrorFour(null);
    }
  };
  return (
    <>
      <section id="redux_background">
        <div className="redux_img">
          <picture>
            <img
              loading="lazy"
              src="./images/27305667_153.jpg"
              alt="background"
            />
          </picture>
          <div className="overflow">
            <div className="redux_items">
              <Container>
                <Grid container spacing={2} className="hightVh">
                  <Grid item lg={4}>
                    <div className="redux_content">
                      <div className="text_filde_area">
                        <p>Destination From</p>
                        <FormControl fullWidth>
                          <InputLabel id="demo-select-small">
                            Please Select
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Please Select"
                            value={info.country}
                            name="country"
                            onChange={handleChange}
                          >
                            <MenuItem value={false}>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="Pakistan">Pakistan</MenuItem>
                          </Select>
                        </FormControl>
                        <div className="error">
                          <h1>{error}</h1>
                        </div>
                      </div>
                      <div className="text_filde_area gap">
                        <p>Destination To</p>
                        <FormControl fullWidth>
                          <InputLabel id="demo-select-small">
                            Please Select
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Please Select"
                            value={info.districk}
                            name="districk"
                            onChange={handleChange}
                          >
                            <MenuItem value={false}>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="Dhaka">Dhaka</MenuItem>
                            <MenuItem value="Kolkata">Kolkata</MenuItem>
                            <MenuItem value="Islamabad">Islamabad</MenuItem>
                          </Select>
                        </FormControl>
                        <div className="error">
                          <h1>{errorOne}</h1>
                        </div>
                      </div>
                      <div className="text_filde_area gap">
                        <p>Journey Date</p>

                        <TextField
                          fullWidth
                          variant="outlined"
                          type="date"
                          value={info.date}
                          label=""
                          name="date"
                          onChange={handleChange}
                        />
                        <div className="error">
                          <h1>{errorTwo}</h1>
                        </div>
                      </div>
                      <div className="text_filde_area gap">
                        <p>Guests</p>
                        <FormControl fullWidth>
                          <InputLabel id="demo-select-small">
                            Please Select
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Please Select"
                            name="guests"
                            value={info.guests}
                            onChange={handleChange}
                          >
                            <MenuItem value={false}>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Meduim">Meduim</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                          </Select>
                        </FormControl>
                        <div className="error">
                          <h1>{errorThree}</h1>
                        </div>
                      </div>
                      <div className="text_filde_area gap">
                        <p>Class Name</p>
                        <FormControl fullWidth>
                          <InputLabel id="demo-select-small">
                            Please Select
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Please Select"
                            value={info.className}
                            name="className"
                            onChange={handleChange}
                          >
                            <MenuItem value={false}>
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="First Class">First Class</MenuItem>
                            <MenuItem value="Second Class">
                              Second Class
                            </MenuItem>
                            <MenuItem value="Therd Class">Therd Class</MenuItem>
                          </Select>
                        </FormControl>
                        <div className="error">
                          <h1>{errorFour}</h1>
                        </div>
                      </div>
                      <div className="text_filde_area gap">
                        <Button
                          onClick={handleButton}
                          variant="contained"
                          color="success"
                          fullWidth
                        >
                          + Book
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={8}>
                    {stor && (
                      <div className="redux_content border">
                        <Grid container spacing={1}>
                          <Grid item lg={3}>
                            <div className="redux_output border">
                              <div className="redux_hadding">
                                <h1>Destination Form</h1>
                              </div>
                              {selector.map((i, k) => (
                                <div className="redux_text" key={k}>
                                  <p>{i.country}</p>
                                </div>
                              ))}
                            </div>
                          </Grid>
                          <Grid item lg={2}>
                            <div className="redux_output border">
                              <div className="redux_hadding">
                                <h1>Districk</h1>
                              </div>
                              {selector.map((i, k) => (
                                <div className="redux_text" key={k}>
                                  <p>{i.districk}</p>
                                </div>
                              ))}
                            </div>
                          </Grid>
                          <Grid item lg={2}>
                            <div className="redux_output border">
                              <div className="redux_hadding">
                                <h1>Date</h1>
                              </div>
                              {selector.map((i, k) => (
                                <div className="redux_text" key={k}>
                                  <p>{i.date}</p>
                                </div>
                              ))}
                            </div>
                          </Grid>
                          <Grid item lg={2}>
                            <div className="redux_output border ">
                              <div className="redux_hadding">
                                <h1>Guests</h1>
                              </div>
                              {selector.map((i, k) => (
                                <div className="redux_text" key={k}>
                                  <p>{i.guests}</p>
                                </div>
                              ))}
                            </div>
                          </Grid>
                          <Grid item lg={2}>
                            <div className="redux_output border">
                              <div className="redux_hadding">
                                <h1>className</h1>
                              </div>
                              {selector.map((i, k) => (
                                <div className="redux_text" key={k}>
                                  <p>{i.className}</p>
                                </div>
                              ))}
                            </div>
                          </Grid>
                          <Grid item lg={1}>
                            <div className="redux_output center">
                              <div className="redux_hadding">
                                <h1>delete</h1>
                              </div>
                              {selector.map((i, k) => (
                                <div className="redux_text center" key={k}>
                                  {i && (
                                    <AiFillDelete
                                      onClick={() => handleDelete(k)}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
