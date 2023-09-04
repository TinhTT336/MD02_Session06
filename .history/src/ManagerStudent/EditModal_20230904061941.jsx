import React, { useState } from 'react'

export default function EditModal({ handleCloseEdit, listStudent, loadData, idEdit }) {
    // ham tat form edit
    const handleClose = () => {
        handleCloseEdit();
    }
    const [student, setStudent] = useState({
        studentName: '',
        email: '',
        address: "",
        phone: '',
    })

    // tim kiem thong tin can sua theo idEdit
    const findEdit = () => {
        const findStudent = listStudent.find(st => st.studentId === idEdit);
        console.log(idEdit);
        console.log(findStudent);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const newStudent = { ...student, studentId: Date.now() };
        // const newListStudent = [...listStudent, newStudent];
        // localStorage.setItem("listStudent", JSON.stringify(newListStudent));
        // handleCloseAddForm();
        // loadData(newListStudent);
    }
    return (
        <div>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                                <button onClick={handleClose}
                                    type="button"
                                    className="close"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tên sinh viên</label>
                                    <input type="text" className="form-control" name="studentName" value={student.studentName} onClick={(e) => { handleChange(student.studentId) }} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" value={student.email} onClick={(e) => { handleChange(student.studentId) }} />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" name="address" value={student.address} onClick={(e) => { handleChange(student.studentId) }} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name="phone" value={student.phone} onClick={(e) => { handleChange(student.studentId) }} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleClose}
                                    type="button"
                                    className="btn btn-default"
                                    defaultValue="Thoát"
                                />
                                <input type="submit" className="btn btn-info" defaultValue="Lưu" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
