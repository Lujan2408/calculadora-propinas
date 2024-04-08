import type { OrderItem } from "../types/types"

type OrderContentProps = {
    order: OrderItem[]
}

export default function OrderContent({order} : OrderContentProps) {
  return (
    <div>
        <h2 className=" font-black text-4xl ">Consumo</h2>

        <div className=" space-y-3 mt-5">
            {order.length === 0 ? 
                <p className=" text-center font-bold ">Está vacío</p>
            : (
                order.map( item => (
                    <div key={item.id}>
                        <p>
                            {item.name}
                        </p>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}