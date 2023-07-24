'use client'
import Post from '@/components/Post'
import React from 'react'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    diplayName: 'john',
    userName: "erf5ygy654h687jh",
    avater: "",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
  {
    diplayName: 'john',
    userName: "erf5ygy654h687jh",
    avater: "",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
  {
    diplayName: 'john',
    userName: "erf5ygy654h687jh",
    avater: "",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post 
          key={index}
          dispalyName="tush 007"
          userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets