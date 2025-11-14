"use client";

import {NAV_ITEMS} from "@/lib/constants"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navitems = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        if (path === '/root') return pathname === '/root';
        return pathname.startsWith(path);
    }
  return (
    <ul className="flex flex-col sm:flex-row p-2 sm:gap-10 gap-3 font-medium">
            {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                    <Link href={item.href} className={`hover:text-blue-500 transition-colors ${isActive(item.href) ? 'text-blue-500' : ''}`}>
                        {item.label}
                    </Link>
                </li>
            ))}
    </ul>
  )
}

export default Navitems;