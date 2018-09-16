import * as Joi from "joi";
import * as React from "react";
import { IErrors } from "../modules";
import auth from "../services/authService";
import Input from "./common/input";

// interface ILoginFormProps {
//   history: any;
//   location: any;
//   match: any;
// }

interface ILoginFormState {
  data: {
    password: string;
    username: string;
  };
  errors: IErrors;
}

class LoginForm extends React.Component<any, ILoginFormState> {
  private schema = {
    password: Joi.string()
      .required()
      .label("Password"),
    username: Joi.string()
      .required()
      .label("Username")
  };

  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        password: "",
        username: ""
      },
      errors: {}
    };
  }

  public render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={!!this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }

  private handleSubmit = async (event: any) => {
    event.preventDefault();

    // call the server
    // save the changes
    // redirect user to different pages

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }

    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorsBack = { ...this.state.errors };
        errorsBack.username = error.response.data;
        this.setState({ errors: errorsBack });
      }
    }
  };

  private handleChange = (event: any) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event);
    if (errorMessage) {
      errors[event.currentTarget.name] = errorMessage;
    } else {
      delete errors[event.currentTarget.name];
    }

    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ data, errors });
  };

  private validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) {
      return null;
    }

    const errors = {};
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  private validateProperty = (event: any) => {
    const { name, value } = event.currentTarget;

    const obj = { [name]: value };

    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };
}

export default LoginForm;
