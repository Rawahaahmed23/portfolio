'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div>
      <nav className='w-full flex justify-center h-4xl bg-black'>
        <div className='bg-none lg:w-[90%] w-full absolute bg-[#1B1B1B] text-[#9C9C9C]'>
          {/* Desktop Menu */}
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='hidden lg:flex flex-row justify-evenly items-center p-5 h-[70px]'
          >
            {['Home', 'Projects', 'Case study', 'erreu', 'erreu'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='hover:text-white cursor-pointer'
              >
                {item}
              </motion.li>
            ))}
            <div className='flex flex-row gap-6'>
              <div>icons</div>
              <div>ucibs</div>
              <div>icons</div>
            </div>
          </motion.ul>

          {/* Mobile Menu Toggle */}
          <div className='lg:hidden flex justify-between items-center px-4 h-[70px]'>
            <span>Logo</span>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className='text-[#9C9C9C] hover:text-white'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className='lg:hidden flex flex-col items-center space-y-4 pb-4'
              >
                {['Home', 'Projects', 'Case study', 'erreu', 'erreu'].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={menuItemVariants}
                    className='hover:text-white cursor-pointer'
                  >
                    {item}
                  </motion.li>
                ))}
                <motion.div 
                  variants={menuItemVariants}
                  className='flex flex-row gap-6 pt-4'
                >
                  <div>icons</div>
                  <div>ucibs</div>
                  <div>icons</div>
                </motion.div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;