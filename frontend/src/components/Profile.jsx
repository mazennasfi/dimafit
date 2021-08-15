import React, { useState } from "react";
import AthleteService from "../services/athlete.service";

const Profile = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: { name: null },
    weight: null,
    height: null,
    birthDate: new Date(),
    diseases: "",
  });

  const [openedDiseasesList, setOpenedDiseasesList] = useState(false);
  const openDiseaseList = () => setOpenedDiseasesList(true);
  const closeDiseaseList = () => setOpenedDiseasesList(false);

  const handleInput = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const updateUserData = (e) => {
    e.preventDefault();
    AthleteService.updateUser(props.userId, user).then(
      (response) => {},
      (error) => {}
    );
    setUser({
      firstName: "",
      lastName: "",
      gender: { name: null },
      weight: null,
      height: null,
      birthDate: new Date(),
      diseases: "",
    });
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl  font-medium text-primary mt-4 mb-12 text-center">
          Personal Info
        </h1>
        <br />
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-gray-400 text-lg	 font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder=" First Name"
            id="firstName"
            value={user.firstName}
            onChange={handleInput}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <br />
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-gray-400 text-lg	 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder=" Last Name"
            id="lastName"
            value={user.lastName}
            onChange={handleInput}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <br />
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-gray-400 text-lg	 font-bold mb-2">
            Gender
          </label>
          <label className="inline-flex items-center mt-3 mr-2">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              name="gender"
              //value={user.gender}
              onClick={() => setUser({ ...user, gender: { name: "MALE" } })}
              //onChange={handleInput}
            />
            <span className="ml-2 text-gray-700 cursor-pointer">Male</span>
          </label>

          <label className="inline-flex items-center mt-3 mr-2">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              name="gender"
              //value={user.gender}
              onClick={() => setUser({ ...user, gender: { name: "FEMALE" } })}
              //onChange={handleInput}
            />
            <span className="ml-2 text-gray-700 cursor-pointer">Female</span>
          </label>

          <label className="inline-flex items-center mt-3 mr-2">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
              name="gender"
              //value={user.ender}
              onClick={() => setUser({ ...user, gender: { name: "OTHER" } })}
              //onChange={handleInput}
            />
            <span className="ml-2 text-gray-700 cursor-pointer">Other</span>
          </label>
        </div>
        <br />
        <div>
          <label className="block text-gray-400 text-lg	 font-bold mb-2">
            Birthdate
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            value={user.birthDate}
            onChange={handleInput}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <br />

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-gray-400 text-lg	 font-bold mb-2"
          >
            Weight
          </label>
          <input
            type="number"
            name="weight"
            placeholder=" Weight (Kg)"
            id="weight"
            value={user.weight}
            onChange={handleInput}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <br />
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-gray-400 text-lg	 font-bold mb-2"
          >
            Height
          </label>
          <input
            type="number"
            name="height"
            placeholder=" Height (M)"
            value={user.height}
            onChange={handleInput}
            id="height"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

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
            <input
              type="text"
              name="diseases"
              placeholder=" Chronic diseases..."
              id="diseases"
              value={user.diseases}
              onChange={handleInput}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          ) : null}
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={updateUserData}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
