import React from "react";
import "./resourceCard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { ResourceData } from "../../context/ResourceContext";

const ResourceCard = ({ resource }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  const { fetchResources } = ResourceData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this resource")) {
      try {
        const { data } = await axios.delete(`${server}/api/resource/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchResources();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="resource-card">
      <img src={`${server}/${resource.image}`} alt="" className="resource-image" />
      <h3>{resource.title}</h3>
      <p>Instructor- {resource.createdBy}</p>
      {isAuth ? (
        <>
          <button
                  onClick={() => navigate(`/resource/study/${resource._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}

      <br />

      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(resource._id)}
          className="common-btn"
          style={{ background: "black" }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ResourceCard;
