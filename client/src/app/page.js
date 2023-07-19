// use client
'use client';

import Feed from "@/Home/Feed";
import Sidebar from "@/components/Sidebar"
import Widgets from "@/components/Widgets";

const style ={
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  feed: `flex-[2] border-r border-l border-[#38444d]`
}
export default function Home() {
  return (
    <main className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed className={style.feed}/>
        <Widgets />
      </div>
    </main>
  )
}
