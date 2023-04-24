import { useState } from 'react';
import { ReactComponent as ViewSvg } from '../../../public/icons/BookModal/zoom.svg';
import { ReactComponent as DeleteSvg } from "../../../public/icons/BookModal/delete.svg";
import './Table.css';

function Table({ tableData, tableHeaders, enableActions=false, onClick}) {
    const [data, setData] = useState(tableData);

    const handleDelete = (item) => {
        const newData = data.filter((dataItem) => dataItem !== item);
        setData(newData);
    };

    const renderHeaders = () => {
        return tableHeaders.map((header, index) => <th key={index}>{header.toUpperCase()}</th>);
    };

    const renderBody = () => {
        if (data.length === 0) {
            return null;
        }

        return data.map((item, index) => (
            <tr key={index}>
                {Object.keys(item).map((key) => (
                    <td key={key}>{item[key]}</td>
                ))}
                {enableActions &&
                    (<td className="operation">
                        <DeleteSvg onClick={() => handleDelete(item)}/>
                        <ViewSvg onClick={() => onClick(item)} />
                    </td>
                    )}

            </tr>
        ));
    };

    return (
        <table className="book-info-table">
            <thead>
                <tr>{renderHeaders()}</tr>
            </thead>
            <tbody>{renderBody()}</tbody>
        </table>
    );
}

export default Table;
