import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

export default function useOrder() {
  
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : MenuItem) => {
        // --> EVITAR DUPLICADOS <-- 
        // IDENTIFICAR SI HAY UN ELEMENTO DUPLICADO DE LA ORDEN
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        
        if(itemExists) { // LUEGO IDENTIFICAR QUE ELEMENTO ES EL QUE ESTÁ DUPLICADO
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity +1} : orderItem) // AUMENTAR SU CANTIDAD PARA AGREGARLO AL STATE 

            setOrder(updatedOrder)
        } else {
            //Agregar una nueva cantidad al obejto
            const newItem : OrderItem = {...item, quantity: 1} //Toma una copia de lo que hay en el item, luego le asiganmos la nueva cantidad
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id : MenuItem['id']) => {
        setOrder(order.filter(item => item.id != id))
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
  }
}