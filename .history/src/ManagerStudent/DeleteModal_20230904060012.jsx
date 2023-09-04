import React from 'react'

export default function DeleteModal({ handleCloseDelete }) {
    // ham tat form delete
    const handleClose = () => {
        handleCloseDelete()
    }
    // ham xoa
    const handleDelete = () => {
        const newListAfterDelete = listStudent.filter(st => st.studentId !== idDelete);
        setListStudent(newListAfterDelete);
        localStorage.setItem("listStudent", JSON.stringify(newListAfterDelete));
    }
    return (
        <div>
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Xóa nhân viên</h4>
                                <button onClick={handleClose}
                                    type="button"
                                    className="close"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Bạn chắc chắn muốn xóa sinh viên ID {idDelete}</p>
                            </div>
                            <div className="modal-footer">
                                <input onClick={handleClose}
                                    type="button"
                                    className="btn btn-default"
                                    defaultValue="Hủy"
                                />
                                <input type="submit" className="btn btn-danger" defaultValue="Xóa" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
