import React from "react";
import "./Header.css"

function Header({ value, onChange }) {
    return (
        <div className="container-header">
            <div className="label-header">
            บันทึกรายรับ-รายจ่าย :
            </div>
            <select value={value} onChange={onChange} className="select-header">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>

    )
};

export default Header;
