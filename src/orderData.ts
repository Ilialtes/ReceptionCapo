export default interface Order {
    id: string,
    products: Product[],
    UID: string,
    user: User,
    photoURL: string,
    address: Address,
    total: number,
    state: string //new, pending, finished, rejected
}

export interface Address {
    location: string,
    position: {
      lat: number, lng: number
    },
    otherSigns: string
}

export interface User {
    name: string,
    address: Address,
    telephone: string
  }

  export interface Product {
    id: string,
    name: string,
    size: string,
    price: number,
    observation: string,
    quantity: number,
    extras: string[]
  }