import React from 'react';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="p-8 bg-[#FAFAFA]">{children}</main>;
};

export default ContentWrapper;
