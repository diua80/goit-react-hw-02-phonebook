import * as Yup from 'yup';
import { Component } from 'react';
// import { object, string, number, date, InferType } from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  StyledBtn,
  StyledLable,
  StyledInput,
} from './ContactForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    // .matches(
    //   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    //   'Invalid name format'
    // )
    .required('Name is required'),
});
//  const SignupSchema = Yup.object().shape({
//    name: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//      tel: Yup.number()
//      .positive('Must be > 0')
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//   search: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!'),
//  });
export class ContactForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          // tel: '',
          // search: '',
        }}
        validationSchema={validationSchema}

        onSubmit={(values, {resetForm}) => {
        this.props.addContact({ ...values, id: Date.now() });
          resetForm();
        }}
    >
      <StyledForm>
        <StyledLable>
          Name
          <StyledInput name="name" placeholder="Abonent's name..." />
        </StyledLable>

        {/* <StyledLable>
          Phone
          <StyledInput name="tel" placeholder="Phone..." />
        </StyledLable>

        <StyledLable>
          Search
          <StyledInput name="search" placeholder="Name/phone..." />
        </StyledLable> */}
        <ErrorMessage name="name" component="div" className="error" />
        <StyledBtn type="submit">Submit</StyledBtn>
      </StyledForm>
    </Formik>
  );
  }
};
