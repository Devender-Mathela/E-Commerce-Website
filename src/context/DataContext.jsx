import { createContext, useContext, useState } from "react";
import axios from "axios"

export const DataContext =createContext(null);

export const DataProvider=({children})=>{
    const [data, setData] = useState()

    // fetching all products from api

    const fetchAllProducts=async()=>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            let productsData=response.data.products || response.data || []
            
            // Filter to only include clothing
            productsData = productsData.filter(product => 
                product.category === "men's clothing" || product.category === "women's clothing"
            );
            
            setData(productsData)
        } catch (error) {
            console.log(error)
        }
    }


    const getUniqueCategory=(data, property)=>{
        let newVal=data?.map((curElem)=>{
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
    }

    const categoryOnlyData =getUniqueCategory(data, "category")
    const brandOnlyData=getUniqueCategory(data,"brand")

    return <DataContext.Provider value={{data, setData, fetchAllProducts, categoryOnlyData,brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData=()=>useContext(DataContext)
