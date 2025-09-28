import React from "react";
import {motion} from "framer-motion";
import SidebarMenu from "./SidebarMenu";

function Sidebar({ sidebar, hideSidebar = () => {} }) {

    return (
        <>
            <div className={"sidebar"}>
                <motion.div className={"sidebar-content"}
                            initial={{x: '100%'}}
                            animate={{x: sidebar ? '0%' : '100%'}}
                            transition={{duration: 0.4, ease: 'easeInOut'}}>

                    <div className={"menu"}>
                        <SidebarMenu hideSidebar={hideSidebar}/>
                    </div>

                </motion.div>
            </div>
        </>
    );
}

export default Sidebar;
