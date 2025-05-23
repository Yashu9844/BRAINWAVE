import React from 'react'
import {brainwave} from '../assets'
import { navigation } from '../helper/helper'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import {HambugerMenu} from './design/Header'
import { enablePageScroll,disablePageScroll } from 'scroll-lock'

const Header = () => {
    const pathname = useLocation()
    const [openNavigation, setOpenNavigation] = React.useState(false);
    const toggleNaviagtion =()=>{
        if(openNavigation){
            enablePageScroll(true)
            setOpenNavigation(false)
        }else{
            
            setOpenNavigation(true)
        disablePageScroll(true)        }
    }
    const hanleOnClick=()=>{
        setOpenNavigation(false)
    }
  return (
    <div className=
    {`fixed top-0 z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm w-full ${openNavigation ? 'bg-n-8 ':'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between">
            <div className="">
            <a className='block w-[12rem] xl:mr-8 ' href="#hero">
                <img src={brainwave} width={190} height={40} />
            </a>
            </div>
            <nav className={ `${openNavigation ? "flex":"hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ` }>
                <div className="relative x-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
                {navigation.map((item)=>(
                        <a key={item.id} href={item.url} onClick={hanleOnClick} 
                        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors
                                   hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""}
                                   px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                         {item.title}
                     </a>
                     
                    ))}
                    
                </div>
                <HambugerMenu />
            </nav>
           <div className="flex lg:flex-row items-center">
           <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'> New account
            </a>
            <Button classname='hidden lg:flex ' href='#login'>Sign in</Button>
            <Button classname={'lg:hidden ml-auto'} onClick={toggleNaviagtion}>
                <MenuSvg openNavigation={openNavigation} />
            </Button>
           </div>
        </div>
      
    </div>
  )
}

export default Header
