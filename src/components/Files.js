import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from 'react'
import FileDownload from 'js-file-download'
import { callApi, createConfig } from "../services/vaultchain-api";
import { LogoutButton } from './Buttons'
import { PageLoader } from "./page-loader.js";
import './FilesBG.css';
import Logo from "./Logo.js";

export default function Files() {
  const { user, loginWithPopup, getAccessTokenSilently } = useAuth0();

  // State for getting user's files stored in IPFS
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);

  const getName = file => {
    return file.name.split('/').at(-1)
  }

  useEffect(() => {
    const getFiles = async () => {
      const config = await createConfig("/api/files", "GET", await getAccessTokenSilently())
      const { data, error } = await callApi({config})

      if (data) {
        setIsLoaded(true);
        setFiles(data);
      } if (error) {
        setIsLoaded(true);
        setError(error);
      }
    }

    if (!isLoaded) getFiles()
  }, [getAccessTokenSilently, isLoaded]);
  // End State

  // State and functions for uploading files
  const [fileList] = useState(React.createRef());
  const handleFileUpload = async (e) => {
    e.preventDefault();

    const files = fileList.current.files
    if (!files || [...files].length < 1) {
      alert("No files selected!");
      return;
    }

    // 👇 Create new FormData object and append files
    const formData = new FormData();
    for await (const file of files) {
      formData.append('uploaded_files', file, file.name);
    }

    const config = await createConfig("/api/files", "POST", await getAccessTokenSilently())
    config.data = formData

    const { data, error } = await callApi({config})
    if (data) alert(data.msg)
    if (error) alert(error)
    window.location.reload()
  };
  // End state and functions

  // Function to download or delete a file
  const fileRequest = async (path, method) => {
    const filename = path.split('/').at(-1)
    const config = await createConfig(`/api/files${path}`, method, await getAccessTokenSilently())
    if (method === "GET") config.responseType = 'blob'

    const { data, error } = await callApi({config})
    if (error) alert(error)
    if (data) {
      if (method === "DELETE") {
        alert(data.msg)
        window.location.reload()
      }
      else FileDownload(data, filename)
    }
  }
  // End functions

  // State and functions for sharing files
  const [shareID, setShareID] = useState("")
  const handleSharingChange = (e) => {
    setShareID(e.target.value);
  }

  const handleSharing = async (e, path) => {
    e.preventDefault()

    await loginWithPopup({ prompt: "login", display: 'popup', login_hint: user.email })
    const config = await createConfig(`/api/files/share${path}`, "POST", await getAccessTokenSilently())
    config.data = new URLSearchParams({
      recipient: shareID
    })

    const { data, error } = await callApi({config})
    if (error) alert(error)
    if (data) alert(data.msg)
  }
  // End state and functions

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  } else {
    return (
      <>
      <div className='FilesParent'>
        <div className="context">
          <section className="">
            <div className="container py-4 h-100">
              <div className="row d-flex h-100">
                <div className="col-md-12 col-xl-10">
                  <div>
                    <Logo/>
                    <hr/>
                  </div>
                  <hr/>
                  <div className="card text-bg-light" style={{zIndex:100000000}}>
                    <div className="card-header p-3">
                      <span style={{ float: "right", margin: "0px" }}>
                        <a href="/dashboard">
                          <button type="button" className="btn btn-primary me-2">Dashboard</button>
                        </a>
                        <LogoutButton />
                      </span>
                      <h5 className="card-text mb-0">
                        <i className="bi bi-card-list me-2"></i>
                        Upload Files
                      </h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleFileUpload}>
                        <div className="input-group">
                          <input type="file" ref={fileList} className="form-control form-control-lg" id="formFileMultiple" name="uploaded_files" multiple aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                          <button type="submit" className="btn btn-lg btn-outline-primary" id="inputGroupFileAddon04">Upload</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container py-4 h-100">
              <div className="row d-flex h-100">
                <div className="col-md-12 col-xl-10">
                  <div className="card text-bg-light" style={{zIndex:100000000}}>
                    <div className="card-header p-3">
                      <h5 className="mb-0"><i className="bi bi-card-list me-2"></i>Uploaded Files</h5>
                    </div>
                    <div className="card-body">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Files</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {files.map((file, index) => (
                            <tr key={file.cid} className="fw-normal">
                              <th className="border-0">
                                <span className="ms-2">
                                  {index + 1}. {getName(file)}
                                </span>
                              </th>
                              <td className="border-0 align-middle">
                                <div className="dropdown me-2">
                                  <button className="btn btn-outline-primary me-2" onClick={() => fileRequest(file.name, "GET")}>
                                    <i className="bi bi-download"></i>
                                  </button>
                                  <button className="btn btn-outline-danger me-2" onClick={() => fileRequest(file.name, "DELETE")}>
                                    <i className="bi bi-trash"></i>
                                  </button>
                                  {/* <a href="/files/delete" role="button" className="btn btn-outline-danger me-2"><i className="bi bi-trash"></i></a> */}
                                  {/* <a href="/files/download" role="button" className="btn btn-outline-primary me-2"><i className="bi bi-download"></i></a> */}
                                  <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <i className="bi bi-share-fill"></i>
                                  </button>
                                  <form onSubmit={(e) => handleSharing(e, file.name)} className="dropdown-menu p-4">
                                    <div className="mb-3">
                                      <label htmlFor="recipient" className="form-label">UID</label>
                                      <input type="text" value={shareID} onChange={handleSharingChange} className="form-control" id="recipient" name="recipient" placeholder="634533525615e6a1bdb52285" />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary">Share</button>
                                  </form>
                                </div>
                              </td>
                            </tr>
                          )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </>
    )
  }
}
