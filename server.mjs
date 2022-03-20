import express from 'express'
const app = express()

const loadAndRunModule = async (moduleName, data) => {
  const plugin = await import('./modules/' + moduleName + '.mjs');
  return plugin.default(data);
}

app.get('/module/:module', async function (req, res) {
  try {
    const moduleName = req.params.module;
    const response = await loadAndRunModule(moduleName)
    res.send(response ? JSON.stringify(response) : 'No Data Returned From Module')
  } catch(error) {
    console.error(error);
    res.status(500).send('Internal Error')
  }
})

app.listen(3000)
