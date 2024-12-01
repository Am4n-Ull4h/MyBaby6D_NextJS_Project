import Link from 'next/link'
import React, { Fragment } from 'react'


let FAQsData = [
    {
        quest : 'How does the app enhance prenatal ultrasounds?',
        ans : 'The app uses artificial intelligence to improve the visual quality of ultrasounds by providing clearer, sharper, and more detailed images, allowing parents to better see their future baby.'
        
    },
    {
        quest : 'Can the app diagnose medical issues?',
        ans : 'No, the app is not intended for medical use and does not provide any diagnostics. Its purpose is purely to enhance the quality of ultrasound images for personal or aesthetic purposes.'
        
    },
    {
        quest : 'Is the app safe to use?',
        ans : 'Yes, the app only processes existing ultrasound images and does not interfere with medical devices. All data is encrypted to ensure user privacy.'
        
    },
    {
        quest : 'Can it be used with any type of ultrasound machine?',
        ans : 'The app is compatible with most existing ultrasound images, regardless of the machine used. It works with images uploaded or provided by healthcare professionals after an ultrasound.'
        
    },
    {
        quest : 'Can the app be used at home by individuals?',
        ans : 'Yes, individuals can use the app after obtaining their ultrasound images from a healthcare professional. It then enhances the visual quality of the images for a better personal experience.'
        
    },
    {
        quest : 'Are there special prices or discounts for studios?',
        ans :'Yes, we offer subscription plans specifically for professionals, including studios and healthcare providers. These plans provide access to special pricing and features tailored to meet the needs of professional users.'
        
    },
]

function FreqaskQuest() {

    
  return (
    <Fragment>
      <div className='text-center mt-12'>
      <h1 className='md:text-[35px] text-[30px] font-extrabold'>Frequently Asked <span className='TomatoFont'>Questions</span></h1>
      <p className='mt-3 text-[#1212129a]'>Can't find the answer you're looking for? <br />
      Reach out via our <Link href='/contact' className='TomatoFont underline font-semibold'>contact page</Link></p>
      </div>
      <div className='mt-7'>
        {
            FAQsData.map((elm,ind) => ind === 0 ? <details open className='Faq shadow bg-[#F5F5F5] rounded-2xl p-3 px-10' key={ind} >
                <summary className='cursor-pointer flex justify-between font-medium'>{elm.quest} <p className='SummMark'></p></summary>
                <div>
                    {
                         <li key={ind} className='ps-2 py-2' style={{listStyle : 'none'}}>{elm.ans}</li>
                    }
                </div>
            </details> : <details className='Faq bg-[#F5F5F5] rounded-2xl p-3 px-10 mt-3 shadow' key={ind} >
                <summary className='cursor-pointer flex justify-between font-medium'>{elm.quest} <p className='SummMark'></p></summary>
                <div>
                    {
                        <li key={ind} className='ps-2 py-2' style={{listStyle : 'none'}}>{elm.ans}</li>
                    }
                </div>
            </details>)
        }
      </div>      
    </Fragment>
  )
}

export default FreqaskQuest
