import React from "react";
import { MdChevronRight } from "react-icons/md";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  return (
    <div>
      <div className="mainHeader">
        <div className="container pt-5">
          <div className="row py-5">
            <div className="col-lg-6 col-md-12 py-5">
              <h1 className="pt-lg-5">&quot;Crafting Elegant Interiors Where Your Dreams Reside&quot;</h1>
              <p className="py-2">Discover hassle-free delivery, free assembly and <br/> the flexibility to rent, rent-to-own or buy.</p>
              <button className='headerContact mb-5' onClick={()=> router.push('/contact-us')}>Contact Us <MdChevronRight /></button>
            </div>
            <div className="col-lg-6 col-md-12 py-lg-5">
              <div className="headerImg">
                <img src="/images/header.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
