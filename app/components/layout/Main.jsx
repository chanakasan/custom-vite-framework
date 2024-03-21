import React from 'react'
import '@modules/tailwind/css/tailwind.css'

const OuterWrapper = ({ children }) => (
  <div className="w-full h-full bg-[#222] text-gray-300 pt-[60px]
  " data-testid="outer-wrapper">
    {children}
  </div>
)

const InnerWrapper = ({ children }) => (
  <div className="bg-[#333] py-8 px-16 mx-auto w-11/12 h-[90%] rounded-sm" data-testid="inner-wrapper">
    {children}
  </div>
)

export default function TailwindMain({ children }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </OuterWrapper>
  )
}
