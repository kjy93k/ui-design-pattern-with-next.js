export const ErrorMessage = ({ error }: { error: Error }) => {
  console.error(error.message);
  return <div>Something went wrong...{`message : [${error.message}] ${JSON.stringify(error)}`}</div>;
};
