import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function DetailContent({ productDetail }) {
  return (
    <div className=" ">
      <Tabs>
        <TabList className="flex gap-2 font-semibold">
          <Tab className='focus:bg-yellow-400 border h-12 items-center flex p-4  bg-gray-100'>İlan Detayları</Tab>
          <Tab className='focus:bg-yellow-400 border h-12 items-center flex p-4 bg-gray-100'>Konumu</Tab>
          <Tab className='focus:bg-yellow-400 border h-12 items-center flex p-4 bg-gray-100'> Teknik Özellikleri</Tab>
        </TabList>
        <div className="bg-white h-[750px] border shadow-lg">
          <TabPanel >
            <div className='bg-gray-100 px-4 h-10 flex items-center font-semibold '>Açıklama</div>
            <h2 className='p-16 w-10/12 text-2xl font-semibold justify-center flex bg-white'>{productDetail.description}</h2>
          </TabPanel>
          <TabPanel>

            <h2>harita</h2>
          </TabPanel>
          <TabPanel>
            <h2>teknik özellikler</h2>
          </TabPanel></div>
      </Tabs>
      <div className='h-[400px] my-4 border shadow-lg'>
        <div className='bg-gray-100 px-4 h-10 flex items-center font-semibold '>
          Özellikler
        </div>
        <div>
          <h2 className='p-16 w-10/12 text-2xl font-semibold justify-center flex bg-white'>{productDetail.description}</h2>
        </div>
      </div>

      <div className='border shadow-lg'>
        <div className='m-7 text-sm'>
          <div>Vasıta alırken/kiralarken bunlara dikkat edin!</div>
          <div className='mt-4'>  mahibinden.com, tüm kullanıcılar için tam bir güvenlik sağlamayı amaç edinmiştir. Siz de kendi güvenliğiniz ve diğer kullanıcılar için, satın almak ya da kiralamak istediğiniz vasıta ile ilgili kesin karar vermeden ön ödeme yapmamaya, avans ya da kapora ödememeye özen gösteriniz. İlan sahiplerinin ilanlarda belirttiği herhangi bir bilgi ya da görselin gerçeği yansıtmadığını düşünüyorsanız veya ilan sahiplerinin hesap profillerindeki bilgilerin doğru olmadığını düşünüyorsanız, lütfen bize haber veriniz.
          </div>
        </div>
      </div>
      <div className='border my-4 h-20'>
        <div className='p-4 shadow-lg  text-xl bg-gray-100'>
          Sponsorlu bağlantı
        </div>
      </div>
    </div>
  )
}

export default DetailContent