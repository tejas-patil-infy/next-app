"use client"
import Link from "next/link";
import { useState } from "react";
import { Button } from 'react-bootstrap';

const NewPage = () => {
  const [record, setRecord] = useState("one");
  const arr = ["one", "two", "three", "four"];

  const handleSelect = (e: any) => {
    setRecord(e.target.value)
  }
  
  return (
    <div className="p-4 m-44">
      <h1>NewPage</h1>
      <Link href={'/'}>
        <Button variant="outline-secondary" size="sm">Back</Button>
        {/* <button className="px-4 py-2 bg-blue-600 text-white rounded">Back</button> */}
      </Link>
      <div className="my-4 flex flex-col max-w-[250px]">
        <div>
          Select Record : &nbsp;
          <select className="outline my-2" onChange={(e) => handleSelect(e)}>
            {arr.map((i) => {
              return (<option key={i}>{i}</option>)
            })}
          </select>
        </div>
        <Link href={`/newpage/${record}`}>
          <Button variant="outline-secondary" size="sm">Go new dynamic record page</Button>
        </Link>
      </div>
    </div>
  )
}

export default NewPage;