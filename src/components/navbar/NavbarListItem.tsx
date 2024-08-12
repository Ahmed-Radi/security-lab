import { cn } from '@/lib/utils'
import { NavbarListItemProps } from '@/types';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavbarListItem = ({ name, href }: NavbarListItemProps) => {
  const pathname = usePathname().slice(1);

  return (
    <Link href={href} className={cn('p-3 text-black text-lg font-semibold hover:bg-gray-100', {
      "text-blue-400": pathname.toLowerCase().includes(name.toLowerCase())
    })} key={name}>{name}</Link>
  )
}

export default NavbarListItem