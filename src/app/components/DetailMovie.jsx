import { imageUrl } from "@/lib/api";
import Image from "next/image";
import slider from "@/assets/slider.png";
import { AiOutlineStar } from "react-icons/ai";

export default function DetailTemp({ image, title, popularity, overview }) {
  return (
    <>
      <div className="flex container w-full">
        <Image
          src={slider}
          alt="slider"
          className="brightness-50 relative -z-5"
        />
        <div className="flex absolute z-2 left-0 mt-20 ml-20 text-white ">
          <div className="container w-1/2">
            <h1 className="text-4xl font-black ">TITLE</h1>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur vero maiores quisquam optio. Iure quis eos doloremque
              vero a nam dignissimos explicabo quasi aspernatur cumque expedita,
              voluptatem rerum asperiores quo minima nemo itaque vel ea hic?
              Odit sunt alias ipsa nemo molestias odio repellat, illo ipsam,
              sapiente nam hic totam.
            </p>
          </div>
        </div>
      </div>

      <div className="ml-20 mt-5 mr-20">
        <div>
          <ul className="flex display-inline-block gap-10 font-semibold">
            <li>Overview</li>
            <li>Characters</li>
            <li>Review</li>
          </ul>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-extrabold mb-5">Synopsis</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            veritatis non voluptatem dolorem molestiae id odio soluta obcaecati
            neque, exercitationem suscipit minima molestias officiis amet
            aliquid hic quos quae temporibus? Sunt ratione at quis eveniet
            temporibus porro, officia ipsum animi voluptates eaque. Dolorum ut
            delectus, porro iusto officiis laboriosam inventore!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga
            commodi alias, dolores quia neque fugiat eaque sequi debitis, sit,
            modi culpa voluptate vero expedita fugit quidem ea cumque? Unde.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-extrabold mb-5">Movie Info</h1>

          <ul className="font-semibold leading-loose">
            <li>Release Date :</li>
            <li>Director :</li>
            <li>Featured Song:</li>
            <li>Budget :</li>
          </ul>
        </div>
      </div>

      {/* <Image
        className="rounded-t-md"
        src={imageUrl + image}
        alt={title}
        priority
        width="500"
        height="500"
      /> */}
    </>
  );
}
