import React from 'react'

export default function AddModal({ handleCloseAdd }) {
    // ham dong form add
    const handleClose = () => {
        handleCloseAdd();
    }
    return (
        <div>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
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
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" />
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
