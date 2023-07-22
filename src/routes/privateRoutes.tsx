import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export default function privateRoutes({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    </div>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
