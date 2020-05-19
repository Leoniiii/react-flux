import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => (
  <>
    <Prompt when={true} message="Are you sure" />
    <h2>Manage Course</h2>

    {props.match.params.test}
  </>
);
export default ManageCoursePage;
