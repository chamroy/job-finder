import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { StatItem } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/"); //I have remove (/app-stats)
    return response.data;
  } catch (error) {
    toast.error("you are not authorized to view this page, buddy!");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        icon={<FaSuitcaseRolling />}
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
      />
      <StatItem
        icon={<FaCalendarCheck />}
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
      />
    </Wrapper>
  );
};

export default Admin;
