import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { addMessage } from "./actions";

interface IFormProps {
  handleSubmit: (event: any) => {};
  addMessage: () => {};
}

interface IError {
  [key: string]: any;
}

class Form extends React.Component<IFormProps> {
  public render() {
    return (
      <div className="Form">
        <div className="top">
          <h3>Add a Message</h3>
          <Link to="/">Back</Link>
        </div>
        <form
        // onSubmit={this.props.handleSubmit((event: any) =>
        //   this.onSubmit(event)
        // )}
        >
          <Field
            myLabel="Enter Title"
            name="title"
            component={this.renderInputField}
          />

          <Field
            myLabel="Enter name"
            name="from"
            component={this.renderInputField}
          />

          <Field
            myLabel="Enter message"
            name="message"
            component={this.renderTextareaField}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  // PRISTINE / DIRTY // TOUCHED / ERROR

  private renderInputField(field: any) {
    const className = `form-input ${
      field.meta.touched && field.meta.error ? "has-error" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.myLabel}</label>
        <input type="text" {...field.input} />
        <div className="error">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  private renderTextareaField(field: any) {
    const className = `form-input ${
      field.meta.touched && field.meta.error ? "has-error" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.myLabel}</label>
        <textarea {...field.input} />
        <div className="error">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  // private onSubmit(values: any) {
  //   this.props.addMessage(values, () => {
  //     // this.props.history.push('/')
  //   });
  // }
}

function validate(values: any) {
  const errors: IError = {};

  if (!values.title) {
    errors.title = "The title is empty";
  }

  if (!values.from) {
    errors.from = "The title is empty";
  }

  if (!values.message) {
    errors.message = "The title is empty";
  }

  return errors;
}

function mapStateToProps(state: any) {
  console.log(state);
  return {
    success: state.data
  };
}

export default reduxForm({
  form: "PostMessage",
  validate
})(
  connect(
    mapStateToProps,
    { addMessage }
  )(Form)
);
