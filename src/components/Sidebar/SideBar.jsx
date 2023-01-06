import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaSplotch } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsCartCheck, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

//메뉴 목록
const routes = [
  {
    path: "/home",
    name: "홈",
    icon: <FaHome />,
  },
  {
    path: "/myfeed",
    name: "내 피드",
    icon: <FaUser />,
  },
  {
    path: "/popular",
    name: "인기피드",
    icon: <FaSplotch />,
  },
  {
    path: "/search",
    name: "검색",
    icon: <BsSearch />,
  },
  {
    path: "/setting",
    name: "설정",
    icon: <AiFillSetting />,
  },
];

//애니메이션 설정
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* 토글바 */}
      <div className="top_section">
        <div className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      {/* 메인컨테이너 */}
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          {/* 사이드바 목록  */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              // 애니메이션
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
