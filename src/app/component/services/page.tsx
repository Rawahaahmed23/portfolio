import React from 'react'

function Service() {
  return (
    <div> 

        <div className='flex flex-col justify-center items-center h-[full]'>
            <div>
            <h1 className="text-3xl font-bold text-black m-10" style={{ fontFamily: "Raleway, sans-serif" }}>Portfolio</h1>
            </div>




<div>
  
            <div className='w-full justify-center items-center  flex  mb-24 flex-col lg:flex-row ' >
                <div className='w-full sm:w-[90%] p-14 bg-[#fffff] rounded-xl flex  flex-col lg:w-[40%] '>              
                <h1 className="text-3xl font-bold text-black mb-5 " style={{ fontFamily: "Raleway, sans-serif" }}>Education topic Animations</h1>
              <p className='font-plex text-[#9C9C9C] w-[100%]'  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem soluta, rem at omnis iusto ut porro earum dolorem, delectus laboriosam? Dolorum, voluptas.</p>
              <button className='bg-[#FFA217] w-[188px] h-[38px] font-[IBM_Plex_Mono] text-white font-bolder mt-10'>CLick to see more</button>
              </div>



              <div className='w-[90%] lg:w-[30rem] '>
               <img src="/education.jpg" className='rounded-xl' alt="" />
            </div>

 </div>





            <div className='w-full justify-center items-center  flex-col flex mb-24 lg:flex-row '>

              
            <div className="w-[90%] lg:w-[30rem] hidden lg:block">
               <img src="/web.jpg" className='rounded-xl' alt="" />
            </div>
                <div className='w-[90%] p-14 bg-[#fffff] rounded-xl flex  flex-col lg:w-[40%]'>              
                <h1 className="text-3xl font-bold text-black mb-5 " style={{ fontFamily: "Raleway, sans-serif" }}>Websites</h1>
              <p className='font-plex text-[#9C9C9C] w-[100%]' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem soluta, rem at omnis iusto ut porro earum dolorem, delectus laboriosam? Dolorum, voluptas.</p>
              <button className='bg-[#000AFF] w-[188px] h-[38px] font-[IBM_Plex_Mono] text-white font-bolder mt-10'>CLick to see more</button>
              </div>

              <div className='w-[90%] lg:hidden'>
               <img src="/web.jpg" className='rounded-xl' alt="" />
            </div>
  </div>

  <div className='w-full justify-center items-center  flex flex-col mb-24 lg:flex-row' >
                <div className='w-[90%] p-14 bg-[#fffff] rounded-xl flex  flex-col  lg:w-[40%]'>              
                <h1 className="text-3xl font-bold text-black mb-5 " style={{ fontFamily: "Raleway, sans-serif" }}>Education topic Animations</h1>
              <p className='font-plex text-[#9C9C9C] w-[100%]'  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem soluta, rem at omnis iusto ut porro earum dolorem, delectus laboriosam? Dolorum, voluptas.</p>
              <button className='bg-[#2AB090] w-[188px] h-[38px] font-[IBM_Plex_Mono] text-white font-bolder mt-10'>CLick to see more</button>
              </div>



              <div className='w-[90%] lg:w-[30rem] '>
               <img src="/idea1.jpeg" className='rounded-xl' alt="" />
            </div>

 </div>




    </div>










            
        </div>
    </div>
  )
}

export default Service