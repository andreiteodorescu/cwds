import React from "react";

const DashboardHeaderComponent = () => {

    return (
        <div className="dashboard-header">
            <input className="dashboard-header-selectall" tabIndex="0" type="checkbox" id="select_all" name="selectAll" />
            <div className="dashboard-header-selected">
                <div className="dashboard-header-selected-none">
                    None Selected
                </div>
                <div className="dashboard-header-selected-active" style={{ display: 'none' }}>
                    Selected <span>2</span>
                </div>
            </div>
            <div className="dashboard-header-download">
                <button tabIndex="0" type="button">
                    <svg className="dh-icon-download" aria-hidden="true">
                        <use href="assets/images/sprite.svg#icon-cwds-download" />
                    </svg>
                    Download Selected
                </button>
            </div>
        </div>
    )
};

export default DashboardHeaderComponent;