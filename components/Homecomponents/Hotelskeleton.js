import { Skeleton } from "@/components/ui/skeleton";

 function HotelCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <Skeleton className="w-full h-48 md:h-52 lg:h-60 rounded-none" />

      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4 rounded-md" />

        <Skeleton className="h-4 w-1/2 rounded-md" />

        <div className="space-y-2">
          <Skeleton className="h-3 w-full rounded-md" />
          <Skeleton className="h-3 w-5/6 rounded-md" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default function HotelSkeletonGrid() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <HotelCardSkeleton key={index} />
        ))}
      </div>
    );
  }