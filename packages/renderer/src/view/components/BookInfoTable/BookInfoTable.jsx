import { useState } from 'react';
import './BookInfoTable.css'

function BookInfoTable({ tableData, tableHeaders }) {
    const [data, setData] = useState(tableData);

    const removeData = (id) => {
        const deletedItem = data.filter((item) => id !== item.id);
        setData(deletedItem);
    };

    const renderHeaders = () => {
        return tableHeaders.map((header, index) => {
            return <th key={index}>{header.toUpperCase()}</th>;
        });
    };

    const renderBody = () => {
        if (data.length === 0 ) {
            return null;
        }
        const headerKeys = Object.keys(data[0]);
        return data.map((item, index) => {
            return (
                <tr key={index}>
                    {headerKeys.map((key) => (
                        <td key={key}>{item[key]}</td>
                    ))}
                    <td className="operation">
                        <button className="button" onClick={() => removeData(item.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <table className="book-info-table">
                <thead>
                    <tr>{renderHeaders()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </>
    );
}

export default BookInfoTable;
