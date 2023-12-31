import React, { useState } from 'react'

export default function AddModal({ handleCloseAdd, listStudent }) {
    // ham dong form add
    const handleClose = () => {
        handleCloseAdd();
    }
    // khai bao state
    const [student, setStudent] = useState({
        studentName: '',
        email: '',
        phone: '',
        address: '',
    })
    // ham lay thong tin tu cac o input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value })
    }
    // ham submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { ...student, studentId: Date.now() };
        const newListStudent = [...listStudent, newStudent];
        localStorage.setItem('listStudent', JSON.stringify(newListStudent));
        console.log(newStudent);
    }
    return (
        <div>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm mới sinh viên</h4>
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
                                    <input type="text" className="form-control" name='studentName' onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name='email' onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" name='address' onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name='phone' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleClose}
                                    type="button"
                                    className="btn btn-default"
                                    defaultValue="Cancel"
                                />
                                <input type="submit" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
