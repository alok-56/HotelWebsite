"use client"

import { useState, useRef, useEffect } from "react"
import { VideoPlayer } from "@/components/Reelcomponents/video-player"
import { ReelActions } from "@/components/Reelcomponents/reel-actions"
import { ReelInfo } from "@/components/Reelcomponents/reel-info"
import { reels } from "@/components/Reelcomponents/data"

export default function ReelsFeed() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0)
  const [likedReels, setLikedReels] = useState(new Set())
  const [savedReels, setSavedReels] = useState(new Set())
  const [reelsWithErrors, setReelsWithErrors] = useState(new Set())
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollPosition = containerRef.current.scrollTop
      const reelHeight = containerRef.current.clientHeight
      const newIndex = Math.round(scrollPosition / reelHeight)
      if (newIndex !== currentReelIndex) {
        setCurrentReelIndex(newIndex)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [currentReelIndex])

  const toggleLike = (reelId) => {
    setLikedReels((prev) => {
      const newLiked = new Set(prev)
      if (newLiked.has(reelId)) {
        newLiked.delete(reelId)
      } else {
        newLiked.add(reelId)
      }
      return newLiked
    })
  }

  const toggleSave = (reelId) => {
    setSavedReels((prev) => {
      const newSaved = new Set(prev)
      if (newSaved.has(reelId)) {
        newSaved.delete(reelId)
      } else {
        newSaved.add(reelId)
      }
      return newSaved
    })
  }

  const handleReelError = (reelId) => {
    setReelsWithErrors((prev) => new Set(prev).add(reelId))
  }

  return (
    <div ref={containerRef} className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      {reels.map((reel, index) => (
        <div key={reel.id} className="h-screen w-screen snap-start relative bg-black">
          <VideoPlayer
            src={reel.videoUrl}
            isActive={index === currentReelIndex}
            onError={() => handleReelError(reel.id)}
          />

          {reelsWithErrors.has(reel.id) && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <p className="text-white text-center">This reel is currently unavailable.</p>
            </div>
          )}

          <ReelActions
            likes={reel.likes + (likedReels.has(reel.id) ? 1 : 0)}
            comments={reel.comments}
            isLiked={likedReels.has(reel.id)}
            isSaved={savedReels.has(reel.id)}
            onLike={() => toggleLike(reel.id)}
            onSave={() => toggleSave(reel.id)}
          />

          <ReelInfo reel={reel} />
        </div>
      ))}
    </div>
  )
}






