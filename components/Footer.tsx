import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Donation Club</h3>
            <p className="text-gray-600">Making a difference together through compassion and community service.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-600">
              <p>123 Charity Street</p>
              <p>Mumbai, Maharashtra</p>
              <p>India - 400001</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-purple-600">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-gray-600">
              <p>Email: info@donationclub.org</p>
              <p>Phone: +91 98765 43210</p>
              <p>WhatsApp: +91 98765 43210</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Donation Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}