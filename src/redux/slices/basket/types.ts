interface PizzaItemType {
  id: number
  price: number
  title: string
  type: number
  size: number
  sizes: number[]
}
interface ItemsType {
  totalPrice: number
  count: number
  items: ItemTypeWithCount[]
}
type ItemTypeWithCount = PizzaItemType & {
  count: number
}
type DeleteType = {
  id: number
  size: number
  type: number
}
