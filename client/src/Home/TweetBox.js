'use client'

import { useState } from "react"

const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img 
          src="https://avatars.githubusercontent.com/u/60358034?v=4"
          alt="profile pic"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          < textarea
            className={style.inputField}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default TweetBox