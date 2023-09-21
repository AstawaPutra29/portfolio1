"use client";

import React from "react";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import Button from "./Button";

export default function ContentContact() {
  return (
    <div className="w-3/4 flex flex-col gap-y-3">
      <div className="shadow py-8 px-14 rounded-lg border bg-white">
        <h2 className="text-center text-5xl font-bold">CONTACT US</h2>
        <form action="">
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="text-xl">
              Username
            </label>
            <input type="text" className="border py-2 px-4" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl">
              Comment
            </label>
            <textarea rows={10} className="border py-2 px-4" />
          </div>
          <button className="border border-black mt-3 px-6 py-2">Send</button>
        </form>
      </div>

      <div className="shadow py-8 px-14 rounded-lg border bg-white">
        <h2 className="text-center text-5xl">Social Media</h2>
        <div>
          <ul className="flex gap-4 justify-center py-5">
            <li>
              <Button
                className="bg-blue-600"
                typeof="button"
                icon={<IconBrandFacebook />}
              >
                <p>Facebook</p>
              </Button>
            </li>
            <li>
              <Button
                className="bg-pink-600"
                typeof="button"
                icon={<IconBrandInstagram />}
              >
                <p>Instagram</p>
              </Button>
            </li>

            <li>
              <Button
                className="bg-blue-400"
                typeof="button"
                icon={<IconBrandTwitter />}
              >
                <p>twitter</p>
              </Button>
            </li>

            <li>
              <Button
                className="bg-black text-pink-500"
                typeof="button"
                icon={<IconBrandTiktok />}
              >
                <p>tiktok</p>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
