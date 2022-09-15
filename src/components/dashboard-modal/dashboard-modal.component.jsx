const DashboardModalComponent = (props) => {

    const handleDialogClose = () => {
        document.querySelector(".dialog").close();
        document.querySelector(".dialog").classList.remove("dialog-open");
    };

    return (
        <dialog className="dialog" data-testid="dashboard-modal-test">
            {props.inModal.length > 0 ?
                <div className="dialog-has-files">
                    <p className="dialog-title">The following files are available for download</p>
                    <ul className="dialog-list">
                        {props.inModal.map(({device, path}, index) => (
                            <li key={'dialog-li-'+index}>
                                <p><span>Device:</span> {device}</p>
                                <p><span>Path:</span> {path}</p>
                            </li>
                        ))}
                    </ul>
                </div> :
                <div className="dialog-no-files">
                    <p className="dialog-title">Please select a file with status "Available"!</p>
                </div>
            }
            <button className="dialog-close" type="button" onClick={handleDialogClose}>OK</button>
        </dialog>
    )
};

export default DashboardModalComponent;