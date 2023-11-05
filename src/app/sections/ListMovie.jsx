"use client";
import { useGetMovies } from "@/hooks/useMovies";
import Card from "../components/Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Page from "../movie/[id]/page";

export default function ListMovie() {
  const [genre, setGenre] = useState();
  const params = useSearchParams();
  const data = useGetMovies(genre, params.get("page"));
  return (
    <>
      <div>
        <h3 className="font-extrabold text-xl text-gray-500 mb-5">
          Browse By Category
        </h3>
        <ul
          className="flex display-inline-block text-gray-400 font-semibold mb-7"
          onChange={(e) => setGenre(e.target.value)}
        >
          <li className="mr-5">
            <a href="#">All</a>
          </li>
          <li className="mr-5">
            <a href="#" value="16">
              Anime
            </a>
          </li>
          <li className="mr-5">
            <a href="#" value="28">
              Action
            </a>
          </li>
          <li className="mr-5">
            <a href="#" value="12">
              Adventure
            </a>
          </li>
          <li className="mr-5">
            <a href="#" value="878">
              Science Fiction
            </a>
          </li>
          <li className="mr-5" value="35">
            <a href="#" value="comedy">
              Comedy
            </a>
          </li>
        </ul>
        {/* <select name="" id="" onChange={(e) => setSortBy(e.target.value)}>
          <option value="popularity.desc">Popularity Desc</option>
          <option value="popularity.asc">Popularity Asc</option>
          <option value="revenue.asc">Revenue Asc</option>
          <option value="revenue.desc">Revenue Desc</option>
        </select> */}
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">
        {data?.results?.map((item, index) => (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <Card
              image={item.poster_path}
              overview={item.overview}
              id={item.id}
              popularity={item.popularity}
              title={item.title}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-10">
        <ul className="flex items-center gap-5">
          <li>
            <AiOutlineLeft />
          </li>
          <li>
            <Link href="/?page=1">1</Link>
          </li>
          <li>
            <Link href="/?page=2">2</Link>
          </li>
          <li>
            <Link href="/?page=3">3</Link>
          </li>
          <li>
            <Link href="/?page=4">4</Link>
          </li>
          <li>
            <Link href="/?page=5">5</Link>
          </li>
          <li>
            <AiOutlineRight />
          </li>
        </ul>
      </div>
    </>
  );
}
