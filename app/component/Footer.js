import React from "react"

const Footer = (props) => {
  return (
    <div>
        <footer className="w-full py-6 text-center text-yellow-300 z-10">
          <p className="text-sm">
            © {new Date().getFullYear()} GymPulse.io. All rights reserved.
          </p>
        </footer>
    </div>
  )
};

export default Footer;
