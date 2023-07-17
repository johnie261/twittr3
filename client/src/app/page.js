// use client
'use client';

import Feed from "@/Home/Feed";
import Sidebar from "@/components/Sidebar"

const style ={
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}
export default function Home() {
  return (
    <main className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <h2>widgets</h2>
      </div>
    </main>
  )
}
