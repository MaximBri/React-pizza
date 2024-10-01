export const getDataFromLS = ()  =>{
  const data = localStorage.getItem('Pizzas')
  if(data) return JSON.parse(data)
  return []
}