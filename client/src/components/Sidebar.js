// use client
'use client';

import { VscTwitter } from "react-icons/vsc"
import SidebarOption from "./SidebarOption"
import { useState } from "react"
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'
import Link from "next/link";




const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45 rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `h-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

function Sidebar({initialSelectedIcon = 'Home'}) {
  const [selected, setSelected] = useState(initialSelectedIcon)
 
  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption 
          Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(setSelected === 'Home')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption 
          Icon={selected === 'Explore' ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(setSelected === 'Explore')}
          setSelected={setSelected}
        />
        <SidebarOption 
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          text="Notifications"
          isActive={Boolean(setSelected === 'Notifications')}
          setSelected={setSelected}
        />
        <SidebarOption 
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(setSelected === 'Messages')}
          setSelected={setSelected}
        />
        <SidebarOption 
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={Boolean(setSelected === 'Bookmarks')}
          setSelected={setSelected}
        />
        <SidebarOption 
          Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(setSelected === 'Lists')}
          setSelected={setSelected}
        />
        <SidebarOption 
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={selected === 'Profile'}
          setSelected={setSelected}
          redirect={'/profile'}
        />
        <SidebarOption Icon={CgMoreO} text="More" />
        <div className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>Johnie261</div>
            <div className={style.handle}>@0x55de...6xf3</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar