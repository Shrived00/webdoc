"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParam } from "@/hooks/use-search-param";
import { SearchIcon, XIcon } from "lucide-react";
import React, { Suspense, useRef, useState } from "react";

export const Search = () => {
  const [search, setSearch] = useSearchParam();

  const [value, setValue] = useState(search);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    setSearch("");
    inputRef.current?.blur();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
    inputRef.current?.blur();
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="relative max-w-[720px] w-full">
        <Input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Search"
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3ppx_1px_rgba(65,69,73,.15)] bg-[#F0F4F8] rounded-full h-[48px] focus-visible:ring-0  focus:bg-white"
        />
        <Button
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5  rounded-full  "
          type="submit"
          variant="ghost"
          size="icon"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5  rounded-full  "
            type="button"
            variant="ghost"
            size="icon"
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
};

export function SearchInput() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
