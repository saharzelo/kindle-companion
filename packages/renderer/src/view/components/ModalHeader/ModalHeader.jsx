import "./ModalHeader.css"
function ModalHeader({breadcrumb, onClick}) {
    return (
        <div className="modal-header">
            <span className="breadcrumb"> {breadcrumb}</span>
            <span className="close" onClick={onClick}>&times;
            </span>
        </div>
    );
}

export default ModalHeader;
