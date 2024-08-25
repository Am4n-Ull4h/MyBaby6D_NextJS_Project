import Link from 'next/link'
import React, { Fragment } from 'react'


let FAQsData = [
    {
        quest : 'How does this compare to traditional methods like 8K, RealView, or manual AI processing?',
        ans : ['The results resemble actual photographs.', 'The processing is automated and only takes about 2 minutes - parents appreciate receiving their enhanced results immediately after their ultrasound.', 'The fee is per baby, not per ultrasound. So, you can process multiple 3D ultrasounds of the same baby at once and get numerous enhanced results for one price.', 'You can download transformation video for free. It can include your studio logo – great for social media.']
        
    },
    {
        quest : 'Try Photorealistic Ultrasound for free?',
        ans : ['The results resemble actual photographs.', 'The processing is automated and only takes about 2 minutes - parents appreciate receiving their enhanced results immediately after their ultrasound.', 'The fee is per baby, not per ultrasound. So, you can process multiple 3D ultrasounds of the same baby at once and get numerous enhanced results for one price.', 'You can download transformation video for free. It can include your studio logo – great for social media.']
        
    },
    {
        quest : 'Special prices or discounts for studios?',
        ans : ['The results resemble actual photographs.', 'The processing is automated and only takes about 2 minutes - parents appreciate receiving their enhanced results immediately after their ultrasound.', 'The fee is per baby, not per ultrasound. So, you can process multiple 3D ultrasounds of the same baby at once and get numerous enhanced results for one price.', 'You can download transformation video for free. It can include your studio logo – great for social media.']
        
    },
    {
        quest : 'Ultrasound enhancement process for studios?',
        ans : ['The results resemble actual photographs.', 'The processing is automated and only takes about 2 minutes - parents appreciate receiving their enhanced results immediately after their ultrasound.', 'The fee is per baby, not per ultrasound. So, you can process multiple 3D ultrasounds of the same baby at once and get numerous enhanced results for one price.', 'You can download transformation video for free. It can include your studio logo – great for social media.']
        
    },
    {
        quest : 'Maximum number of 3D ultrasounds that can be processed at once?',
        ans : ['The results resemble actual photographs.', 'The processing is automated and only takes about 2 minutes - parents appreciate receiving their enhanced results immediately after their ultrasound.', 'The fee is per baby, not per ultrasound. So, you can process multiple 3D ultrasounds of the same baby at once and get numerous enhanced results for one price.', 'You can download transformation video for free. It can include your studio logo – great for social media.']
        
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
                        elm.ans.map((elm2, ind2) => <li key={ind2} className='ps-2 py-2' style={{listStyle : 'number'}}>{elm2}</li>)
                    }
                </div>
            </details> : <details className='Faq bg-[#F5F5F5] rounded-2xl p-3 px-10 mt-3 shadow' key={ind} >
                <summary className='cursor-pointer flex justify-between font-medium'>{elm.quest} <p className='SummMark'></p></summary>
                <div>
                    {
                        elm.ans.map((elm2, ind2) => <li key={ind2} className='ps-2 py-2' style={{listStyle : 'number'}}>{elm2}</li>)
                    }
                </div>
            </details>)
        }
      </div>      
    </Fragment>
  )
}

export default FreqaskQuest
