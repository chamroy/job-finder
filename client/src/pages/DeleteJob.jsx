import { param } from "express/lib/router"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"
import { redirect } from "react-router"

export const action = async({params}) => {
  
  try {

    await customFetch.delete(`/jobs/${params.id}`)
    toast.success('Job deleted successfully')
    
  } catch (error) {

    toast.error(error?.response?.data?.message)
    
  }
  return redirect('/dashboard/all-jobs')
}


const DeleteJob = () => {
  return (
    <h1>DeleteJob</h1>
  )
}

export default DeleteJob