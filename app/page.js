import AllStudents from "@/components/students/AllStudents";
import { Button } from "@/components/ui/button"
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
export default function Home() {
  return (
    <div className='flex flex-col gap-y-6 rounded-2xl shadow-2xl h-[calc(100vh-100px)] px-5 pt-8 bg-white bg-opacity-55'>
      <div className="flex items-center justify-between  px-2">
        <h1 className="font-bold text-2xl text-[#2b2b2b]">Students</h1>
        <Button asChild >
          <Link className="space-x-3" href="/student/newstudent">
            <p>Add Student</p>
            <IoIosAddCircle className="text-2xl" />
          </Link>
        </Button>
      </div>
      <AllStudents />
    </div>
  );
}
