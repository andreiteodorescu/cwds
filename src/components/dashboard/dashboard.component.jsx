import React, { useState, useEffect } from "react";
import {cleaned_files} from "../../utils/cleaned-files-data";
import DashboardTableComponent from "../dashboard-table/dashboard-table.component";
import DashboardModalComponent from "../dashboard-modal/dashboard-modal.component";

const DashboardComponent = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [mainList, setMainList] = useState([]);
    const [inModal, setInModal] = useState([]);

    useEffect(() => {
        setMainList(cleaned_files);
    }, [mainList]);

    // Function for the select all checkbox
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(mainList.map(li => li.name));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    //Function for the table rows checkboxes
    const handleGenChecks = e => {
        const { name, checked } = e.target;
        const isCheckLengthPlus = isCheck.length + 1;
        const isCheckLengthMinus = isCheck.length - 1;

        setIsCheck([...isCheck, name]);

        //If some checked then make the selectAll checkbox indeterminate
        const selectAllChk = document.getElementById("selectAll");
        if (checked) {
            if (isCheckLengthPlus > 0 && isCheckLengthPlus < mainList.length) {
                selectAllChk.indeterminate = true;
            } else {
                selectAllChk.indeterminate = false;
            }
        }

        if (!checked) {
            setIsCheck(isCheck.filter(item => {
                return item !== name;
            }));

            //If some unchecked then make the selectAll checkbox indeterminate
           if (isCheckLengthMinus > 0 && isCheckLengthMinus < mainList.length) {
               selectAllChk.indeterminate = true
           } else {
               selectAllChk.indeterminate = false;
           }
        }

        // If all checked then check the selectAll checkbox
        if (!isCheckAll && (mainList.length === isCheckLengthPlus)) {
            setIsCheckAll(!isCheckAll);
        }

        //If none checked then uncheck the selectAll checkbox
        if (isCheckAll && isCheckLengthMinus === 0) {
            setIsCheckAll(!isCheckAll);
        }
    };

    // Function for the download button
    const handleDownloadAvailable = () => {
        // Create array with only the files checked and that have status available
        const filteredDwnArr = mainList.filter(obj => {
            return isCheck.includes(obj.name);
        }).filter(obj => {
            return obj.status === "available";
        });

        // Show modal
        document.querySelector(".dialog").showModal();

        // If the array with available downloads is not empty update the state
        if (filteredDwnArr.length > 0) {
            setInModal(filteredDwnArr);
        } else {
            setInModal([]);
        }
    };

    return (
        <div className="dashboard-wrapper" data-testid="dashboard-test">
            <div className="dashboard-header">
                <label className="sr-only" htmlFor="selectAll">Check or uncheck all checkboxes</label>
                <input
                    className="dashboard-header-selectall"
                    tabIndex="0"
                    type="checkbox"
                    id="selectAll"
                    name="selectAll"
                    onChange={handleSelectAll}
                    checked={isCheckAll}
                />
                <div className="dashboard-header-selected">
                    {
                        isCheck.length > 0 ?
                        <div className="dashboard-header-selected-active">
                            Selected <span>{isCheck.length}</span>
                        </div>
                            :
                        <div className="dashboard-header-selected-none">
                            None Selected
                        </div>
                    }
                </div>
                <div className="dashboard-header-download">
                    <button className="btn-download" tabIndex="0" type="button" onClick={handleDownloadAvailable} disabled={isCheck.length === 0}>
                        <svg className="dh-icon-download" aria-hidden="true">
                            <use href="assets/images/sprite.svg#icon-cwds-download" />
                        </svg>
                        Download Selected
                    </button>
                </div>
            </div>
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
                    {mainList.map(({name, device, path, status}, index) => (
                        <DashboardTableComponent
                            key={'file-clean-' + index}
                            name={name}
                            device={device}
                            path={path}
                            status={status}
                            index={index}
                            handleGenChecks={handleGenChecks}
                            isChecked={isCheck.includes(name)}
                        />
                    ))}
                </tbody>
            </table>

            <DashboardModalComponent inModal={inModal}/>
        </div>
    )
};

export default DashboardComponent;