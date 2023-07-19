  'use client'

import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "@/components/Post";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

  function Feed() {

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
    return (
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.headerTitle}>Home</div>
          <BsStars />
        </div>
        <TweetBox />
        {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={tweet.userName}
          text={tweet.text}
          avatar={tweet.avater}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
      </div>
    )
  }

  export default Feed;