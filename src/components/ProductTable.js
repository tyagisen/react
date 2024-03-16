import React from "react";


const ProductTable =({grocery})=>{
    plantType = []
    const renderSearchGrocery=grocery.map((gr)=>{
        plantType.push(gr.category)
        return (
            <>
            <tr>
                <td>{gr.name}</td>
                <td>{gr.price}</td>
            </tr>
            </>
        )
    })
    
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
        
                {renderSearchGrocery}
            </table>
        </div>
    )
}
export default ProductTable;