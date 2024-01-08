import React from 'react';
import ContentWrapper from './_components/content-wrapper';
import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-56">
          <Navbar />
          <ContentWrapper>{children}</ContentWrapper>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
