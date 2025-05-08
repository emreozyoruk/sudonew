import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'İletişim', href: '/iletisim' },
  { name: 'S.S.S.', href: '/sss' },
  { name: 'Sertifikalarımız', href: '/sertifikalarimiz' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" 
      className={classNames(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent backdrop-blur-sm py-4'
      )}
    >
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Ana menüyü aç</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              {/* Logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-2xl font-bold text-primary">
                    SUDO
                  </Link>
                </div>
                
                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.href === location.pathname
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary',
                        'px-3 py-2 text-sm font-medium transition-all duration-200'
                      )}
                      aria-current={item.href === location.pathname ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Call to action button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/iletisim" className="btn-primary hidden sm:block">
                  Bize Ulaşın
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.href === location.pathname
                      ? 'bg-blue-50 text-primary'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-primary',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.href === location.pathname ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                to="/iletisim"
                className="block w-full text-center mt-4 btn-primary"
              >
                Bize Ulaşın
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}