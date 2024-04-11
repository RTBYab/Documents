import { Redirect } from '@docusaurus/router';
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.location.href = '/docs/category/معرفی';
  }, []);

  return <Redirect to="/docs/category/معرفی" />;
}

export default Home;
