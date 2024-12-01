import Link from 'next/link'
import React, { Fragment } from 'react'


let FAQsData = [
    {
        quest : 'Comment l’application améliore-t-elle les échographies prénatales?',
        ans : 'L’application utilise l’intelligence artificielle pour améliorer la qualité visuelle des échographies en offrant des images plus nettes, plus claires et plus détaillées, permettant ainsi aux parents de mieux voir leur futur bébé.'
        
    },
    {
        quest : 'L’application peut-elle diagnostiquer des problèmes médicaux?',
        ans : 'Non, l’application n’est pas destinée à un usage médical et ne fournit aucun diagnostic. Son objectif est purement d’améliorer la qualité des images échographiques à des fins personnelles ou esthétiques.'
        
    },
    {
        quest : 'L’application est-elle sûre à utiliser?',
        ans : 'Oui, l’application traite uniquement des images échographiques existantes et n’interfère pas avec les dispositifs médicaux. Toutes les données sont cryptées pour garantir la confidentialité des utilisateurs.'
        
    },
    {
        quest : 'Peut-elle être utilisée avec tout type de machine à ultrasons?',
        ans : 'L’application est compatible avec la plupart des images échographiques existantes, quel que soit l’appareil utilisé. Elle fonctionne avec les images téléchargées ou fournies par les professionnels de santé après une échographie.'
        
    },
    {
        quest : 'L’application peut-elle être utilisée à domicile par des particuliers?',
        ans : 'Oui, les particuliers peuvent utiliser l’application après avoir obtenu leurs images échographiques auprès d’un professionnel de santé. Elle améliore ensuite la qualité visuelle des images pour une meilleure expérience personnelle.'
        
    },
    {
        quest : 'Y a-t-il des tarifs spéciaux ou des réductions pour les studios?',
        ans :'Oui, nous proposons des abonnements spécialement conçus pour les professionnels, y compris les studios et les prestataires de soins de santé. Ces abonnements offrent des tarifs spéciaux et des fonctionnalités adaptées aux besoins des utilisateurs professionnels.'
        
    },
]

function FrenchFaq() {

    
  return (
    <Fragment>
      <div className='text-center mt-12'>
      <h1 className='md:text-[35px] text-[30px] font-extrabold'>Questions fréquemment <span className='TomatoFont'>posées</span></h1>
      <p className='mt-3 text-[#1212129a]'>Vous ne trouvez pas la réponse que vous cherchez ?   <br className="br1" />Contactez-nous via notre page de  <Link href='/contact' className='TomatoFont underline font-semibold'>contact</Link></p>
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

export default FrenchFaq
