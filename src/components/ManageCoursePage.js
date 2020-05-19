import React from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => (
  <>
    <Prompt when={true} message="Are you sure" />
    <h2>Manage Course</h2>
    <CourseForm />
  </>
);
export default ManageCoursePage;
