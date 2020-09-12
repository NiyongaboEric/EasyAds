import app from './app';

const port = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is listening on port ${port}`));

export default app;
