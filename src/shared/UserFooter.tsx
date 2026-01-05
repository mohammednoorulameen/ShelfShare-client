import { Facebook, Instagram, Twitter } from "lucide-react";

const UserFooter = () => {
  return (
    <div>
      <footer className="bg-blue-600 text-white py-12 px-8">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-blue-600">
                📚
              </div>
              <span className="text-lg font-bold">ShelfShare</span>
            </div>
            <p className="text-blue-100 text-sm">
              Your gateway to endless stories and knowledge.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 pt-8 text-center text-blue-100 text-sm">
          ©️ 2025 Bookora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default UserFooter;



// import React from 'react'

// const UserFooter = () => {
//   return (
//     <div>UserFooter</div>
//   )
// }

// export default UserFooter