"use client"
import Link from "next/link";
import { useState } from "react";
// import { RodeoBanner } from "react-rodeo-lib";

const NewPage = () => {
  const [record, setRecord] = useState("one");
  const arr = ["one", "two", "three", "four"];

  const handleSelect = (e: any) => {
    setRecord(e.target.value)
  }

  return (
    <div className="p-4 m-44">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        NewPage
      </h1>
      <Link href={'/'}>
        {/* <Button variant="outline-secondary" size="sm">Back</Button> */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Back</button>
      </Link>
      <div className="my-4 flex flex-col max-w-[250px]" style={{color: "black"}}>
        <div>
          Select Record : &nbsp;
          <select className="outline my-2 p-1 cursor-pointer" onChange={(e) => handleSelect(e)}>
            {arr.map((i) => {
              return (<option key={i}>{i}</option>)
            })}
          </select>
        </div>
        <Link href={`/newpage/${record}`}>
          {/* <Button variant="outline-secondary" size="sm">Go new dynamic record page</Button> */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Go to dynamic record page</button>
        </Link>
        {/* <RodeoLink label="Link1" href="/" /> */}
      </div>
      {/* <RodeoBanner header="Notification" type="info" description="desc"/>
      <RodeoBanner header="Notification" type="warning" description="desc" size="large" actionText="Action" onAction={()=> ''}/>
      <RodeoBanner header="Notification" type="error" description="desc" size="small"/>
      <RodeoBanner header="Notification" type="success" description="desc" actionText="Action" onAction={()=> alert('Hii action')}/>
      <RodeoBanner header="Notification" type="alert" description="desc"  actionText="Action" onAction={()=> ''} closable={false}/> */}
    </div>
  )
}

export default NewPage;