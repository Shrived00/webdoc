"use client";

import { usePaginatedQuery, useQuery } from "convex/react";
import Link from "next/link";
import { Navbar } from "./navbar";
import TemplatesGallery from "./templates-gallery";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 },
  );

  return (
    <div className="flex flex-col min-h-screen  ">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-20">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};
export default Home;
