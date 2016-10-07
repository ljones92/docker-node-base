A boilerplate project for running a nodejs daemon inside a Docker container.

Features:
* supervised node daemon
* fetch secrets from Vault
* Prometheus metrics endpoint
* config parsing

Todo:
* log forwarding to elasticsearch
* publish a docker container that can be descended from
* cron scheduling?
* force apps to expose common http interface?

## A word on node_modules

Please check in your node_modules into the code base. There are a few reasons for this:
* We do not want to depend on npm being available at build time.
* We do not want to depend on the modules having not upgraded incorrectly, changed, unpublished or hacked on npm.
* We want to be able to audit changes in third-party code.
* These modules are application code just like anything else, and we already have a great system called "version control" that's used for storing application code.
