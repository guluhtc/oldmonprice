'use client';

import { Wine } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'India' },
    { href: '/mumbai', label: 'Mumbai' },
    { href: '/bangalore', label: 'Bangalore' },
    { href: '/up', label: 'UP' },
    { href: '/kolkata', label: 'Kolkata' },
    { href: '/pune', label: 'Pune' },
    { href: '/hyderabad', label: 'Hyderabad' },
  ];

  return (
    <header className="border-b border-amber-200/20 dark:border-amber-900/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-2.5 rounded-lg shadow-lg">
              <Wine className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                Old Monk
              </h1>
              <p className="text-sm text-amber-500/80">Since 1954 | For The Spirit of Life</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1 overflow-x-auto pb-2 max-w-[60vw] scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap",
                  pathname === item.href
                    ? "bg-amber-500/10 text-amber-500 font-medium"
                    : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}