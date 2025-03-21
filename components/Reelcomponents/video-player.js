"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import ReactPlayer from "react-player"
import { cn } from "@/lib/utils"

export function VideoPlayer({ src, className, isActive = false, onError }) {
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsPlaying(isActive)
  }, [isActive])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const handlePlay = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const handlePause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const handleProgress = useCallback((state) => {
    setProgress(state.played * 100)
  }, [])

  const handleError = useCallback(
    (error) => {
      console.error("Video error:", error)
      if (onError) onError()
    },
    [onError],
  )

  const handleVideoPress = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  return (
    <div className={cn("relative w-full h-full", className)} onClick={handleVideoPress}>
      <ReactPlayer
        ref={playerRef}
        url={src}
        playing={isPlaying}
        loop
        playsinline
        width="100%"
        height="100%"  
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
        onError={handleError}
        config={{
          file: {
            attributes: {
              style: { objectFit: "cover", width: "100%", height: "100%" },
            },
          },
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200/20">
        <div className="h-full bg-white transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

