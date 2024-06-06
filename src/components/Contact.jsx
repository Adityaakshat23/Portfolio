import { CONTACT } from "../constants"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h2
         whileInView={{opacity: 1, y:0}}
         initial={{opacity: 0, y:-100}}
         transition={{duration: 1.5}}
         className="my-20 text-center text-4xl">Conact Here</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 1}}
        className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneno}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact