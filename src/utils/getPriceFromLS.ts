export const getPriceFromLS = ()  =>{
  const data = localStorage.getItem('TotalPrice')
  if(data) return JSON.parse(data)
  return 0
}