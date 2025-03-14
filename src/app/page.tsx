import Image from "next/image";
import Link from "next/link";
import React from "react";

//SSG
const HomePage = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-400">
          리그 오브 레전드 정보 앱
        </h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다
        </p>
      </div>
      <div className="mt-[40px] flex flex-row justify-center gap-10">
        <Link href="champions">
          <div className="flex flex-col items-center justify-center gap-10">
            <Image
              src={
                "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg"
              }
              priority={true}
              width={400}
              height={300}
              alt="챔피언 목록 보기"
              className="flex flex-col items-center justify-center"
            />
            <p className="text-amber-400">챔피언 목록 보기</p>
          </div>
        </Link>
        <Link href="/rotation">
          <div className="flex flex-col items-center justify-center gap-10">
            <Image
              src={
                "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_4.jpg"
              }
              priority={true}
              width={400}
              height={300}
              alt="금주 로테이션 확인"
              className="flex flex-col items-center justify-center"
            />
            <p className="text-amber-400">금주 로테이션 확인</p>
          </div>
        </Link>
        <Link href="/items">
          <div className="flex flex-col items-center justify-center gap-10">
            <Image
              src={
                "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
              }
              priority={true}
              width={400}
              height={300}
              alt="아이템 목록 보기"
              className="flex flex-col items-center justify-center"
            />
            <p className="text-amber-400">아이템 목록 보기</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
