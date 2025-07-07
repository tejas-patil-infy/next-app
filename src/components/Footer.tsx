'use client'

import { RodeoFooter } from "react-rodeo-lib";

export default function Footer() {
  const content = "Copyright © 2025. All rights reserved."
  return (
    // <footer className="bg-[#eee] text-[gray] text-center pt-3 w-full h-[40px]">
    //   <div>
    //     <p className="mb-0" style={{ fontSize: "14px" }}>Copyright © 2025. All rights reserved.</p>
    //   </div>
    // </footer>
    <RodeoFooter content={content} />
  );
}
