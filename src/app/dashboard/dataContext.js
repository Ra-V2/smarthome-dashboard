'use client';

import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/home.json');
            const data = await response.json();
            console.log(data)
            setData(data);
        };

        fetchData();
    }, []);
    console.log(data)
    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;