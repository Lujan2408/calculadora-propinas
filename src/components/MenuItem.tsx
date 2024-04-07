import type { MenuItem } from "../types/types"

type MenuItemProps = {
    item: MenuItem
    addItem: () => void
}

export default function MenuItem({ item, addItem } : MenuItemProps) {

    return (
    <button className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
        <p className=" font-medium"
            onClick={() => addItem()}
        >{item.name}</p>
        <p className=" font-black">${item.price}</p>
    </button>
  )
}
