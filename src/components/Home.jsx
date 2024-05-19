import React from 'react'
import TextAndPic from './HomeComponents/TextAndPic'
import MenuAndClient from './HomeComponents/MenuAndClient'
import ClientFeedback from './HomeComponents/ClientFeedback'
import Subscribe from './HomeComponents/Subscribe'

const Home = () => {
  return (
    <>
        <TextAndPic />
        <MenuAndClient />
        {/* another one missing for now */}
        <ClientFeedback />
        <Subscribe />
    </>
  )
}

export default Home