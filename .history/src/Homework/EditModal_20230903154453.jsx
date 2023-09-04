import React, { useEffect, useState } from 'react'

export default function EditModal(props) {
    const { handleCloseEdit, listStudent, loadData, idEdit } = props;
    // ham an form edit
    const handleCloseEditForm = () => {
        handleCloseEdit()
    }
    // khai bao state de hung du lieu thong tin can sua doi tu cha
    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        address: "",
        phoneNumber: "",
    });
    //ham tim kiem thong tin theo id duoc truyen tu cha
    const findStudent = () => {
        console.log(idEdit);
        const student = listStudent.find(item => item.studentId === idEdit)
        setStudent(student);
        console.log(student);
    }
    // dung useEffect de hien thi thong tin can sua doi da tim duoc o tren
    useEffect(() => {
        findStudent()
    }, [])

    // // Tìm kiếm thông tin sinh viên theo id được truyền từ component cha
    // const findStudent = () => {
    //     console.log(idEdit);
    //     const student = listStudent.find((st) => st.studentId === idEdit);
    //     setStudent(student);
    //     console.log(student);
    // };
    // useEffect(() => {
    //     findStudent();
    // }, []);

    return (
        <div>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                                <button onClick={handleCloseEditForm}
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
                                    <input type="text" className="form-control" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required="" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" required="" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" required="" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleCloseEditForm}
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
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
