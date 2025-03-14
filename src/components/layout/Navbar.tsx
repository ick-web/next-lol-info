import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-around p-4 bg-gray-800">
      <div>
        <Link href="/" className="text-white">
          홈
        </Link>
      </div>
      <Link href="/champions" className="text-white">
        챔피언 목록
      </Link>
      <Link href="/items" className="text-white">
        아이템 목록
      </Link>
      <Link href="/rotation" className="text-white">
        로테이션 정보
      </Link>
    </header>
  );
};

export default Navbar;
