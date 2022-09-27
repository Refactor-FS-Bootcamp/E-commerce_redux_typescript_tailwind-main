import React from 'react';
import ProductsPage from './ProductsPage';

function HomePage() {
  React.useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div className="pb-6">
      <ProductsPage />
    </div>
  );
}

export default HomePage;
