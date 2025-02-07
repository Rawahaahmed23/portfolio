
import { div } from "motion/react-client"
import Service from "./component/services/page"
import Footer from "./component/footer/page"

function hero() {
  return (
    <div>
    <div>
    <div className='w-full h-[53rem] bg-[#000000]  top-0 z-[-1] '>


        <div className="flex flex-col items-center justify-center items-center  lg:flex-row justify-evenly h-full items-center">
            


         <div className='mt-5 w-[17rem] h-[20rem] lg:hidden flex justify-center items-center w-[25rem] h-[25rem] rounded-[50%] p-[5px] bg-gradient-to-r from-[#3F8E00] to-[#62BA1B]' >
         <div className='w-40rem sm:w-full h-full rounded-[50%] overflow-hidden'>

    <img src="/man1.jpg" alt="" className='w-full h-full object-cover' />
  </div>
</div>





            <div className="flex flex-col justify-center items-center lg:block">
              <h1 className='text-3xl text-white font-bold   lg:text-6xl  mb-5' style={{ fontFamily: 'Raleway, sans-serif' }}>Rawaha Ahmed</h1>
              <h2 
  className="text-3xl font-bold mb-5 bg-gradient-to-r from-[#3F8E00] to-[#62BA1B] text-transparent bg-clip-text"
  style={{ fontFamily: 'Raleway, sans-serif' }}>
  Frontend Developer
</h2>
              <p className='text-[#9C9C9C] w-[70%] text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum voluptatem </p>
              <button 
  className="bg-gradient-to-r from-[#3F8E00] to-[#62BA1B] w-[307px] h-[63px] mt-10 text-white font-bold rounded-md shadow-lg"
  style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
  Download CV
</button>
            </div>




            <div className='hidden lg:flex justify-center items-center w-[25rem] h-[25rem] rounded-[50%] p-[5px] bg-gradient-to-r from-[#3F8E00] to-[#62BA1B]' >
  <div className='w-full h-full rounded-[50%] overflow-hidden'>
    <img src="/man1.jpg" alt="" className='w-full h-full object-cover' />
  </div>



  
</div>

         </div>

         </div>



      

    </div>
        <Service />
        <Footer />
    </div>
  )
}

export default hero