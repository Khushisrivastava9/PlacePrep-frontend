import React from "react";
import "./resources.css";
import { ResourceData } from "../../context/ResourceContext";
import ResourceCard from "../../components/resourcecard/ResourceCard";
const Resources = () => {
  const { resources } =ResourceData();

  console.log(resources);
  return (
    <div className="resources">
      <h2>Available Resources</h2>

      <div className="resource-container">
        {resources && resources.length > 0 ? (
          resources.map((e) => <ResourceCard key={e._id} resource={e} />)
        ) : (
          <p>No Resources Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Resources;