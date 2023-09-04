import React, { useState } from 'react'
import AddForm from './AddForm';

export default function List_Student() {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // ham hien form add
    const handleShowAdd = () => {
        setShowAdd(true);
    }
    //ham an form add
    const handleCloseAdd = () => {
        setShowAdd(false);
    }
    return (
        <>
            {showAdd ? (<AddForm handleCloseAdd={handleCloseAdd} />) : (<></>)}
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>
                                        Quản lý <b>sinh viên</b>
                                    </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={handleShowAdd}
                                        className="btn
                              btn-success"
                                    >
                                        <i className="material-icons"></i>
                                        <span>Thêm mới sinh viên</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label htmlFor="selectAll" />
                                        </span>
                                    </th>
                                    <th>Tên sinh viên</th>
                                    <th>Email</th>
                                    <th>Địc chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Lựa chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox5"
                                            />
                                            <label htmlFor="checkbox5" />
                                        </span>
                                    </td>
                                    <td>Nguyễn Văn A</td>
                                    <td>anv@mail.com</td>
                                    <td>Thanh Xuân, Hà Nội</td>
                                    <td>(+84) 631 2097</td>
                                    <td>
                                        <a className="edit" >
                                            <i
                                                className="material-icons"
                                                title="Edit"
                                            >
                                                
                                            </i>
                                        </a>
                                        <a
                                            href="#deleteEmployeeModal"
                                            className="delete"
                                        >
                                            <i
                                                className="material-icons"
                                                title="Delete"
                                            >
                                                
                                            </i>
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}
