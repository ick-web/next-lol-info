import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-around border p-4">
      <div>
        <Link href="/">홈</Link>
      </div>
      <Link href="/champions">챔피언 목록</Link>
      <Link href="/items">아이템 목록</Link>
      <Link href="/rotation">로테이션 정보</Link>
    </header>
  );
};

export default Navbar;
