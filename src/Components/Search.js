import React, { useState } from "react";
import { STUDENTS } from "../studentsList";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  console.log("Joining Date : " + joiningDate);
  console.log("Validity Date : " + validityDate);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search() {
  //   const [student, setStudent] = useState();
  //   const [data, setData] = useState({
  //     name: "",
  //     date: "",
  //   });

  //   function checkStudent({ name, date }) {
  //     let studentData;
  //     studentData = STUDENTS.filter((item) => item.name.includes(name));
  //     if (studentData.length) {
  //       setStudent(studentData[0]);
  //       let valid;
  //       valid = checkValidity(date, studentData[0].validityDate);
  //       if (valid) {
  //         console.log("Yes valid");
  //       } else {
  //         console.log("Not valid");
  //       }
  //     } else {
  //       console.log("No Data.");
  //     }
  //   }

  //   const handleChange = (event) => {
  //     const value = event.target.value;

  //     setData({
  //       ...data,
  //       [event.target.name]: value,
  //     });
  //     console.log(data);
  //   };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            name="name"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            name="date"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button type="button" data-testid="addBtn" className="small mb-0">
        Add
      </button>
    </div>
  );
}

export default Search;
