import React from 'react'
import { useFeedTypeContext } from "../../context/FeedTypeContext"

const Navbar = () => {

  const { selectedFeedType, setSelectedFeedType } = useFeedTypeContext()

  const handleFeedTypeButtonClick = (feedType: string) => {
    setSelectedFeedType(feedType)
  }

  return (
    <header className="w-full">
      <nav className="nav">
        <h1 className="text-white text-2xl font-bold">Aircall</h1>
        <div className="flex justify-center items-center gap-5">
          <button className={`feed-type-button ${selectedFeedType === 'activity' ? 'feed-type-selected' : ''}`} onClick={() => handleFeedTypeButtonClick('activity')}>
            Activity
          </button>
          <button className={`feed-type-button ${selectedFeedType === 'archived' ? 'feed-type-selected' : ''}`} onClick={() => handleFeedTypeButtonClick('archived')}>
            Archived
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar