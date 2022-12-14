import * as Yup from 'yup';

export const ProductValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters'),
  price: Yup.number()
    .typeError('Amount must be a number')
    .required('Price is required')
    .min(1, 'Price must be at least 1'),
  description: Yup.string().required('Description is required'),
  
  category: Yup.string()
  .required('Category is required'),
  
  developerEmail: Yup.string()
  .required('Email is required')
  .min(3, 'Email must be at least 3 characters')
  .max(50, 'Email must be less than 50 characters'),
});
