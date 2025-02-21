import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col place-items-center justify-center gap-2">
      <LoaderIcon className="size-6 text-muted-foreground animate-spin" />
      {label && <p className="text-muted-foreground">{label}</p>}
    </div>
  );
};
