import { toast } from "react-toastify";
import { ProductTypes } from "../../data/products"

export interface ICartItem extends ProductTypes {
    amout: number;
    totalPrice?: number;
    size?: string;
}

class Cart {


    itens: ICartItem[] = []

    addItem(item: ICartItem | undefined) {
        this.itens = JSON.parse(localStorage.getItem("cart") || "[]")
        if (this.itens.find(i => i.id == item!.id && i.size == item!.size)) {
            throw new Error('Este produto já está na sacola')
        } else {
            this.itens.push(item!)
            localStorage.setItem('cart', JSON.stringify(this.itens))
        }

    }

    getCart() {
        this.itens = JSON.parse(localStorage.getItem("cart") || "[]")
        return this.itens
    }

    clearCart() {
        localStorage.clear()
    }

    getTotal() {
        return this.itens.reduce((prev, curr) => prev + (curr.price * curr.amout), 0)
    }

    removeItem(productId: number, size: string | undefined) {
        this.itens = this.itens.filter(item => !(item.id === productId && item.size === size))
        localStorage.setItem("cart", JSON.stringify(this.itens));
    }

    updateAmoutItem(productId: number, amout: number) {
        this.itens.map(item => {
            if (item.id == productId) {
                item.amout = amout
            }
        })
        localStorage.setItem('cart', JSON.stringify(this.itens))
    }

}

export default new Cart