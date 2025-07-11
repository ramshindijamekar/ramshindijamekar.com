"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleHomeClick = () => {
    const element = document.getElementById("home")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-0"
            >
              <button
                onClick={handleHomeClick}
                className="text-xl font-space-mono font-bold tracking-tighter hover:opacity-80 transition-opacity"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-bold text-2xl flex items-center gap-2"
                >
                  <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-8 h-8 rounded-md flex items-center justify-center">
                    R
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">Ram</span>
                </motion.div>
              </button>
            </motion.div>
          )}

          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-right"
            >
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Ram. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                AI Engineer | Generative AI | Agentic Systems
              </p>
            </motion.div>
          )}
        </div>

        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 pt-6 border-t border-border text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              {/* "The goal of AI is not to replace humans, but to empower them to reach new heights." */}
            </p>
          </motion.div>
        )}
      </div>
    </footer>
  )
}



// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"

// export function Footer() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const handleHomeClick = () => {
//     const element = document.getElementById("home")
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       })
//     }
//   }

//   return (
//     <footer className="bg-card py-8 border-t border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {mounted ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-4 md:mb-0"
//             >
//               <button
//                 onClick={handleHomeClick}
//                 className="text-xl font-space-mono font-bold tracking-tighter hover:opacity-80 transition-opacity"
//               >
//               <div className="font-bold text-2xl flex items-center gap-2">
//                 <div className="bg-gray-100 text-gray-900 w-8 h-8 rounded-md flex items-center justify-center">R</div>
//                 <span className="text-gray-100">Ram</span>
//               </div>
//                 {/* RAM<span className="text-gray-500">.AI</span> */}
//               </button>
//             </motion.div>
//           ) : (
//             <div className="mb-4 md:mb-0">
//               <span className="text-xl font-space-mono font-bold tracking-tighter">
//                 RAM<span className="text-gray-500">.AI</span>
//               </span>
//             </div>
//           )}

//           {mounted ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-center md:text-right"
//             >
//               <p className="text-sm text-muted-foreground">
//                 &copy; {new Date().getFullYear()} Ram. All rights reserved.
//               </p>
//               <p className="text-xs text-muted-foreground mt-1">AI Engineer | Generative AI | Agentic Systems</p>
//             </motion.div>
//           ) : (
//             <div className="text-center md:text-right">
//               <p className="text-sm text-muted-foreground">&copy; 2025 Ram. All rights reserved.</p>
//               <p className="text-xs text-muted-foreground mt-1">AI Engineer | Generative AI | Agentic Systems</p>
//             </div>
//           )}
//         </div>

//         {mounted ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-6 pt-6 border-t border-border text-center"
//           >
//             {/* <p className="text-sm text-muted-foreground italic">
//               "The goal of AI is not to replace humans, but to empower them to reach new heights."
//             </p> */}
//           </motion.div>
//         ) : (
//           <div className="mt-6 pt-6 border-t border-border text-center">
//             <p className="text-sm text-muted-foreground italic">
//               "The goal of AI is not to replace humans, but to empower them to reach new heights."
//             </p>
//           </div>
//         )}
//       </div>
//     </footer>
//   )
// }
