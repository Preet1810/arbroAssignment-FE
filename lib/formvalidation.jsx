import * as Yup from 'yup';

const addressSchema=Yup.object().shape({
    addressLine1: Yup.string().required('Address line 1 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.number()
        .required('Pincode is required')
        .min(100000, 'Pincode must be at least 6 digits')
        .max(999999, 'Pincode must be at most 6 digits')
});

const familyMemberSchema=Yup.object().shape({
    name: Yup.string().required('Family member name is required'),
    relationship: Yup.string().required('Relationship is required'),
});

const certificationSchema=Yup.object().shape({
    title: Yup.string().required('Title is required'),
    institution: Yup.string().required('Institution is required'),
});

export const studentValidationSchema=Yup.object().shape({
    name: Yup.string().required('Name is required'),
    fatherName: Yup.string().required('Father\'s name is required'),
    motherName: Yup.string().required('Mother\'s name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: addressSchema,
    familyMembers: Yup.array().of(familyMemberSchema).required('Family members are required'),
    certifications: Yup.array().of(certificationSchema).required('Certifications are required')
});

