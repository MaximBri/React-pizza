import React from "react"
import ContentLoader from "react-content-loader"

const GoodSceleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={190}
    viewBox="0 0 280 190"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* <rect x="211" y="55" rx="0" ry="0" width="76" height="1" />  */}
    <rect x="1" y="10" rx="0" ry="0" width="280" height="30" /> 
    <rect x="0" y="55" rx="19" ry="19" width="280" height="70" /> 
    <rect x="0" y="150" rx="15" ry="15" width="100" height="35" /> 
    <rect x="140" y="150" rx="30" ry="30" width="140" height="35" />
  </ContentLoader>
)

export default GoodSceleton