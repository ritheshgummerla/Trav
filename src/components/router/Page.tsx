import React from 'react';
import { Route } from 'react-router-dom';

const Page = (props: any) => {
  React.useEffect(() => {
    document.title = props.title;
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, ...rest } = props;
  return <Route {...rest} />;
};

export default Page;
