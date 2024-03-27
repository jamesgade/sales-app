import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { CSVLink } from 'react-csv'
import { BiSearch } from 'react-icons/bi'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const Card = () => {
    const [search, setSearch] = useState('')
    const [showAddSales, setShowAddSales] = useState(false);

    const [salesData, setSalesData] = useState([]);
    const fetchData = async () => {
        try {
            const db = getFirestore();
            const colRef = collection(db, 'salesData');
            const snapshot = await getDocs(colRef);

            let data = [];
            snapshot.forEach((doc) => {
                const { customerName, sales, price, frozenSales, liveSales, date } = doc.data();
                const dates = date.toDate()
                const formattedDate = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
                data.push({ ...doc.data(), id: doc.id, sales, price, frozenSales, liveSales, customerName, dates: formattedDate });
            });
            setSalesData(data);
            return data; // Return fetched data
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when component mounts
    }, []);


    const [formData, setFormData] = useState({
        date: "",
        customerName: "",
        sales: 0,
        price: 0,
        frozenSales: 0,
        liveSales: 0,
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleAddSalesData = async () => {
        try {
            const db = getFirestore();
            const salesDataRef = collection(db, 'salesData');

            await addDoc(salesDataRef, {
                customerName: formData.customerName,
                date: new Date(formData.date),
                sales: parseInt(formData.sales),
                price: parseFloat(formData.price),
                frozenSales: parseInt(formData.frozenSales),
                liveSales: parseInt(formData.liveSales)
            });

            // Refresh sales data after adding new data
            await fetchData(); // Fetch data again
            setFormData({
                date: "",
                customerName: "",
                sales: 0,
                price: 0,
                frozenSales: 0,
                liveSales: 0,
            });

            setShowAddSales(false);
            console.log('Data added to Firestore successfully!');
        } catch (error) {
            console.error('Error adding data to Firestore: ', error.message);
        }
    };
    const handleEditSale = (id) => {
        const saleToEdit = salesData.find(sale => sale.id === id);
        if (saleToEdit) {
            setFormData({
                id: saleToEdit.id,
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
                        <form className="sales" >
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
                <div className="content-header">
                    {!showAddSales && (
                        <button className="btn-add" onClick={() => setShowAddSales(true)}>Add Sales</button>
                    )}
                    <div className="search-box">
                        <input type="text" name='search' placeholder='Search Name' onChange={(e) => setSearch(e.target.value)} />
                        <BiSearch className='icon' />
                    </div>
                </div>

            </div>

            <div className="table-wrapper">
                <div className="table-data">
                    <h2 className="table-header">Sales Data</h2>

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
                        {salesData.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.customerName.toLowerCase().includes(search)
                        }).map((sale, index) => (
                            <tr key={sale.id}>
                                <td>{index + 1}</td>
                                <td>{sale.dates}</td>
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
                <div className="csv-btn">
                    <CSVLink data={salesData} className="csv">Export File</CSVLink>
                </div>
            </div>
        </div>
    );
};

export default Card;
