import React,{useState} from 'react'
import './FilesBG.css';


export default function Files() {
    return (

        <div className='FilesParent'>

    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    
    <div class="context">
    <section className="">
    <div className="container py-4 h-100">
        <div className="row d-flex h-100">
            <div className="col-md-12 col-xl-10">
                <div className="card text-bg-light">
                    <div className="card-header p-3">
                        <h5 style={{float:"left",margin:"0px"}}>Upload Files</h5>
                        <a href="https://vaultchain.asaifee.ml/logout">
                        <button type="button" style={{float:"right",margin:"0px"}} class="btn btn-outline-danger">Logout</button>
                        </a>
                    </div>
                    <div className="card-body">
                        <form action="/files/upload" method="post" enctype="multipart/form-data">
                            <div className="input-group">
                                <input type="file" className="form-control form-control-lg" id="formFileMultiple" name="uploaded_files" multiple aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                                <button type="submit" className="btn btn-lg btn-outline-primary"id="inputGroupFileAddon04">Upload</button>
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
                <div className="card text-bg-light">
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
                                <tr className="fw-normal">
                                    <th className="border-0">
                                        <span className="ms-2">
                                        </span>
                                    </th>
                                    <td className="border-0 align-middle">
                                        {/* <!-- <a href="/files/share" role="button" className="btn btn-outline-warning me"><i className="bi bi-share"></i></button> --> */}
                                        <div className="dropdown me-2">
                                            <a href="/files/delete" role="button" className="btn btn-outline-danger me-2"><i className="bi bi-trash"></i></a>
                                            <a href="/files/download" role="button" className="btn btn-outline-primary me-2"><i className="bi bi-download"></i></a>
                                            <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                                <i className="bi bi-share-fill"></i>
                                            </button>
                                            <form className="dropdown-menu p-4" action="/files/share" method="post" enctype="application/x-www-form-urlencoded">
                                                <div className="mb-3">
                                                    <label for="recipient" className="form-label">UID</label>
                                                    <input type="text" className="form-control" id="recipient" name="recipient" placeholder="634533525615e6a1bdb52285"/>
                                                </div>
                                                <button type="submit" className="btn btn-outline-primary">Share</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
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

    
    )
}
