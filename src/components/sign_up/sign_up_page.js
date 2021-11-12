import React from "react";
import "./sign_up.css";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email";
  }
  if (values.password.length < 8) {
    errors.password = "Min length should be 8";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password mismatch";
  }
  return errors;
};

//default return func
export default function SignUp(props) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validate,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      !(
        formik.errors.name ||
        formik.errors.email ||
        formik.errors.password ||
        formik.errors.confirmPassword
      )
    ) {
      //if all field are validated send request to backend

      try {
        const res = await axios.post(
          process.env.REACT_APP_URL + "user/signUP",
          formik.values
        );
        console.log(res.status);
        if (res.status === 201) {
          //on successfully sign up
          navigate("/sign-in", { replace: true });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //jsx
  return (
    <div id='sign_up_page'>
      <div id='left'>
        <Link to='/'>BlogSite</Link>
      </div>
      <form id='form' onSubmit={handleFormSubmit}>
        <div id='welcome'>Create Account</div>
        <div>
          <FiUser fontSize='20px' />
          <input
            type='text'
            placeholder='Enter Name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            autoFocus
          />
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <FiMail fontSize='20px' />
          <input
            type='text'
            placeholder='Email'
            formNoValidate
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <FiLock fontSize='20px' />
          <input
            type='password'
            placeholder='Enter Password'
            formNoValidate
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className='error'>{formik.errors.password}</div>
          )}
        </div>
        <div>
          <FiLock fontSize='20px' />
          <input
            type='password'
            placeholder='Confirm Password'
            formNoValidate
            name='confirmPassword'
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className='error'>{formik.errors.confirmPassword}</div>
          )}
        </div>
        <button id='btn_sign_up'>Continue</button>
        <span>
          Already Member?<Link to='/sign-in'>Login</Link>
        </span>
      </form>
    </div>
  );
}

/*







  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const navigate = useNavigate();
  //state for handle form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //field for error validation
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  //handling form change
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(name === "");
    console.log(name, nameError);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!re.test(String(email).toLowerCase()));
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(password.length < 8);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError(
      confirmPassword !== password || confirmPassword.length < 8
    );
  };

  //handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(nameError, emailError, passwordError, confirmPasswordError);
    if (
      nameError === false &&
      passwordError === false &&
      confirmPasswordError === false &&
      emailError === false
    ) {
      try {
        const res = await axios.post(
          process.env.REACT_APP_URL + "user/signUP",
          {
            name,
            password,
            email,
          }
        );
        console.log(res.status);
        if (res.status === 201) {
          //on successfully sign up
          navigate("/sign-in", { replace: true });
        }
      } catch (err) {
        console.log(err);
      }
      console.log("true");
    }
  };




*/
