require('dotenv').config()

const fs = require('fs')

const appYamlContent = `runtime: nodejs16

manual_scaling:
  instances: 1
resources:
  cpu: 1
  memory_gb: 0.5
  disk_size_gb: 10
env_variables:
  VUE_APP_API_URL: '${process.env.VUE_APP_API_URL}'
`

fs.writeFileSync('./app.yaml', appYamlContent)
