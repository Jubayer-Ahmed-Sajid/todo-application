import {ChartBarIcon, CogIcon, RectangleStackIcon, UserIcon} from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/react.svg'
const Sidebar = () => {
   
        return (
            <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
              <div className="flex flex-col items-center gap-5 h-full py-5">
                <img src={logo} alt="logo" />
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer'
                      : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
                  }
                >

                  <RectangleStackIcon className="h-7 w-7 group-hover:text-white" />
                </NavLink>
                <NavLink
                  to="/chat"
                  className={({ isActive }) =>
                    isActive
                      ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer'
                      : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
                  }
                >
                  <ChartBarIcon className="h-7 w-7 group-hover:text-white " />
                </NavLink>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    isActive
                      ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer'
                      : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
                  }
                >
                  <CogIcon className="h-7 w-7 group-hover:text-white " />
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer mt-auto'
                      : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all  mt-auto'
                  }
                >
                  <UserIcon className="h-7 w-7 group-hover:text-white " />
                </NavLink>
              </div>
            </div>
    );
};

export default Sidebar;