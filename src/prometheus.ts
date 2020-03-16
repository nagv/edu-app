import client from 'prom-client';

// enable prom-client to expose default application metrics
const collectDefaultMetrics = client.collectDefaultMetrics;

// define a custom prefix string for application metrics
collectDefaultMetrics({ prefix: 'edu:' });

// a custom histogram metric which represents the latency
// of each call to our API /api/greeting.
export const histogram = new client.Histogram({
    name: 'edu:hello_duration',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'status_code'],
    buckets: [0.1, 5, 15, 50, 100, 500]
});

//export client;

