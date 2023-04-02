import { useState } from 'react';
import './BookInfoTable.css'

function BookInfoTable({ tableData }) {
    const [data, setData] = useState(tableData);

    const removeData = (id) => {
        const del = data.filter((item) => id !== item.id);
        setData(del);
    };

    const renderHeader = () => {
        const headerKeys = Object.keys(data[0]);
        return headerKeys.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    };

    const renderBody = () => {
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
            <table class="book-info-table">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
        </>
    );
}

export default BookInfoTable;
