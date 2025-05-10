//"use client";
//import { ChevronRightIcon } from "@heroicons/react/24/outline";
//import { Breadcrumbs, Link, Typography } from "@mui/joy";
//import { usePathname } from "next/navigation";
//import NavLink from "next/link";
//
//function BreadCrumbHeader() {
//  const currentPath = usePathname().split("/").slice(1);
//  return (
//    <Breadcrumbs separator={<ChevronRightIcon height={12} />}>
//      {currentPath.map((route, index, array) =>
//        index !== array.length - 1 ? (
//          <NavLink href={`/${route}/Index`} legacyBehavior>
//            <Link>{route}</Link>
//          </NavLink>
//        ) : (
//          <Typography>{route.replace(/_/g, ' ')}</Typography>
//        )
//      )}
//    </Breadcrumbs>
//  );
//}
//
//export default BreadCrumbHeader;
