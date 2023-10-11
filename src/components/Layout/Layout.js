import { Navigation } from 'components/Navitation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { Header } from './Layout.styled';
import { AuthNav } from 'components/AuthNav';

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
// } from '@chakra-ui/react';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   return (
  //     <div>
  //       <Breadcrumb fontSize={40} ml="30px" width="100%" height={40} bg="tomato">
  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="/register">SignUp</BreadcrumbLink>
  //         </BreadcrumbItem>

  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="/login">LogIn</BreadcrumbLink>
  //         </BreadcrumbItem>

  //         <BreadcrumbItem isCurrentPage>
  //           <BreadcrumbLink href="/contacts">Contacts</BreadcrumbLink>
  //         </BreadcrumbItem>
  //       </Breadcrumb>
  //       <Outlet />
  //     </div>
  //     );

  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </div>
  );
};