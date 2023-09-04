import React, { useState } from 'react'

export default function Checkbox() {
    const listJob = [
        { id: 0, job: "Java backend developer" },
        { id: 1, job: "Javascript backend developer" },
        { id: 2, job: "C# backend developer" },
        { id: 3, job: "Python backend developer" },
    ]
    // Mang chua danh sach cong viec duoc chon
    const [selectedJob, setSelectedJob] = useState([]);
    // console.log(selectedJob);

    // Ham xu ly checkbox
    const handleCheck = (id) => {
        // kiem tra id da ton tai trong mang chua
        if (selectedJob.includes(id)) {
            // neu nhu id da ton tai trong mang thi loc ra nhung gia tri khac voi id duoc check
            setSelectedJob(selectedJob.filter(job => job !== id))
        } else {
            // neu khong ton tai thi push vao trong mang
            setSelectedJob([...selectedJob, id])
        }
    }
    return (
        <div style={{ textAlign: "left" }}>
            {listJob.map((j, id) => (
                <div key={id}>
                    <input type="checkbox" onChange={() => handleCheck(id)} checked={selectedJob.includes(j.id)} />{j.job}
                </div>
            ))}
        </div>
    )
}
