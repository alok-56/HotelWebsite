import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Music2 } from "lucide-react"

export function ReelInfo({ reel }) {
  return (
    <div className="absolute bottom-4 left-4 right-24 text-white">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-10 w-10 border-2 border-white">
          <AvatarImage src={reel.user.avatar} />
          <AvatarFallback>{reel.user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{reel.user.username}</span>
        {!reel.user.isFollowing && (
          <Button variant="secondary" size="sm" className="ml-2">
            Follow
          </Button>
        )}
      </div>

      <p className="mb-4 line-clamp-2 text-sm">{reel.description}</p>

      <div className="flex items-center gap-2 text-xs">
        <Music2 className="h-3 w-3" />
        <span>
          {reel.audio.artist} · {reel.audio.name}
        </span>
      </div>
    </div>
  )
}

