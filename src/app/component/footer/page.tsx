import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4">
      <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-white uppercase font-medium tracking-wide mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Features</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Integrations</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Pricing</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white uppercase font-medium tracking-wide mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Privacy</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white uppercase font-medium tracking-wide mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Developer API</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Documentation</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-300 no-underline">Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white uppercase font-medium tracking-wide mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-white hover:text-gray-300 no-underline">Facebook</Link>
              <Link href="#" className="text-white hover:text-gray-300 no-underline">Twitter</Link>
              <Link href="#" className="text-white hover:text-gray-300 no-underline">Github</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 mt-8 border-t border-gray-800 text-center">© 2019 WeTeach. All rights reserved.</div>
    </footer>
  )
}

export default Footer