"use client"
import { useState } from "react";
import { RodeoButton, RodeoToast } from "react-rodeo-lib";

const NewComponent = () => {
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);


  return (
    <div className="p-1 m-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Rodeo Toast
      </h1>
      <div className="flex flex-col gap-4">
        <RodeoButton label="Success" onClick={() => setSuccess(!success)} />
        <RodeoButton label="Warning" onClick={() => setWarning(!warning)} />
        <RodeoButton label="Info" onClick={() => setInfo(!info)} />
        <RodeoButton label="Error" onClick={() => setError(!error)} />
        <RodeoButton label="Alert" onClick={() => setAlert(!alert)} />
        {success && <RodeoToast
          header="Success!"
          description="Your action was completed"
          type="success"
          timer="5 sec"
          width={450}
          size="small"
        />}
        {warning && <RodeoToast
          header="Warning!"
          description="Your action was completed"
          type="warning"
          timer="5 sec"
          width={450}
        // actionText="Action"
        // onAction={() => alert('hii')}
        />}
        {info && <RodeoToast
          header="Info!"
          description="Your action was completed"
          type="info"
          timer="5 sec"
          width={450}
        />}
        {error && <RodeoToast
          header="Error!"
          description="Your action was completed"
          type="error"
          timer="5 sec"
          width={450}
        />}
        {alert && <RodeoToast
          header="Alert!"
          description="Your action was completed"
          type="alert"
          timer="5 sec"
          width={450}
        />}
      </div>
    </div>
  )
}

export default NewComponent;