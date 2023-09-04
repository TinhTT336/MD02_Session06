import React, { useState } from 'react'
import AddModal from './AddModal';

export default function Table() {
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [listStudent, setListStudent] = useState(() => {
        const students = JSON.parse(localStorage.getItem("students")) || [];
        return students;
    });
    // ham hien form Add
    const handleShowFormAdd = () => {
        setShowFormAdd(true); //set lai trang thai tu false thanh true
    }
    // ham an form Add
    const handleCloseFormAdd = () => {
        setShowFormAdd(false);
    }

    return (
        <>
            {/* component addModal se hien thi o day */}
            {showFormAdd ? <AddModal handleCloseFormAdd={handleCloseFormAdd} /> : <></>}
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
                                    <button onClick={handleShowFormAdd}
                                        href="#addEmployeeModal"
                                        className="btn
                              btn-success"
                                        data-toggle="modal"
                                    >
                                        <i className="material-icons"></i>
                                        <span>Thêm mới sinh viên</span>
                                    </button>
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
                                {listStudent.length === 0 ? (<tr aria-colspan={5}>Khong co du lieu</tr>) : (<>{listStudent.map((st, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox5"
                                                    name="options[]"
                                                    defaultValue={1}
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
                                                    data-toggle="tooltip"
                                                    title="Edit"
                                                >
                                                    
                                                </i>
                                            </a>
                                            <a
                                                href="#deleteEmployeeModal"
                                                className="delete"
                                                data-toggle="modal"
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
                                ))}</>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
