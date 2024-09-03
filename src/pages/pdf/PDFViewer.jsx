import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";
import Loading from "../../components/loading/Loading";
import toast from "react-hot-toast";
import "./pdf.css";
import { useParams, useNavigate } from "react-router-dom";

const PDFViewer = ({ user }) => {
  const [pdfs, setPdfs] = useState([]);
  const [pdf, setPdf] = useState({});
  const [loading, setLoading] = useState(true);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  
  const [description, setDescription] = useState("");
  const [pdfFile, setPdfFile] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  async function fetchPdfs() {
    try {
      const { data } = await axios.get(`${server}/api/pdfs/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setPdfs(data.pdfs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchPdf(id) {
    setPdfLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/pdf/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log("Fetched PDF:", data.pdf);
      setPdf(data.pdf);
      setPdfLoading(false);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      setPdfLoading(false);
    }
  }

  const changePdfHandler = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", pdfFile);

    try {
      const { data } = await axios.post(
        `${server}/api/resource/${params.id}/upload-pdf`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchPdfs();
      setTitle("");
      setDescription("");
      setPdfFile("");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this PDF?")) {
      try {
        const { data } = await axios.delete(`${server}/api/pdf/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchPdfs();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="pdf-page">
            <div className="left">
              {pdfLoading ? (
                <Loading />
              ) : (
                <>
                  {pdf.fileUrl ? (
                    <>
                      <iframe
                        key={pdf._id}
                        src={`${server}/${pdf.fileUrl}`}
                        width={"100%"}
                        height={"600px"}
                      ></iframe>
                      <h1>{pdf.title}</h1>
                      <h3>{pdf.description}</h3>
                    </>
                  ) : (
                    <h1>Please Select a PDF</h1>
                  )}
                </>
              )}
            </div>
            <div className="right">
              {user && user.role === "admin" && (
                <button className="common-btn" onClick={() => setShow(!show)}>
                  {show ? "Close" : "Add PDF +"}
                </button>
              )}

              {show && (
                <div className="pdf-form">
                  <h2>Add PDF</h2>
                  <form onSubmit={submitHandler}>
                    <label htmlFor="text">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />

                    <label htmlFor="text">Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />

                    <input
                      type="file"
                      placeholder="Choose PDF"
                      onChange={changePdfHandler}
                      required
                    />

                    <button
                      disabled={btnLoading}
                      type="submit"
                      className="common-btn"
                    >
                      {btnLoading ? "Please Wait..." : "Add"}
                    </button>
                  </form>
                </div>
              )}

              {pdfs && pdfs.length > 0 ? (
                pdfs.map((e, i) => (
                  <React.Fragment key={e._id}>
                    <div
                      onClick={() => fetchPdf(e._id)}
                      className={`pdf-number ${pdf._id === e._id && "active"}`}
                    >
                      {i + 1}. {e.title}
                    </div>
                    {user && user.role === "admin" && (
                      <button
                        className="common-btn"
                        style={{ background: "black" }}
                        onClick={() => deleteHandler(e._id)}
                      >
                        Delete 
                      </button>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p>No PDFs Yet!</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PDFViewer;