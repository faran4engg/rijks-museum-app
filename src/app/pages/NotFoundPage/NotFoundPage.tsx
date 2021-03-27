import { Helmet } from 'react-helmet-async';
import NotFound from 'app/domains/Common/components/not-found/NotFound';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Oops ! Error</title>
      <meta name="description" content="Not Found Page" />
    </Helmet>
    <NotFound msg="We're sorry 😢, Please try again" />
  </>
);

export default NotFoundPage;
