import React from "react";

const DashboardTableComponent = () => {

    return (
        <table className="dashboard-files-table">
            <caption className="sr-only">List of cleaned files</caption>
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Device</th>
                <th>Path</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <input className="dashboard-table-checkbox" tabIndex="0" type="checkbox" id="select_1" name="select1" />
                </td>
                <td tabIndex="0">
                    <span className="dashboard-table-mobile-colname" aria-hidden="true">Name:</span>
                    smss.exe
                </td>
                <td tabIndex="0">
                    <span className="dashboard-table-mobile-colname" aria-hidden="true">Device:</span>
                    Stark
                </td>
                <td tabIndex="0">
                    <span className="dashboard-table-mobile-colname" aria-hidden="true">Path:</span>
                    Path url
                </td>
                <td tabIndex="0">
                    <span className="dashboard-table-mobile-colname" aria-hidden="true">Status:</span>
                    Scheduled
                </td>
            </tr>
            </tbody>
        </table>
    )
};

export default DashboardTableComponent;