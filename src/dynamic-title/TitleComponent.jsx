import React from 'react'
import { Helmet } from 'react-helmet-async'

const   TitleComponent = () => {
  return (
    < >
    <div className="">
        <Helmet>
            <title>Home - my app</title>
            <meta nam="description" content="Page specific meta tags here" />
        </Helmet>
    </div>
    </>
  )
}

export default TitleComponent