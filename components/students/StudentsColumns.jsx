'use client'
import { MdDelete } from "react-icons/md";
import { useDeleteStudentMutation } from "@/redux/api/studentapi";
import ButtonLoader from "../ui/loaders/ButtonLoader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";

const StudentsColumns=() => {
    const [deleteStudent, { isLoading: isDeleteLoading, error: deleteError, isSuccess }]=useDeleteStudentMutation();
    const router=useRouter()

    const handleDelete=async (_id) => {
        try {
            await deleteStudent(_id).unwrap();
            toast.success("Student deleted successfully");
        } catch (err) {
            toast.error("Failed to delete student");
        }
    };

    const columns=[
        {
            accessorKey: 'name',
            header: 'Name'
        },
        {
            accessorKey: 'email',
            header: 'Email'
        },
        {
            accessorKey: 'fatherName',
            header: 'Father Name'
        },
        {
            accessorKey: '_id',
            header: () => <div className="text-center">Action</div>,
            cell: ({ row }) => {
                const _id=row.getValue('_id');
                return (
                    <div className='flex items-center justify-center gap-x-4'>
                        {isDeleteLoading? (
                            <ButtonLoader />
                        ):(
                            <MdDelete
                                onClick={() => handleDelete(_id)}
                                className='cursor-pointer text-2xl text-red-500' />
                        )}
                        <FaEye
                            onClick={() => router.push(`/student/${_id}`)}
                            className="text-2xl text-blue-500 cursor-pointer" />
                    </div>
                );
            }
        },
    ];
    return columns;
}

export default StudentsColumns;
