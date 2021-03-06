import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import { activeProject } from "../../actions/project";

export const ProjectEntry = ({ id, title, type, date }) => {
  const dispatch = useDispatch();
  const url =
    "data:image/png;base64,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";

  const proDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeProject(id, { title, type, date }));
  };

  return (
    <div
      className="d-flex justify-content-between bg-light rounded-3 text-dark entry animate__animated animate__fadeIn"
      onClick={handleEntryClick}
    >
      <div
        className="entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className="p-3">
        <p className="fs-6 fw-bolder">{title}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center p-1 entry-date-box">
        <span>{proDate.format("dddd")}</span>
        <h4>{proDate.format("Do")}</h4>
      </div>
    </div>
  );
};
