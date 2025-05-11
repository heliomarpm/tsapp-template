<div id="top" align="center" style="text-align:center;">
  <h1>
    <br> 📦 TypeScript Application Template
  </h1>
</div>

## 📚 Summary

**Professional Template** with automated CI/CD, TypeDoc-generated documentation, and production-ready semantic versioning.

## 🧩 What's Included

<!-- 🔳☑️ -->

**Core Infrastructure**
- ☑️ Node.js + TypeScript
- ☑️ Vitest (Unit Testing)
- ☑️ Semantic Release
- ☑️ GitHub Actions CI/CD 
- ☑️ GitHub Actions GitHub Pages

**Quality Assurance**
- ☑️ BiomeJS (Linting/Formatting)
- ☑️ Husky + Lint Staged
- ☑️ Commitlint + Conventional Commits
- ☑️ CodeQL Scanning

**Project Scaffolding**
- ☑️ Docs: Contribution Guide & Code of Conduct
- ☑️ Husky Git Hooks
- ☑️ Automated CHANGELOG.md
- ☑️ TypeDoc + Vitepress for Documentation Site

---

## 🤖 Automation Features

Workflow  | Description | Trigger 
 ---  | --- | ---
0.test.yml	| Runs unit tests	| Push/PR to main
1.create_pr.yml	| Creates pull requests	| Push/PR to develop
2.release.yml	| Generates releases	| Successful tests
3.deploy-docs.yml	| Deploys docs	| Successful release

### ❓ When to Use This Template

Perfect for developers who need:

1. **Zero-config** TypeScript library setup
2. **Automated docs** with TypeDoc
3. **CI/CD pipeline** with GitHub Actions
4. **Semantic versioning** right out of the box

### 💡 Ideal for:

- Building npm packages
- Open source projects
- Enterprise-grade libraries

---
## 🚀 Quick Start

```bash
npx degit heliomarpm/tsapp-template your-app
cd your-app
npm install
```
## ⚙️ Configuration Guide

### Documentation Page

see [TypeDoc Vitepress](https://www.typedoc-plugin-markdown.org/plugins/vitepress/quick-start)

- Update title in `.docs/index.md`


```bash
# first step

```

### Dry Run Releasing

Test releasing without version bump:

```bash
npm run release:test
# or 
npx semantic-release --dry-run
```

### Requirements

| Requirement | Description |
| - | - |
Branch protection |	Require PR reviews before merge

---
## 📦 Dependencies

✅ Zero runtime dependencies \
🔄 All devDependencies are pinned to latest stable versions


## 🤝 Contributing

We welcome contributions! Please read:

- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Contributing Guide](docs/CONTRIBUTING.md)

Thank you to everyone who has already contributed to the project!

<a href="https://github.com/heliomarpm/tsapp-template/graphs/contributors" target="_blank">
  <img src="https://contrib.rocks/image?repo=heliomarpm/tsapp-template" />
</a>

###### Made with [contrib.rocks](https://contrib.rocks).

### ❤️ Support this project

If this project helped you in any way, there are several ways to contribute. \
Help us maintain and improve this template:

⭐ Starring the repository \
🐞 Reporting bugs \
💡 Suggest features \
🧾 Improving the documentation \
📢 Share with others

💰 Supporting via GitHub Sponsors, Ko-fi, Paypal, LiberaPay 

<div class="badges">

  [![PayPal][url-paypal-badge]][url-paypal]
  [![Ko-fi][url-kofi-badge]][url-kofi]
  [![Liberapay][url-liberapay-badge]][url-liberapay]
  [![GitHub Sponsors][url-github-sponsors-badge]][url-github-sponsors]

</div>

## 📝 License

[MIT © Heliomar P. Marques](LICENSE)  <a href="#top">🔝</a>

----
<!-- Sponsor badges -->
[url-paypal-badge]: https://img.shields.io/badge/donate%20on-paypal-1C1E26?style=for-the-badge&labelColor=1C1E26&color=0475fe
[url-paypal]: https://bit.ly/paypal-sponsor-heliomarpm

[url-kofi-badge]: https://img.shields.io/badge/kofi-1C1E26?style=for-the-badge&labelColor=1C1E26&color=ff5f5f
[url-kofi]: https://ko-fi.com/heliomarpm

[url-liberapay-badge]: https://img.shields.io/badge/liberapay-1C1E26?style=for-the-badge&labelColor=1C1E26&color=f6c915
[url-liberapay]: https://liberapay.com/heliomarpm

[url-github-sponsors-badge]: https://img.shields.io/badge/GitHub%20-Sponsor-1C1E26?style=for-the-badge&labelColor=1C1E26&color=db61a2
[url-github-sponsors]: https://github.com/sponsors/heliomarpm
