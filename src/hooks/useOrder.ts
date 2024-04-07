import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

export default function useOrder() {
  
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        console.log(item)
    }

    return {
        addItem
  }
}
