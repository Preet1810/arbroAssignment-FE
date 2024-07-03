'use client'

import StudentsColumns from "./StudentsColumns"
import { useGetStudentsQuery } from "@/redux/api/studentapi"
import DataTable from "../ui/DataTable"
import { useState, useEffect } from "react"
const AllStudents=() => {
    const { isLoading, data }=useGetStudentsQuery();
    const [students, setStudents]=useState([]);


    useEffect(() => {
        if (!isLoading&&data?.result) {
            setStudents(data?.result)
        }
    }, [data])
    return (
        <DataTable className="max-h-[500px] h-full overflow-y-scroll" data={students} columns={StudentsColumns()} />
    );

}

export default AllStudents