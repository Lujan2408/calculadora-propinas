import { useState } from "react"
import type { OrderItem } from "../types/types"

export default function useOrder() {
  
    const [order, setOrder] = useState<OrderItem[]>([])

    return {

  }
}
