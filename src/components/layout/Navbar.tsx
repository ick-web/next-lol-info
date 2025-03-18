import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-around bg-gray-800 p-4">
      <div>
        <Link href="/" className="text-white">
          홈
        </Link>
      </div>
      <Link
        href="/champions"
        className="flex items-center justify-center text-white"
      >
        챔피언 목록
      </Link>
      <Link
        href="/items"
        className="flex items-center justify-center text-white"
      >
        아이템 목록
      </Link>
      <Link
        href="/rotation"
        className="flex items-center justify-center text-white"
      >
        로테이션 정보
      </Link>
    </header>
  );
};

export default Navbar;
