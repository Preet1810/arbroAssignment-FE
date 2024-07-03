'use client'
import { useFormik, FieldArray, ErrorMessage, Form, Field } from 'formik';
import { studentValidationSchema } from '@/lib/formvalidation';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useCreateStudentMutation } from '@/redux/api/studentapi';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import ButtonLoader from '../ui/loaders/ButtonLoader';
const NewStudent=() => {

    const [createStudent, { isLoading, error, isSuccess }]=useCreateStudentMutation();

    const router=useRouter();
    //certificate info
    const [certificateTitle, setCertificateTitle]=useState("");
    const [certificateInstitution, setCertificateInstitution]=useState("");

    //family member info
    const [familyMemberName, setFamilyMemberName]=useState("");
    const [relation, setRelation]=useState("");


    const handleAdd=(fieldName, value) => {
        formik.setValues({
            ...formik.values,
            [fieldName]: [...formik.values[fieldName], value]
        });
    };

    const handleDelete=(fieldName, index) => {
        const updatedArr=[...formik.values[fieldName]];
        updatedArr.splice(index, 1);
        formik.setValues({
            ...formik.values,
            [fieldName]: updatedArr
        });
    };

    const initialValues={
        name: "",
        fatherName: "",
        motherName: "",
        email: "",
        address: {
            addressLine1: "",
            city: "",
            state: "",
            pincode: null
        },
        familyMembers: [],
        certifications: [],
    };

    const formik=useFormik({
        initialValues: initialValues,
        validationSchema: studentValidationSchema,
        onSubmit: async (values) => {
            try {
                const student=await createStudent(values);
                toast.success("Student Saved Successfully!");
                router.push("/")
            } catch (error) {
                toast.error("Something Went Wrong")
            }
        },
    });

    useEffect(() => {
        console.log("errors: ", formik.errors)
        console.log("touched: ", formik.touched)
        console.log("values: ", formik.values)
    }, [formik.errors, formik.touched, formik.values])

    return (
        <>
            <h1 className='text-4xl font-bold '>New Student Form</h1>
            <form className='space-y-3 overflow-y-auto' onSubmit={formik.handleSubmit}>
                <h2 className='text-2xl font-bold '>Personal Details</h2>
                <div className='flex gap-x-10'>
                    <div className='flex flex-col gap-y-1 w-full'>
                        <Label className="text-lg font-semibold" htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Name"
                        />
                        {formik.errors.name&&formik.touched.name&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.name}</p>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-1 w-full'>
                        <Label className="text-lg font-semibold" htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="email@gmail.com"
                        />
                        {formik.errors.email&&formik.touched.email&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.email}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex gap-x-10'>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="fatherName">Father Name</Label>
                        <Input
                            id="fatherName"
                            name="fatherName"
                            value={formik.values.fatherName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="fatherName"
                        />
                        {formik.errors.fatherName&&formik.touched.fatherName&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.fatherName}</p>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="motherName">Mother Name</Label>
                        <Input
                            id="motherName"
                            name="motherName"
                            value={formik.values.motherName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="motherName"
                        />
                        {formik.errors.motherName&&formik.touched.motherName&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.motherName}</p>
                            </div>
                        )}
                    </div>
                </div>
                <h2 className='text-2xl font-bold '>Address Details</h2>
                <div className='flex gap-x-10'>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="addressLine1">Address Line 1</Label>
                        <Input
                            id="addressLine1"
                            name="address.addressLine1"
                            value={formik.values.addressLine1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="addressLine1"
                        />
                        {formik.errors?.address?.addressLine1&&formik.touched.address?.addressLine1&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.address.addressLine1}</p>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="city">City</Label>
                        <Input
                            id="city"
                            name="address.city"
                            value={formik.values.address.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="city"
                        />
                        {formik.errors?.address?.city&&formik.touched.address?.city&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.address.city}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex gap-x-10'>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="state">State</Label>
                        <Input
                            id="state"
                            name="address.state"
                            value={formik.values.address.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="state"
                        />
                        {formik.errors?.address?.state&&formik.touched.address?.state&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.address.state}</p>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="pincode">Pincode</Label>
                        <Input
                            id="pincode"
                            name="address.pincode"
                            value={formik.values.address.pincode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="number"
                            placeholder="pincode"
                        />
                        {formik.errors?.address?.pincode&&formik.touched?.address?.pincode&&(
                            <div className='mt-2'>
                                <p className="text-red-600 mt-[-6px] ml-[6px] font-semibold text-sm">{formik.errors.address.pincode}</p>
                            </div>
                        )}
                    </div>
                </div>
                <h2 className='text-2xl font-bold '>Add Family Members</h2>
                <div className='flex gap-x-10 items-center'>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="memberName">Member Name</Label>
                        <Input
                            id="memberName"
                            name="memberName"
                            value={familyMemberName}
                            onChange={(input) => setFamilyMemberName(input.target.value)}
                            type="text"
                            placeholder="familyMemberName"
                        />
                    </div>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="relationship">Relationship</Label>
                        <Input
                            id="relationship"
                            name="relationship"
                            value={relation}
                            onChange={(input) => setRelation(input.target.value)}
                            type="text"
                            placeholder="Relationship"
                        />
                    </div>
                </div>
                <Button
                    onClick={() => handleAdd("familyMembers", { "name": familyMemberName, "relationship": relation })}
                    type="button">
                    Add Member
                </Button>
                <div className='flex flex-wrap gap-x-6 gap-y-3'>
                    {formik.values.familyMembers.map((member, index) => (
                        <div
                            onClick={() => handleDelete("familyMembers", index)}
                            key={index}
                            className="bg-white p-2 rounded-md relative">
                            <div
                                className="absolute right-[-10px] top-[-8px] bg-black rounded-full p-1 cursor-pointer">
                                <RxCross2 className="text-white" />
                            </div>
                            <p>Member Name : {member.name}</p>
                            <p>Relation : {member.relationship}</p>
                        </div>
                    ))}
                </div>
                <h2 className='text-2xl font-bold '>Add Certifications</h2>
                <div className='flex gap-x-10 items-center'>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="title">Certificate Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={certificateTitle}
                            onChange={(input) => setCertificateTitle(input.target.value)}
                            type="text"
                            placeholder="Certificate Title"
                        />
                    </div>
                    <div className='flex flex-col gap-y-1  w-full'>
                        <Label className="text-lg font-semibold" htmlFor="institution">Institution Name</Label>
                        <Input
                            id="institution"
                            name="institution"
                            value={certificateInstitution}
                            onChange={(input) => setCertificateInstitution(input.target.value)}
                            type="text"
                            placeholder="Institution Name"
                        />
                    </div>
                </div>
                <Button
                    onClick={() => handleAdd("certifications", { "title": certificateTitle, "institution": certificateInstitution })}
                    type="button">
                    Add Certificate
                </Button>
                <div className='flex flex-wrap gap-x-6 gap-y-3'>
                    {formik.values.certifications.map((certification, index) => (
                        <div
                            onClick={() => handleDelete("certifications", index)}
                            key={index}
                            className="bg-white p-2 rounded-md relative">
                            <div
                                className="absolute right-[-10px] top-[-8px] bg-black rounded-full p-1 cursor-pointer">
                                <RxCross2 className="text-white" />
                            </div>
                            <p>Title : {certification.title}</p>
                            <p>Institution : {certification.institution}</p>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center pb-5'>
                    <Button className="" type="submit">
                        {isLoading? (
                            <ButtonLoader />
                        ):<p>Save Student</p>}
                    </Button>
                </div>
            </form>
        </>
    )
}

export default NewStudent