import React, { useState } from 'react'

export default function Radio() {
    const listGender = [
        { id: 0, title: "Nam" },
        { id: 1, title: "Nu" },
        { id: 2, title: "Khac" },
    ]
    const [value, setValue] = useState(0);
    // console.log(value);
    const handleCheck = (id) => {
        // cap nhat lai state de lay value cua radio
        setValue(id);
    }
    return (
        <div style={{ textAlign: "left" }}>
            {listGender.map((gender, id) => (
                <div key={id}>
                    {/* thuoc tinh checked cua input type radio chi nhan 2 gia tri true/false */}
                    <input type="radio" checked={value === gender.id} onChange={(e) => handleCheck(gender.id)} />
                    <label htmlFor="female">{gender.title}</label>
                </div>
            ))}
        </div>
    )
}
