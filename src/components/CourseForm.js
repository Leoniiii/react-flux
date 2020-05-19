import React from "react";
import TextInput from "./common/TextInput";
import Select from "./common/Select";

function CourseForm(props) {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
      />

      <Select
        id="author"
        name="authorId"
        value={props.course.authorId}
        onChange={props.onChange}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
