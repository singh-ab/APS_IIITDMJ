import React from 'react'

export default function Button({children,onClick}:{children:React.ReactNode,onClick?:()=>void}) {
  return (
    <button className="shadow-[0_0_0_3px_teal-400_inset] px-6 py-2 bg-transparent border border-teal-400 dark:border-teal-400 dark:text-teal-400 text-teal-400 font-bold transform hover:-translate-y-1 transition duration-400 hover:border-white hover:text-white" onClick={onClick}>
    {children}
  </button>
  )
}
