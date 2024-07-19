import React from 'react'
import '../style/template.css'

export const ContactComp = () => {
  return (
    <div className='h-screen fixed left-[20%] w-[80%] bg-primaryColor '>
      <div className='p-10' >
        <div>
          <div>
            <div>
              <h1>Contact</h1>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactComp



{/* <div className='py-10'>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="name"
                        type="text"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="message"
                        rows={5}
                        placeholder="Your message"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" first="Send" second="Message"/>
                  </div>
                </form>
              </div> */}