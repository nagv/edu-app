import app from './app';
import { logger } from './log';
import client from 'prom-client';
const port = 3000;


// expose our metrics at the default URL for Prometheus
app.get('/metrics', (request, response) => {
    response.set('Content-Type', client.register.contentType);
    response.send(client.register.metrics());
});

app.listen(port, () => {
    logger.info(`App Started at port ${port}`);
})