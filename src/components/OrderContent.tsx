import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types/types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id : MenuItem['id']) => void
}

export default function OrderContent({ order, removeItem } : OrderContentProps) {
  return (
    <div>
        <h2 className=" font-black text-4xl ">Consumo</h2>

        <div className=" space-y-3 mt-10">
            {order.length === 0 ? 
                <p className=" text-center font-bold ">Está vacío</p>
            : (
                order.map( item => (
                    <div 
                        key={item.id}
                        className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >    
                        <div>
                            <p className=" text-lg font-medium">
                                {item.name} - {formatCurrency(item.price) }
                            </p>
                            
                            <p className=" font-black">
                                Cantidad: {item.quantity} - { formatCurrency(item.quantity * item.price) }   
                            </p>
                        </div>

                        <button className=" bg-red-600 w-8 h-8 font-black text-white rounded-full"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
