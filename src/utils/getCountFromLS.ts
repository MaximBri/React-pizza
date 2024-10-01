export const getCountFromLS = ()  =>{
  const data = localStorage.getItem('Count')
  if(data) return JSON.parse(data)
  return 0
}