'use client'

import Link from "next/link";

const Page = ({children}) => {
  

  return (
    <div className="flex">
     {children}
    </div>
  );
};

export default Page;
