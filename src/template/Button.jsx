import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button class="btn-37 relative block p-4 px-16 overflow-hidden text-white bg-secondaryColor uppercase cursor-pointer hover:text-white hover:bg-secondary-30" type={props.type}>
            <span class="new font-black scale-0 transition-transform duration-200 hover:scale-100 block">{props.second}</span>
            <div class="old inset-0 absolute">
                <span class=" grid place-items-center absolute inset-0 bg-primaryColor text-black font-black clip-left transition-transform duration-200 hover:-translate-y-full">{props.first}</span>
                <span class=" grid place-items-center absolute inset-0 bg-secondaryColor text-black font-black clip-right transition-transform duration-200 hover:translate-y-full">{props.first}</span>
            </div>
        </button>
    </div>
  )
}
export default Button