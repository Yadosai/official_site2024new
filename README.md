# official_site2024new

cloneした後は、以下のコマンドを打って必要なライブラリとかをダウンロードしてください。

docker-compose up -d

docker-compose exec front ash 

npm install 

exit

docker-compose up -d

以下のエラーがでたら
front-1  | [nitro] ✔ Nuxt Nitro server built in 272 ms
front-1  | [nitro] [uncaughtException] Error: listen EADDRINUSE: address already in use /tmp/nitro/worker-39-1.sock
front-1  |     at Server.setupListenHandle [as _listen2] (node:net:1880:21)
front-1  |     at listenInCluster (node:net:1945:12)
front-1  |     at Server.listen (node:net:2054:5)
front-1  |     at <anonymous> (/app/node_modules/nitropack/dist/runtime/entries/nitro-dev.mjs:39:25)
front-1  |     at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
front-1  |     at async ModuleLoader.import (node:internal/modules/esm/loader:323:24)
front-1  |     at async loadESM (node:internal/process/esm_loader:28:7)
front-1  |     at async handleMainPromise (node:internal/modules/run_main:113:12) {
front-1  |   code: 'EADDRINUSE',
front-1  |   errno: -98,
front-1  |   syscall: 'listen',
front-1  |   address: '/tmp/nitro/worker-39-1.sock',
front-1  |   port: -1
front-1  | }


(base) itohisahideki@itohisakonpyuta official_site2024new % docker-compose exec front ash                
/app # rm /tmp/nitro/worker-39-1.sock
exit