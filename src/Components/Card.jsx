import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
const Card = () => {
    const [showAddSales, setShowAddSales] = useState(false);
    const [salesData, setSalesData] = useState(() => {
        const storedSalesData = Cookies.get('salesData');
        return storedSalesData ? JSON.parse(storedSalesData) : [
            {
                id: 1,
                date: "2024-03-25",
                customerName: "John Doe",
                sales: 10,
                price: 50,
                frozenSales: 5,
                liveSales: 5,
            },
            {
                id: 2,
                date: "2024-03-26",
                customerName: "Jane Smith",
                sales: 15,
                price: 60,
                frozenSales: 8,
                liveSales: 7,
            },
        ];
    });

    const [formData, setFormData] = useState({
        date: "",
        customerName: "",
        sales: 0,
        price: 0,
        frozenSales: 0,
        liveSales: 0,
    });

    useEffect(() => {
        Cookies.set('salesData', JSON.stringify(salesData), { expires: 365 });
    }, [salesData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddSalesData = () => {
        // Check if any required fields are empty
        if (
            formData.date === "" ||
            formData.customerName === "" ||
            formData.sales === "" ||
            formData.price === "" ||
            formData.frozenSales === "" ||
            formData.liveSales === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const newSalesData = {
            id: salesData.length + 1,
            ...formData,
        };

        const updatedSalesData = [...salesData];
        updatedSalesData.push(newSalesData);

        setSalesData(updatedSalesData);
        setFormData({
            date: "",
            customerName: "",
            sales: 0,
            price: 0,
            frozenSales: 0,
            liveSales: 0,
        });
        setShowAddSales(false);
    };
    const handleEditSale = (id) => {
        const saleToEdit = salesData.find(sale => sale.id === id);
        if (saleToEdit) {
            setFormData({
                date: saleToEdit.date,
                customerName: saleToEdit.customerName,
                sales: saleToEdit.sales,
                price: saleToEdit.price,
                frozenSales: saleToEdit.frozenSales,
                liveSales: saleToEdit.liveSales,
            });
            setShowAddSales(true);
        }
    };
    const handleDeleteSale = (id) => {
        const updatedSalesData = salesData.filter(sale => sale.id !== id);
        setSalesData(updatedSalesData);
    };

    return (

        <div>
            <div className="sales-container">
                {showAddSales && (
                    <div className="add-sales-wrapper">
                        <h2>{formData.id ? 'Edit Sales Data' : 'Add Sales Data'}</h2>
                        <form className="sales">
                            <label>Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <label>Customer Name:</label>
                            <input
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <label>Sales:</label>
                            <input
                                type="number"
                                name="sales"
                                value={formData.sales}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <label>Frozen Sales:</label>
                            <input
                                type="number"
                                name="frozenSales"
                                value={formData.frozenSales}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <label>Live Sales:</label>
                            <input
                                type="number"
                                name="liveSales"
                                value={formData.liveSales}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <button type="button" onClick={handleAddSalesData}>
                                {formData.id ? 'Update Data' : 'Add Data'}
                            </button>
                        </form>
                    </div>
                )}
                {!showAddSales && (
                    <button className="btn-add" onClick={() => setShowAddSales(true)}>Add Sales</button>
                )}
            </div>

            <div className="table-wrapper">
                <div className="table-data">
                    <h2 className="table-header">Sales Data</h2>
                    {/* <button className="btn-add">Add Sales</button> */}
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Sales</th>
                            <th>Price</th>
                            <th>Frozen Sales</th>
                            <th>Live Sales</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((sale) => (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.date}</td>
                                <td >{sale.customerName}</td>
                                <td>{sale.sales}</td>
                                <td>{sale.price}</td>
                                <td >{sale.frozenSales}</td>
                                <td >{sale.liveSales}</td>
                                <td><span className="actions"><BsFillPencilFill className="edit-btn" onClick={() => handleEditSale(sale.id)} /> <BsFillTrashFill className="delete-btn" onClick={() => handleDeleteSale(sale.id)} /></span></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;
