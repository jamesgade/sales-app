import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const Card = () => {
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
        const newSalesData = {
            id: salesData.length + 1,
            ...formData,
        };

        // Use push method to add new data to the array
        const updatedSalesData = [...salesData];
        updatedSalesData.push(newSalesData);

        // Update the state with the new array
        setSalesData(updatedSalesData);
        setFormData({
            date: "",
            customerName: "",
            sales: 0,
            price: 0,
            frozenSales: 0,
            liveSales: 0,
        });
    };

    return (
        <div>
            <div>
                <h2>Add Sales Data</h2>
                <form>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Sales:</label>
                    <input
                        type="number"
                        name="sales"
                        value={formData.sales}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Frozen Sales:</label>
                    <input
                        type="number"
                        name="frozenSales"
                        value={formData.frozenSales}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Live Sales:</label>
                    <input
                        type="number"
                        name="liveSales"
                        value={formData.liveSales}
                        onChange={handleInputChange}
                    />
                    <br />
                    <button type="button" onClick={handleAddSalesData}>
                        Add Sales Data
                    </button>
                </form>
            </div>
            <div>
                <h2>Sales Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Sales</th>
                            <th>Price</th>
                            <th>Frozen Sales</th>
                            <th>Live Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((sale) => (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.date}</td>
                                <td>{sale.customerName}</td>
                                <td>{sale.sales}</td>
                                <td>{sale.price}</td>
                                <td>{sale.frozenSales}</td>
                                <td>{sale.liveSales}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;
