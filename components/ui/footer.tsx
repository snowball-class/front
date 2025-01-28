"use client";

import { Button } from "./button";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-gray-400">
      <div className="mx-auto w-1/2 bg-purple-400 flex justify-between pt-12">
        <div className="w-40">
          <div className="text-lg font-semibold text-mainBlue">3333-3333</div>
          <div className="">평일 10:00 - 18:00</div>
          <div className="">
            &#40;점심시간 13:00 - 14:00 제외 주말/공휴일 제외&#41;
          </div>
          <Button variant="outline">버튼</Button>
        </div>
        <div className="w-40">bbb</div>
      </div>
    </div>
  );
};

export default Footer;
