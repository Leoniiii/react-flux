import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
  }

  return (
    <>
      <Prompt when={true} message="Are you sure" />
      <h2>Manage Course</h2>
      <CourseForm course={course} handleTitleChange={handleChange} />
    </>
  );
};
export default ManageCoursePage;
