import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const ResourceContext = createContext();

export const ResourceContextProvider = ({ children }) => {
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState([]);
  const [myresource, setMyResource] = useState([]);

  async function fetchResources() {
    try {
      const { data } = await axios.get(`${server}/api/resource/all`);

      setResources(data.resources);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchResource(id) {
    try {
      const { data } = await axios.get(`${server}/api/resource/${id}`);
      setResource(data.resource);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMyResource() {
    try {
      const { data } = await axios.get(`${server}/api/myresource`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setMyResource(data.resources);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchResources();
    fetchMyResource();
  }, []);
  return (
    <ResourceContext.Provider
      value={{
        resources,
        fetchResources,
        fetchResource,
        resource,
        myresource,
        fetchMyResource,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export const ResourceData = () => useContext(ResourceContext);
