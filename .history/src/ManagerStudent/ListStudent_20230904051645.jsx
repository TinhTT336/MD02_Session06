import React, { useState } from 'react'
import AddModal from './AddModal';

export default function ListStudent() {
    const [showAdd, setShowAdd] = useState(false);
    const [listStudent, setListStudent] = useState(() => {
        const students = JSON.parse(localStorage.getItem("listStudent")) || [];
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
    // ham load du lieu va hien thi
    const loadData = (newStudent) => {
        setListStudent(newStudent);
    }
    return (
        <div>
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
                                {listStudent.length === 0 ? (<><tr><td colSpan={6}>Khong co du lieu</td></tr></>) : (<>{listStudent.map(st => (
                                    <tr key={st.studentId}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                />
                                                <label htmlFor="checkbox5" />
                                            </span>
                                        </td>
                                        <td>{st.studentName}</td>
                                        <td>{st.email}</td>
                                        <td>{st.address}</td>
                                        <td>{st.phone}</td>
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
                                ))}

                                </>)}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}