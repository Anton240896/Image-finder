import { Formik } from 'formik';
import * as Yup from 'yup';
import { RiSearchLine } from 'react-icons/ri';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchBar,
} from './SearchBar.styled';

const Schema = Yup.object().shape({
  query: Yup.string().min(1).max(50).required('Enter your request!'),
});

export const SearchBarContainer = ({ onSubmit }) => (
  <SearchBar>
    <Formik
      initialValues={{
        query: '',
      }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        console.log(values);
        onSubmit(values.query);
        actions.resetForm();
      }}
    ></Formik>

    <SearchForm>
      <SearchFormButton type="submit">
        <RiSearchLine />
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="query"
        placeholder="Search images and photos..."
      />
    </SearchForm>
  </SearchBar>
);
