import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>      
      <div className="p-4 m-44">
        <h1>HomePage</h1>
        <Link href={'/newpage'}>
          <button className="btn btn-primary btn-sm">NewPage</button>
        </Link>
      </div>
    </>
  );
}