const autocannon = require('autocannon');

(async () => {
  const instance = autocannon({
    url: 'http://localhost:3333/cpu',
    connections: 50,
    pipelining: 1,
    duration: 60,
  });

  autocannon.track(instance, {
    renderProgressBar: true,
    renderResultsTable: true,
    renderLatencyTable: true,
  });

  await instance;

  console.log(result.requests);
})();
