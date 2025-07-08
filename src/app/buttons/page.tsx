"use client"

import { RodeoButton } from "react-rodeo-lib";

const NewComponent = () => {

  return (
    <div className="p-1 m-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Rodeo Buttons
      </h1>
      <div className="flex gap-20">
        <div className="flex flex-col gap-4">
          <RodeoButton type="primary" label="Primary" onClick={() => alert('Hiii')} size="small" />
          <RodeoButton type="primary-neutral" label="Primary" onClick={() => alert('Hiii')} size="small" />
          <RodeoButton type="secondary" label="Secondary" onClick={() => alert('Hiii')} size="small" />
          <RodeoButton type="secondary-neutral" label="Secondary" onClick={() => alert('Hiii')} size="small" />
          <RodeoButton label="Disabled" type="tertiary" size="medium" />
        </div>
        <div className="flex flex-col gap-4">
          <RodeoButton type="primary" label="Primary" onClick={() => alert('Hiii')} />
          <RodeoButton type="primary-neutral" label="Primary" onClick={() => alert('Hiii')} />
          <RodeoButton type="secondary" label="Secondary" onClick={() => alert('Hiii')} />
          <RodeoButton type="secondary-neutral" label="Secondary" onClick={() => alert('Hiii')} />
          <RodeoButton label="Disabled" type="tertiary" size="medium" />
        </div>
        <div className="flex flex-col gap-4">
          <RodeoButton type="primary" label="Primary" onClick={() => alert('Hiii')} size="large" />
          <RodeoButton type="primary-neutral" label="Primary" onClick={() => alert('Hiii')} size="large" />
          <RodeoButton type="secondary" label="Secondary" onClick={() => alert('Hiii')} size="large" />
          <RodeoButton type="secondary-neutral" label="Secondary" onClick={() => alert('Hiii')} size="large" />
          <RodeoButton label="Disabled" type="tertiary" size="medium" />
        </div>
        <div className="flex flex-col gap-4">
          <RodeoButton type="primary" label="Primary" onClick={() => alert('Hiii')} size="large" disabled/>
          <RodeoButton type="primary-neutral" label="Primary" onClick={() => alert('Hiii')} size="large" disabled/>
          <RodeoButton type="secondary" label="Secondary" onClick={() => alert('Hiii')} size="large" disabled/>
          <RodeoButton type="secondary-neutral" label="Secondary" onClick={() => alert('Hiii')} size="large" disabled/>
          <RodeoButton label="Disabled" type="tertiary" size="medium" />
        </div>
      </div>
    </div>
  )
}

export default NewComponent;