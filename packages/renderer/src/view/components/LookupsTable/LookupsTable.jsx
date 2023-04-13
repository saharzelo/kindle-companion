import { useState } from 'react';
import './LookupsTable.css';

function LookupsTable({ tableData, tableHeaders }) {
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
                <td className="operation">
                    <button className="button" onClick={() => handleDelete(item)}>
                        Delete
                    </button>
                </td>
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

export default LookupsTable;
