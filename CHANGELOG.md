# [1.2.0](https://github.com/heliomarpm/tsapp-template/compare/v1.1.0...v1.2.0) (2025-05-18)


### Bug Fixes

* :recycle: ajustar configuração de branches no .releaserc ([72ccfb1](https://github.com/heliomarpm/tsapp-template/commit/72ccfb19515d53ee8bdcb7d66dbf339d1797cb2b))
* :recycle: ajustar configuração do workflow de release ([7d555c0](https://github.com/heliomarpm/tsapp-template/commit/7d555c0a75c62dc6ea401c9c0d5135b5c2dfb18c))


### Features

* **ci:** :sparkles: adicionar workflow para criação/atualização automática de PR ([685fb1d](https://github.com/heliomarpm/tsapp-template/commit/685fb1d35b66bb2b471be437ecb0c22fd600d345))
* **docs:** :sparkles: adicionar logo à documentação ([b5a132a](https://github.com/heliomarpm/tsapp-template/commit/b5a132a3238477e5b4c7f9f1606bf56f10a356d0))
* **docs:** :sparkles: habilitar URLs limpas na configuração do VitePress ([4cdf24f](https://github.com/heliomarpm/tsapp-template/commit/4cdf24ff7509996e39e947008fd0c04309f6d68e))
* update test ([34dcea5](https://github.com/heliomarpm/tsapp-template/commit/34dcea53e942e7190451cc136c207212caf2748b))

# [1.1.0](https://github.com/heliomarpm/tsapp-template/compare/v1.0.0...v1.1.0) (2025-05-18)


### Bug Fixes

* :sparkles: atualizar configuração do plugin @semantic-release/github ([1a7cfd7](https://github.com/heliomarpm/tsapp-template/commit/1a7cfd7d58ddd1ab3a1c3f8b339fee5c305867ac))
* :sparkles: atualizar configuração do workflow de release ([8e9e783](https://github.com/heliomarpm/tsapp-template/commit/8e9e7833b4419e6f9912567b6727515628391cba))
* 📝 Atualiza a versão do template da aplicação Typescript para 1.1.1 ([9ff493a](https://github.com/heliomarpm/tsapp-template/commit/9ff493a6c0621ca9914f353211a2ab2806632fa3))
* change git plugin configuration to disable push on release ([1424afc](https://github.com/heliomarpm/tsapp-template/commit/1424afcd8a3b7e9de576ad47d75c9b5ed949cd90))
* remove "Release" workflow from documentation deployment trigger ([d556042](https://github.com/heliomarpm/tsapp-template/commit/d5560424779f67d09529352090717e90a5f20be5))
* remove unnecessary debug step and add file listing for documentation deployment ([68cff13](https://github.com/heliomarpm/tsapp-template/commit/68cff1344e28047f5a5b7f003de6c1ecb677094e))
* revert checkout reference to use the main branch and remove develop branch from configuration ([a8ac53a](https://github.com/heliomarpm/tsapp-template/commit/a8ac53a95e8cda71692cb1dec701766cefe7ad38))
* revert coverage badge generation method to use HTML report instead of JSON summary ([2a9db38](https://github.com/heliomarpm/tsapp-template/commit/2a9db383f0565338af291042957f3f0ab886fdd7))
* update application template version in header comment ([a4f04d7](https://github.com/heliomarpm/tsapp-template/commit/a4f04d7a12e7144504113f502a6da5f52a0d4c3c))
* update coverage badge path in deployment workflow ([81b71dc](https://github.com/heliomarpm/tsapp-template/commit/81b71dc602ff4853588cb74611b1a2954c2b5272))
* update GitHub Actions to use PAT_TOKEN for semantic release and adjust release configuration ([f20a83b](https://github.com/heliomarpm/tsapp-template/commit/f20a83bc5e8adff76c66c12ee2a5577b20c7411c))
* update template version in helloWorld module documentation ([c36f73c](https://github.com/heliomarpm/tsapp-template/commit/c36f73c76e2f3da8c2370e705d95a9024453e78a))
* update workflow triggers for release and documentation deployment ([3ab6740](https://github.com/heliomarpm/tsapp-template/commit/3ab674031628234bc5aae2f760ef0c86b10a7bb8))


### Features

* :bulb: atualizar versão do template para aplicações Typescript v2.1 ([9d51ebe](https://github.com/heliomarpm/tsapp-template/commit/9d51ebee7fd507af43bbfa6803f8944e1dcc14b8))
* teste para nova release ([42a5647](https://github.com/heliomarpm/tsapp-template/commit/42a56470def7151816d762f499d7da99ca5008a3))
* teste release ([370c4f4](https://github.com/heliomarpm/tsapp-template/commit/370c4f4bfb2f9dfe441b4ab913d3af5fe69fa287))

# 1.0.0 (2025-05-12)


### Bug Fixes

* add condition to deploy job for successful workflow run ([e8bc86f](https://github.com/heliomarpm/tsapp-template/commit/e8bc86f4cc6bd2e356504f10828ba5f68bb971ba))
* comment out paths section in release workflow for clarity ([7fcfa47](https://github.com/heliomarpm/tsapp-template/commit/7fcfa47f47495b85a07fec0b1206acc16786d9d7))
* comment out ref in checkout step for clarity ([00fbfef](https://github.com/heliomarpm/tsapp-template/commit/00fbfef979ca11f87dde480002fddb282575efbc))
* comment out workflow_run section and conditional for clarity ([ddcc8ab](https://github.com/heliomarpm/tsapp-template/commit/ddcc8ab0415f8356bbae2590bf6169ff2896b0e1))
* correct return value of helloWorld function and update corresponding test expectation ([5643554](https://github.com/heliomarpm/tsapp-template/commit/5643554f637fbedc8237ce1995cfd9575dac715e))
* correct return value of helloWorld function and update corresponding test expectation ([6fe9052](https://github.com/heliomarpm/tsapp-template/commit/6fe905275b0f5ad55c8d9ea63242242e0c388d35))
* enable debug logging for commits and current branch in release workflow ([d33ddfd](https://github.com/heliomarpm/tsapp-template/commit/d33ddfdbd9636c06434c1847e0822faf51261590))
* streamline label assignment in PR creation and correct command syntax in test workflow ([d9ac4b6](https://github.com/heliomarpm/tsapp-template/commit/d9ac4b682dc2e7f829071f6ab0711ed8597165cc))
* update branch configuration to include develop branch for prerelease ([c009509](https://github.com/heliomarpm/tsapp-template/commit/c009509885a958252bafd5db1310578bf4ad629b))
* update checkout reference to use the commit from the workflow run ([6dd2b9e](https://github.com/heliomarpm/tsapp-template/commit/6dd2b9e595cddeb4b848072d3e612de6b3bc2f90))
* update destination directory for documentation deployment ([2da752b](https://github.com/heliomarpm/tsapp-template/commit/2da752b3e14c09aba665f637ca4ba8415fe0321f))
* update example in helloWorld documentation for clarity ([501dda4](https://github.com/heliomarpm/tsapp-template/commit/501dda4e6fdc5f845993c58883396656e1478f1f))
* update helloWorld function return value and corresponding test expectation ([d2e1cd4](https://github.com/heliomarpm/tsapp-template/commit/d2e1cd435a9dbac4c68eb56ad438ddab911762e8))
* update paths and paths-ignore in release and CodeQL workflows for better control ([d413fa6](https://github.com/heliomarpm/tsapp-template/commit/d413fa60e104f2fb771c7f89ea123771a49a498d))
* update release workflow triggers and comment out deploy documentation triggers ([160c410](https://github.com/heliomarpm/tsapp-template/commit/160c4103c58d9dbaf5ea0e1f25e9cf7ad0b6a28c))


### Features

* add automated pull request template for promoting changes from develop to main ([1919a9d](https://github.com/heliomarpm/tsapp-template/commit/1919a9dbaf3ec6aacaeaa571f157c1f6331405ed))
* add GitHub Actions workflows for auto PR creation, testing, and documentation deployment ([de6b65e](https://github.com/heliomarpm/tsapp-template/commit/de6b65edce9d5483dfb150b447d4d011c0f21641))
* add GitHub Actions workflows for testing and PR creation ([d32de85](https://github.com/heliomarpm/tsapp-template/commit/d32de8578226bea645fb50f08f2f92c04f5a5b07))
* add GitHub Actions workflows for testing, releasing, documentation deployment, CodeQL analysis, and auto PR creation ([12f271c](https://github.com/heliomarpm/tsapp-template/commit/12f271c3b692596b48e38ffe1cb30559545ec8fd))
* add issue templates for bug reports, feature requests, documentation, and support questions ([1c73a0e](https://github.com/heliomarpm/tsapp-template/commit/1c73a0e88a0091bfb7a8d4a57f81f65ebe2b9c12))
* add pull request template to standardize contributions ([5ce9a6b](https://github.com/heliomarpm/tsapp-template/commit/5ce9a6bc17420bbb614b7a51db1eef70d2ab3d21))
* initialize ([3b782a2](https://github.com/heliomarpm/tsapp-template/commit/3b782a2ab6efa63d527fb772ef16a8ef7a9f3051))
* restrict coverage badge generation and artifact upload to main branch ([6e22e76](https://github.com/heliomarpm/tsapp-template/commit/6e22e763e9aa15cf6c47769048465516ee8181ca))
* update helloWorld function return value and corresponding test expectation ([9103dd5](https://github.com/heliomarpm/tsapp-template/commit/9103dd5a40ddfa958153c23cf9f835fe635340a5))
* update module documentation for clarity and consistency ([39a8d8c](https://github.com/heliomarpm/tsapp-template/commit/39a8d8cbc6697fa958c10b6414dec61d389b1f9a))
