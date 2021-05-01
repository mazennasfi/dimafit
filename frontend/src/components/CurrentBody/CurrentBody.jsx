import React, { useState } from "react";
import Input from "../UI/Input/Input";

function CurrentBody() {
  let sexes = ["Male", "Female", "Other"];
  const [openedDiseasesList, setOpenedDiseasesList] = useState(false);
  const [disease, setDisease] = useState("");

  const openDiseaseList = () => setOpenedDiseasesList(true);
  const closeDiseaseList = () => {
    setOpenedDiseasesList(false);
  };
  const classes = {
    pageBody: "h-screen flex bg-gray-bg1",
    formContainer:
      "w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
  };
  return (
    <div className={classes.pageBody}>
      <div className={classes.formContainer}>
        <h1 className={classes.formHeading}>Description</h1>
        <Input
          label="Enter your Age"
          inputtype="input"
          type="text"
          name="age"
          placeholder="Your Age"
        />
        <Input label="Select your Sex" inputtype="radio" values={sexes} />
        <Input
          label="Enter your Weight"
          inputtype="input"
          type="number"
          name="weight"
          placeholder="Your Weight (Kg)"
        />
        <Input
          label="Enter your height"
          inputtype="input"
          type="number"
          name="height"
          placeholder="Your Height (m)"
        />
        <div>
          <label>Do you have a chronic disease? </label>
          <button onClick={openDiseaseList}>Yes</button>
          <button onClick={closeDiseaseList}>No</button>
          {openedDiseasesList ? (
            <div>
              <label for="disease1"> Diabetes</label>
              <input type="checkbox" value="Bike" />
              <br></br>
              <label for="disease2"> Heart disease</label>
              <input type="checkbox" value="Bike" />
              <br></br>
              <label for="disease3"> Cancer</label>
              <input type="checkbox" value="Bike" />
              <br></br>
              <Input
                label="Enter your diseases list"
                inputtype="input"
                type="text"
                name="contagiousdiseases"
                placeholder="Do you have any contagious diseases"
              />
            </div>
          ) : null}
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded">
            Validate Informations
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentBody;
