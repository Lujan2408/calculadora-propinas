import { useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    //Calcular el subtotal a pagar (useMemo se renderiza cada que cambia el componente)
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tipAmount, subtotalAmount])

  return (
    <>
        <div className=" space-y-3 ">
            <h2 className=" font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className=" font-bold">{ formatCurrency(subtotalAmount) }</span>
            </p>
            
            <p>Propina: {''}
                <span className=" font-bold">{ formatCurrency(tipAmount)}</span>
            </p>
            
            <p>Total a pagar: {''}
                <span className=" font-bold">{ formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button className=" w-full bg-black p-3 uppercase text-white font-medium disabled:opacity-20"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
