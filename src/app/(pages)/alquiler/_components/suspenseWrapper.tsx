import { useEffect } from "react";
import {  useSearchParams } from "next/navigation";

type SuspenseWrapperProps = {
  setSort: (sort: string) => void;
};

const SuspenseWrapper = ({ setSort }: SuspenseWrapperProps) => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const currentSort = searchParams.get("sort") || "todos";
    setSort(currentSort);
  }, [searchParams, setSort]);

  return null;
};

export default SuspenseWrapper;
