import Image from "next/image";
import google from "@/assets/googleplay1.svg";
import apple from "@/assets/applestore1.svg";
import fb from "@/assets/face1.svg";
import ig from "@/assets/instagram1.svg";
import pt from "@/assets/pinterest1.svg";
import logo from "@/assets/footer-brand.svg";

export default function Footer() {
  return (
    <>
      <section className="grid 2xl:grid-cols-3 justify-around gap-5">
        <ul className="flex display-inline-block gap-28">
          <li>
            <div className="max-w-md mt-5">
              <ul>
                <li>
                  <Image src={logo} alt="logo" width="70" height="70" />
                </li>
                <li>
                  <h6 className="text-white text-sm mt-5 font-thin whitespace-normal tracking-wide">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, tempore vitae. Dicta iusto aspernatur impedit
                    aliquid fugiat. Expedita tempore laudantium in, nisi quae
                    similique nemo cum doloremque! Nesciunt, eius quos.
                  </h6>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="max-w-md leading-loose">
              <ul className="text-white mt-5 tracking-wider">
                <li>Tentang Kami</li>
                <li>Blog</li>
                <li>Layanan</li>
                <li>Karir</li>
                <li>Pusat Media</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="max-w-md">
              <h4 className="text-white mt-5 ">Download</h4>
              <ul className="flex display-inline-block">
                <li>
                  <Image src={google} alt="logo" width="150" height="150" />
                </li>
                <li>
                  <Image src={apple} alt="logo" width="150" height="150" />
                </li>
              </ul>
              <h4 className="text-white mt-5">Social Media</h4>
              <ul className="flex display-inline-block gap-3">
                <li>
                  <Image src={fb} alt="logo" width="50" height="50" />
                </li>
                <li>
                  <Image src={pt} alt="logo" width="50" height="50" />
                </li>
                <li>
                  <Image src={ig} alt="logo" width="50" height="50" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr />
        <div>
          <p className="text-white text-center">
            Copyright &copy; . All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
}
