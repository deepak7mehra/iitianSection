import React from 'react'
import styles from "./Card.module.css"
export default function Card({children}) {
  return (

    <div className={` ${styles.animate} w-[280px] h-[409px]  relative`}>
        {children}

    </div>

    
    /* <div className=' text-white md:mx-[20px] mx-[10px] flex flex-col justify-between items-center dark:bg-[#191C1E] bg-[#D1FFD0] w-[220px] md:w-[280px] h-[350px] md:h-[409px] rounded-[20px]'>
        <div className='h-[50%]'>
            
        </div>
        <div className=' flex flex-col justify-between h-[50%] dark:bg-[#1C202A] bg-[#E1FFE8] grow w-full px-[40px] rounded-[20px]'>
            <div className=''>
                <h4 className='font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]'>Deepak mehra</h4>
                <h6 className='md:mb-[10px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]'>Lead Instructor </h6>
            </div>
            <div className='pb-[15px] '>
                <p className='font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]'>CSR IITd,
                <br />
                Mtech Standford
                </p>
                <div className='flex flex-row justify-between'>
                <div>
                    this
                </div>
                <div>
                    this
                </div>
            </div>
            </div>
            

        </div>
    </div> */
  )
}

function front(){

    return(
        
        <div className={`${styles.card__side} ${styles.card__sideFront}  absolute w-full h-full text-white md:mx-[20px] mx-[10px] flex flex-col justify-between items-center bg-[#191C1E] left-0 right-0 top-0 bottom-0 rounded-[20px] `}>
        <div className='h-[50%]'>
            
        </div>
        <div className=' flex flex-col justify-between h-[50%] bg-[#1C202A]  grow w-full px-[40px] rounded-[20px]'>
            <div className=''>
                <h4 className='font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]'>Deepak mehra</h4>
                <h6 className='md:mb-[10px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]'>Student </h6>
            </div>
            <div className='pb-[15px] '>
                <p className='font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]'>CSE- dronacharya college,
                <br />
                FullStack developer
                </p>
                <div className='flex flex-row justify-between'>
                <div>
                    <img src="/images/github.png" alt="an image" width="30" />
                </div>
                <div>
                <a rel="stylesheet" href="https://www.linkedin.com/in/deepak-mehra-9015882a6/" target='_blank' > 
                    <img src="/images/Linkedin.png" alt="an image" width="30" />
                    </a>
                   
                </div>
            </div>
            </div>
            

        </div>
    </div>

    )
}

function back(){
    return(
        <div className={` ${styles.card__side} ${styles.card__sideBack} absolute h-full w-full bg-gradient-to-b from-indigo-500 to-indigo-900 rounded-[20px] p-2 pt-10 text-[#ffff]`}>
            <h4 className='underline text-xl   font-semibold text-center'>Deepak Mehra</h4>

            <div className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, exercitationem ex. Quod quae, magnam veritatis maxime deserunt ad cumque impedit beatae vero eum illo qui voluptate laudantium doloremque alias nihil dicta dolores, quidem, magni sunt! Quia sequi saepe expedita ratione!</div>

            <div className='flex flex-row justify-between mt-10'>
                <div>
                    <a rel="stylesheet" href="https://github.com/deepak7mehra" target='_blank' > 
                    <img src="/images/github.png" alt="an image" width="30" />
                    </a>
                </div>
                <div>
                <a rel="stylesheet" href="https://www.linkedin.com/in/deepak-mehra-9015882a6/" target='_blank' > 
                    <img src="/images/Linkedin.png" alt="an image" width="30" />
                    </a>
                   
                </div>
            </div>


        </div>
    )
}

Card.front = front;
Card.back = back;
