import Link from "next/link";
import { Button } from 'react-bootstrap';

const NewPage = () => {
  return (
    <div className="p-4 m-44">
      <h1>NewPage</h1>
      <Link href={'/'}>
        <Button variant="outline-secondary" size="sm">Back</Button>
        {/* <button className="px-4 py-2 bg-blue-600 text-white rounded">Back</button> */}
      </Link>
    </div>
  )
}

export default NewPage;