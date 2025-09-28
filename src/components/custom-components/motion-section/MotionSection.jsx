import { motion } from "framer-motion";

function MotionSection({ className, children, transition = 1.5 }) {

    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "unset" }}
            transition={{ duration: transition }}
        >
            {children}
        </motion.section>
    )
}

export default MotionSection