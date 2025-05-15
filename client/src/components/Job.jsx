import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import Jobinfo from "./Jobinfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  JobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  console.log(JobLocation)
  const date = day(createdAt).format("MMM Do YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <Jobinfo icon={<FaLocationArrow />} text={JobLocation} />
          <Jobinfo icon={<FaCalendarAlt />} text={date} />
          <Jobinfo icon={<FaBriefcase />} text={jobType} />

          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer className="actions">
          <Link  to ={`../edit-job/${_id}`} className="btn edit-btn">Edit</Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            {" "}
            <button type="submit" className="btn delete-btn">
              delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
