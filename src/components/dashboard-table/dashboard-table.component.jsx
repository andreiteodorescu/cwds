import React from "react";

const DashboardTableComponent = ({ name, device, path, status, handleGenChecks, isChecked, index }) => {

    return (
        <tr className={isChecked ? "dashboard-table-checked-row" : ""}>
            <td>
                <label className="sr-only" htmlFor={'dash-id-' + index}>Check/Uncheck the checkbox with name {name} and device {device}</label>
                <input
                    className="dashboard-table-checkbox"
                    tabIndex="0"
                    type="checkbox"
                    id={'dash-id-' + index}
                    name={name}
                    onChange={handleGenChecks}
                    checked={isChecked}
                />
            </td>
            <td tabIndex="0">
                <span className="dashboard-table-mobile-colname" aria-hidden="true">Name:</span>
                {name}
            </td>
            <td tabIndex="0">
                <span className="dashboard-table-mobile-colname" aria-hidden="true">Device:</span>
                {device}
            </td>
            <td tabIndex="0">
                <span className="dashboard-table-mobile-colname" aria-hidden="true">Path:</span>
                {path}
            </td>
            <td tabIndex="0">
                <span className="dashboard-table-mobile-colname" aria-hidden="true">Status:</span>
                <span className={"dashboard-table-status-name" + (status === 'available' ? ' dts-available status-dot status-dot-green':'')}>{status}</span>
            </td>
        </tr>
    )
};

export default DashboardTableComponent;