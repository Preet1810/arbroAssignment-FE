"use client"
import { useLazyGetStudentDetailsQuery } from "@/redux/api/studentapi"
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
const StudentInfo=() => {
    const { studentid }=useParams();
    const [getStudent, { error, isLoading, data }]=useLazyGetStudentDetailsQuery();


    useEffect(() => {
        getStudent(studentid);
    }, [studentid])
    return (
        <>
            <h1 className='text-4xl font-bold '>Student Information</h1>
            <div className='space-y-3 overflow-y-auto'>
                <h2 className='text-2xl font-bold '>Personal Details</h2>
                <div className='flex md:flex-row flex-col gap-x-10 gap-y-3'>
                    <div className='flex flex-col gap-y-1 w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={data?.result.name}
                            type="text"
                            disabled={true}
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={data?.result.email}
                            type="text"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-y-3 gap-x-10'>
                    <div className='flex flex-col gap-y-1  w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="fatherName">Father Name</Label>
                        <Input
                            id="fatherName"
                            name="fatherName"
                            value={data?.result.fatherName}
                            type="text"
                            disabled={true}
                        />

                    </div>
                    <div className='flex flex-col gap-y-1  w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="motherName">Mother Name</Label>
                        <Input
                            id="motherName"
                            name="motherName"
                            value={data?.result.motherName}
                            type="text"
                            disabled={true}
                        />
                    </div>
                </div>
                <h2 className='text-2xl font-bold '>Address Details</h2>
                <div className='flex md:flex-row flex-col gap-y-3 gap-x-10'>
                    <div className='flex flex-col gap-y-1  w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="addressLine1">Address Line 1</Label>
                        <Input
                            id="addressLine1"
                            name="address.addressLine1"
                            value={data?.result.address.addressLine1}
                            type="text"
                            disabled={true}

                        />
                    </div>
                    <div className='flex flex-col gap-y-1  w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="city">City</Label>
                        <Input
                            id="city"
                            name="address.city"
                            value={data?.result.address.city}
                            type="text"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-y-3 gap-x-10'>
                    <div className='flex flex-col gap-y-1  w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="state">State</Label>
                        <Input
                            id="state"
                            name="address.state"
                            value={data?.result.address.state}
                            type="text"
                            disabled={true}
                        />

                    </div>
                    <div className='flex flex-col gap-y-1  w-full px-3'>
                        <Label className="text-lg font-semibold" htmlFor="pincode">Pincode</Label>
                        <Input
                            id="pincode"
                            name="address.pincode"
                            value={data?.result.address.pincode}
                            type="number"
                            disabled={true}
                        />
                    </div>
                </div>
                <h2 className='text-2xl font-bold '>Family Members</h2>

                <div className='flex flex-wrap gap-x-6 gap-y-3 ml-3'>
                    {data?.result.familyMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white p-2 rounded-md relative">

                            <p>Member Name : {member.name}</p>
                            <p>Relation : {member.relationship}</p>
                        </div>
                    ))}
                </div>
                <h2 className='text-2xl font-bold '>Certifications</h2>

                <div className='flex flex-wrap gap-x-6 gap-y-3 ml-3'>
                    {data?.result.certifications.map((certification, index) => (
                        <div
                            key={index}
                            className="bg-white p-2 rounded-md relative">

                            <p>Title : {certification.title}</p>
                            <p>Institution : {certification.institution}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default StudentInfo