import React, { useState } from 'react'
import AddModal from './AddModal';

export default function Table() {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [listStudent, setListStudent] = useState(() => {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        return students;
    })

    // ham hien form add
    const handleShowAdd = () => {
        setShowAdd(true);
    }
    // ham an form add
    const handleCloseAdd = () => {
        setShowAdd(false);
    }
    // ham load du lieu
    const loadData = (newStudent) => {
        setListStudent(newStudent);
    }
    return (
        <>
            {showAdd ? (<AddModal handleCloseAdd={handleCloseAdd} listStudent={listStudent} loadData={loadData} />) : (<></>)}
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
                                        data-toggle="modal"
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
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Lựa chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {listStudent.length === 0 ? (<tr>Khong co du lieu</tr>) : */}
                                {(listStudent.map(st => (
                                    <>
                                        <tr>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox5"
                                                        name="options[]"
                                                    />
                                                    <label htmlFor="checkbox5" />
                                                </span>
                                            </td>
                                            <td>{st.studentName}</td>
                                            <td>{st.email}</td>
                                            <td>{st.address}</td>
                                            <td>{st.phoneNumber}</td>
                                            <td>
                                                <a href="#editEmployeeModal" className="edit" data-toggle="modal">
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
                                                        data-toggle="tooltip"
                                                        title="Delete"
                                                    >
                                                        
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>
                                    </>
                                )))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
