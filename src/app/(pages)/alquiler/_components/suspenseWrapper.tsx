import { useEffect } from "react";
import {  useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

type SuspenseWrapperProps = {
  setSort: (sort: string) => void;
  setactualPath: (actualPath: string) => void;
};

const SuspenseWrapper = ({ setSort,setactualPath }: SuspenseWrapperProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();


  const getActualPath = () => {
    const queryString = searchParams.toString();
    const fullPath = queryString ? `${pathname}?${queryString}` : pathname;
    return fullPath.includes('#productos') ? fullPath : `${fullPath}#productos`;
  };

  useEffect(() => {
    const currentSort = searchParams.get("sort") || "todos";
    setSort(currentSort);
    setactualPath(getActualPath());
  }, [searchParams, setSort]);

  return null;
};

export default SuspenseWrapper;
