import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 right-0 p-2 text-xs text-gray-500">
      v{process.env.npm_package_version || '0.0.1'}
    </footer>
  );
};

export default Footer; 