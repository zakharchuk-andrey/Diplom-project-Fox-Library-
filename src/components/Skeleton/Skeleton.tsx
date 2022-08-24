import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={200}
    viewBox="0 0 300 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="124" y="154" rx="0" ry="0" width="1" height="0" /> 
    <rect x="32" y="48" rx="8" ry="8" width="122" height="220" /> 
    <rect x="169" y="48" rx="8" ry="8" width="100" height="26" /> 
    <rect x="235" y="52" rx="0" ry="0" width="0" height="1" /> 
    <rect x="169" y="88" rx="0" ry="0" width="88" height="14" /> 
    <rect x="169" y="110" rx="0" ry="0" width="122" height="19" /> 
    <rect x="169" y="153" rx="0" ry="0" width="122" height="16" /> 
    <rect x="169" y="180" rx="0" ry="0" width="122" height="19" /> 
    <rect x="169" y="187" rx="8" ry="8" width="122" height="32" />
  </ContentLoader>
)


