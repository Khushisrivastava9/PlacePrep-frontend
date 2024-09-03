import React, { useEffect } from "react";
import "./resourcestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ResourceData } from "../../context/ResourceContext";
import { server } from "../../main";

const ResourceStudy = ({ user }) => {
  const params = useParams();
  const { fetchResource, resource } = ResourceData();
  useEffect(() => {
    fetchResource(params.id);
  }, []);
  return (
    <>
      {resource && (
        <div className="resource-study-page">
          <img src={`${server}/${resource.image}`} alt="" width={350} />
          <h2>{resource.title}</h2>
          <h4>{resource.description}</h4>
          <h5>by - {resource.createdBy}</h5>
          <Link to={`/lectures/${resource._id}`}>
            <h2>Lectures</h2>
          </Link>
          <Link to={`/pdfs/${resource._id}`}>
            <h2>PDFs</h2>
          </Link>
        </div>
      )}
    </>
  );
}; 
export default ResourceStudy;