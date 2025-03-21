"use client"

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ReelActions({ likes, comments, isLiked, isSaved, onLike, onSave }) {
  return (
    <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
      <Button variant="ghost" size="icon" className="group" onClick={onLike}>
        <Heart
          className={cn(
            "h-7 w-7 transition-all",
            isLiked ? "fill-red-500 text-red-500" : "text-white group-hover:text-red-500",
          )}
        />
        {/* <span className="text-sm font-medium mt-1 text-white">{likes}</span> */}
      </Button>

      {/* <Button variant="ghost" size="icon" className="group">
        <MessageCircle className="h-7 w-7 text-white group-hover:text-blue-500" />
        <span className="text-sm font-medium mt-1 text-white">{comments}</span>
      </Button> */}

      <Button variant="ghost" size="icon" className="group">
        <Send className="h-7 w-7 text-white group-hover:text-green-500" />
      </Button>

      <Button variant="ghost" size="icon" className="group" onClick={onSave}>
        <Bookmark
          className={cn(
            "h-7 w-7 transition-all",
            isSaved ? "fill-yellow-500 text-yellow-500" : "text-white group-hover:text-yellow-500",
          )}
        />
      </Button>

      <Button variant="ghost" size="icon" className="group">
        <MoreHorizontal className="h-7 w-7 text-white" />
      </Button>
    </div>
  )
}

