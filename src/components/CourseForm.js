import React from "react";
import TextInput from "./common/TextInput";
import Select from "./common/Select";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title}
      />

      <Select
        id="author"
        name="authorId"
        value={props.course.authorId}
        onChange={props.onChange}
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
