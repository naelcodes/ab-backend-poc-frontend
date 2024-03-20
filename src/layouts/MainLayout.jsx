import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
    return (
        <div className='h-screen w-screen p-0 box-border bg-white flex justify-center items-center'>
            <Outlet />
        </div>
    );
};

export default MainLayout;