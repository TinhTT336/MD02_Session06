import React, { useState } from 'react'

export default function AddModal(props) {
    // lay props tu cha
    // const { handleCloseForm } = props.handleCloseForm;//cach 1
    const handleCloseFormAdd = props.handleCloseFormAdd;//cach 2
    //cach 3: truyen thang props vao function AddModal (thay props bang {{handleCloseForm})
    const listStudent = props.listStudent;
    // Ham dong form
    const handleCloseFormAddStudent = () => {
        handleCloseFormAdd();
    }
    // khai bao state
    const [student, setStudent] = useState({
        studentName: '',
        email: '',
        address: '',
        phone: '',
    });
    // Ham lang nghe va lay du lieu tu cac o input
    const handleChange = (e) => {
        // lay value va name cua tung o input khi nhap
        // cach 1:
        const name = e.target.name;
        const value = e.target.value;
        // cach 2:
        // const { name, value } = e.target;

        // set state cho student
        setStudent({ ...student, [name]: value })
    }
    // ham submit
    const handleSubmit = (e) => {
        // ngan chan su kien mac dinh cua form
        e.preventDefault();
        //    tao doi tuong moi
        const newStudent = { ...student, studentId: Date.now() }
    }



    return (
        <div>
            <>
                {/* Edit Modal HTML */}
                <div id="addEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Thêm mới sinh viên</h4>
                                    <button onClick={handleCloseFormAddStudent}
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
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
                                        <textarea
                                            name='address'
                                            onChange={handleChange}
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <input type="text" className="form-control" required="" name='phone' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input onClick={handleCloseFormAddStudent}
                                        type="button"
                                        className="btn btn-default"
                                        defaultValue="Close"
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-success"
                                        defaultValue="Add"
                                    />
                                    {/* <button onClick={handleCloseFormAddStudent}
                                        type="button"
                                        className="btn btn-default"
                                    >Close</button>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        defaultValue="Add"
                                    >Add</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Edit Modal HTML */}
            </>

        </div>
    )
}
