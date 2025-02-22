import { useState } from 'react'
import logo from '../../assets/logo.svg'
import sunBtn from '../../assets/sunBtn.svg'
import moonBtn from '../../assets/moonBtn.svg'
import radioBtnContainer from '../../assets/radioBtnContainer.svg'

import Filter from './components/Filter'

const Header = () => {
  const [on, setOn] = useState(true)
  return (
    <div className="
    h-[136px] mb-4 relative
                     bg-[url('assets/mobileBg.png')] bg-no-repeat 
                  md:bg-[url('assets/tabletBg.png')] md:bg-contain md:h-[160px]
                  lg:bg-[url('assets/desktopBg.png')] lg:h-[162px] lg:p-5">
                    <div className='flex justify-between mx-[24px] h-full items-center'>
                      <div>
                        <img src={logo} alt="" />
                      </div>
                      <div className='flex items-center gap-[1rem]'>
                        <div className='hover:cursor-pointer'>
                          <img src={sunBtn} alt="" />
                        </div>
                        <div className='relative'>
                          <img src={radioBtnContainer} alt="" />
                          <div 
                              onClick={() => setOn(!on)}
                              className={`w-[14px] h-[14px] hover:cursor-pointer rounded-full absolute bg-[#5964E0] top-[5px]  ${on ? "left-1" : "left-7" } transition-all duration-300`}></div>
                        </div>
                        <div className='hover:cursor-pointer'>
                          <img src={moonBtn} alt="" />
                        </div>
                      </div>
                    </div>
                   

                   <Filter/>
        
    </div>
  )
}

export default Header