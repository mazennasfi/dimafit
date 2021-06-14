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
          inputtype="input"
          type="number"
          name="age"
          placeholder="  Age (Years)"
        />
        <br />

        <Input
          inputtype="input"
          type="number"
          name="weight"
          placeholder=" Weight (Kg)"
        />
        <br />

        <Input
          inputtype="input"
          type="number"
          name="height"
          placeholder=" Height (M)"
        />
        <br />

        <Input label="Gender" inputtype="radio" values={sexes} />
        <div>
          <br />
          <label className="block text-gray-400 text-lg	 font-bold mb-2">
            Do you have a chronic disease?
          </label>

          <label
            className="inline-flex items-center mt-3 mr-2"
            onClick={openDiseaseList}
          >
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              name="disease"
            />
            <span className="ml-2 text-gray-700 cursor-pointer">Yes</span>
          </label>

          <label
            className="inline-flex items-center mt-3 cursor-pointer"
            onClick={closeDiseaseList}
          >
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600 "
              name="disease"
            />
            <span className="ml-2 text-gray-700 cursor-pointer">No</span>
          </label>
          <br />
          {openedDiseasesList ? (
            <div>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center mt-3 mr-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
                      />
                      <span className="ml-2 text-gray-700 cursor-pointer">
                        Diabetes
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3 mr-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
                      />
                      <span className="ml-2 text-gray-700 cursor-pointer">
                        Heart disease
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3 mr-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
                      />
                      <span className="ml-2 text-gray-700 cursor-pointer">
                        Cancer
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <Input
                inputtype="input"
                type="text"
                name="contagiousdiseases"
                placeholder="Other chronic diseases..."
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
