import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error has occurred!';
  let message = 'Something went wrong. Please try again later.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 500 && error.data) {
      try {
        const parsed = typeof error.data === 'string' ? JSON.parse(error.data) : error.data;
        message = parsed?.message || message;
      } catch {}
    }

    if (error.status === 404) {
      title = 'Page Not Found';
      message = 'The requested resource or page could not be found.';
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to='/'>Back to HomePage</Link>
    </>
  );
}
