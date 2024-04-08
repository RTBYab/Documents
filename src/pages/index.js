import React, {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';

function Home() {
  useEffect(() => {
    window.location.href = '/docs/category/معرفی';
  }, []);

  return <Redirect to="/docs/category/معرفی"/>;
}

export default Home;