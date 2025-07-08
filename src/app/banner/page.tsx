"use client"

import { RodeoBanner } from "react-rodeo-lib";
// import './banner/banner.css'

const NewComponent = () => {

  return (
    <div className="p-1 m-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Rodeo Banner
      </h1>
      <div className="flex flex-col gap-4">
        <RodeoBanner header="Notification Header" type="info" description="Notification description" />
        <RodeoBanner header="Notification Header" type="warning" description="Notification description" size="large" actionText="Action" onAction={() => ''} />
        <RodeoBanner header="Notification Header" type="error" description="Notification description" size="small" closable={true} timer="none"/>
        <RodeoBanner header="Notification Header" type="success" description="Notification description" actionText="Action" onAction={() => alert('Hii action')} />
        <RodeoBanner header="Notification Header" type="alert" description="Notification description" actionText="Action" onAction={() => ''} closable={true} width={500} timer="none" alignment="center" />
      </div>
    </div>
  )
}

export default NewComponent;