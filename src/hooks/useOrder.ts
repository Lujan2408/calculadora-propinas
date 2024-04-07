import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

export default function useOrder() {
  
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
       
        //Agregar una nueva propiedad al obejto
        const newItem : OrderItem = {...item, quantity: 1} //Toma el una copia de lo que hay en el item, luego le asiganmos la nueva propiedad
        setOrder([...order, newItem])
    }

    console.log(order)
    return {
        addItem
  }
}
