<div align="center">

# Git DUO - Never Lose Access to Your Repositories Again

<p id="intro">Git DUO is a tool designed to automate the process of mirroring Git repositories across multiple platforms. Born out of a traumatic experience where my GitHub account was temporarily limited during a server disruption, Git DUO ensures that your hard work is never at the mercy of a single service provider. By mirroring your repositories on both GitHub and GitLab, Git DUO protects your years of effort and guarantees continuous access to your public work.</p>

### Supported Platforms

[![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)]()
[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)]()
[![Node JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]()

---

<p>

<span>
  <a href="https://github.com/darsan-in/Git-DUO/commits/main">
    <img src="https://img.shields.io/github/last-commit/darsan-in/Git-DUO?display_timestamp=committer&style=for-the-badge&label=Updated%20On" alt="GitHub last commit"/>
  </a>
</span>

<span>
  <a href="">
    <img src="https://img.shields.io/github/commit-activity/m/darsan-in/Git-DUO?style=for-the-badge&label=Commit%20Activity" alt="GitHub commit activity"/>
  </a>
</span>

</p>

---

<p>

<span>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/darsan-in/Git-DUO?style=for-the-badge&label=License" alt="GitHub License"/>
  </a>
</span>

<span>
  <a href="https://github.com/darsan-in/Git-DUO/releases">
    <img src="https://img.shields.io/github/v/release/darsan-in/Git-DUO?include_prereleases&sort=date&display_name=tag&style=for-the-badge&label=Latest%20Version" alt="GitHub Release"/>
  </a>
</span>

</p>

<p>

<span>
  <a href="https://www.codefactor.io/repository/github/darsan-in/Git-DUO/issues/main">
    <img src="https://img.shields.io/codefactor/grade/github/darsan-in/Git-DUO?style=for-the-badge&label=Code%20Quality%20Grade" alt="CodeFactor Grade"/>
  </a>
</span>

</p>

---

<p>

<span>
  <a href="">
    <img src="https://img.shields.io/npm/d18m/git-duo?style=for-the-badge&label=Downloads%20On%20NPM" alt="NPM Downloads"/>
  </a>
</span>

<span>
  <a href="">
    <img src="https://img.shields.io/github/stars/darsan-in/Git-DUO?style=for-the-badge&label=Stars" alt="GitHub Repo stars"/>
  </a>
</span>

</p>

---

</div>

## Table of Contents 📝

- [Features and Benefits](#features-and-benefits-)
- [Use Cases](#use-cases-)
- [Friendly request to users](#-friendly-request-to-users)

- [Installation - Step-by-Step Guide](#installation---step-by-step-guide-)
- [Usage](#usage)

- [License](#license-%EF%B8%8F)
- [Contributing to Our Project](#contributing-to-our-project-)
- [Website](#website-)

- [Contact Information](#contact-information)
- [Credits](#credits)

## Features and Benefits ✨

- **Automatic Mirroring:** Git DUO automatically pushes commits to both GitHub and GitLab, ensuring your work is always available on multiple platforms.
- **Post-Commit Hook Integration:** Includes a Git template with a post-commit hook that seamlessly pushes updates to both platforms with a single command.
- **Dual Repository Creation:** Create repositories with the same name on GitHub and GitLab simultaneously with a single command.
- **Effortless Setup:** Git DUO automates the addition of a secondary remote link to your repositories, minimizing manual effort.
- **Continuous Access:** By maintaining repositories on both platforms, you safeguard against service disruptions, ensuring uninterrupted access to your projects.
- **Seamless Integration:** Works directly within your existing Git workflow, making it easy to integrate into your development process.

## Use Cases ✅

- **Redundancy for Mission-Critical Projects:** Ensure that your important projects are always available by mirroring them on both GitHub and GitLab.
- **Automated Backup:** Reduce the risk of losing access to your repositories by automatically maintaining copies on two platforms.
- **Efficient Repository Management:** Manage multiple repositories across platforms without the need for manual syncing, saving time and reducing errors.
- **Peace of Mind:** Protect your work from unforeseen disruptions, ensuring that your years of effort are not lost due to temporary service outages.
- **Streamlined Development:** Developers who work on multiple platforms can use Git DUO to keep their repositories in sync effortlessly.
- **Portfolio Resilience:** Ensure that your public portfolio, hosted on GitHub Pages or similar services, remains accessible even during platform-specific issues.

---

### 🙏🏻 Friendly Request to Users

Every star on this repository is a sign of encouragement, a vote of confidence, and a reminder that our work is making a difference. If this project has brought value to you, even in the smallest way, **please consider showing your support by giving it a star.** ⭐

_"Star" button located at the top-right of the page, near the repository name._

Your star isn’t just a digital icon—it’s a beacon that tells us we're on the right path, that our efforts are appreciated, and that this work matters. It fuels our passion and drives us to keep improving, building, and sharing.

If you believe in what we’re doing, **please share this project with others who might find it helpful.** Together, we can create something truly meaningful.

Thank you for being part of this journey. Your support means the world to us. 🌍💖

---

## Installation - Step-by-Step Guide 🪜

### Prerequisites

Before you begin, ensure you have the following:

1. **Node.js**: Git DUO is a Node.js application. Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. **GitHub Personal Access Token**:

   - Generate a personal access token (PAT) from GitHub. This token is required to authenticate with the GitHub API.
   - **Scope of PAT** - Requires `repo` scope.
   - Store this token in an environment variable named `github_token`.
   - [How to create a GitHub PAT](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

3. **GitLab Personal Access Token**:

   - Generate a personal access token from GitLab. This token is required to authenticate with the GitLab API.
   - **Scope of PAT** - Requires `api` scope with `read & write` permission.
   - Store this token in an environment variable named `gitlab_token`.
   - [How to create a GitLab PAT](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).

   **Note**: The environment variables need to be set manually in your operating system, as the application does not support `.env` files.

4. **Install via npm**:

   - To install Git DUO globally using npm, run the following command:
     ```bash
     npm install -g git-duo
     ```
   - This will make the Git DUO CLI commands available system-wide.

5. **Set Up the Git Template**:

   - To set up the Git template for automatic mirroring, use the following command:
     ```bash
     gdt [destination-path]
     ```
   - If no destination path is provided, the template will be added to the default user directory.

   - **How It Works**: Once the template is set up, every time you commit changes to a repository, the changes are automatically pushed to the secondary remote (GitLab) by a `post-commit` hook. The primary repository (GitHub) is pushed by the user.

## Usage

- **Create a New Repository on Both Platforms**:

  - Use the following command to create a new repository on both GitHub and GitLab:
    ```bash
    gd <repository-name> --private
    ```
  - The `--private` flag is optional and will make the repository private if included.

- **Recommended Workflow**:
  - **If using VS Code**: Simply commit and push as you normally would in the VS Code interface. The changes will be pushed to GitHub by your action and to GitLab by the post-commit hook.
  - **If using the CLI**: You can commit and push using the following command:
    ```bash
    git commit -m "message" && git push
    ```
  - By doing so, both the primary (GitHub) and secondary (GitLab) repositories will be updated—GitHub by your push command and GitLab by the commit hook.

## License ©️

This project is licensed under the [MIT](LICENSE).

## Contributing to Our Project 🤝

We’re always open to contributions and fixing issues—your help makes this project better for everyone.

If you encounter any errors or issues, please don’t hesitate to [raise an issue](../../issues/new). This ensures we can address problems quickly and improve the project.

For those who want to contribute, we kindly ask you to review our [Contribution Guidelines](CONTRIBUTING) before getting started. This helps ensure that all contributions align with the project's direction and comply with our existing [license](LICENSE).

We deeply appreciate everyone who contributes or raises issues—your efforts are crucial to building a stronger community. Together, we can create something truly impactful.

Thank you for being part of this journey!

## Website 🌐

<a id="url" href="https://www.npmjs.com/package/git-duo">npmjs - git-duo</a>

## Contact Information

For any questions, please reach out via hello@darsan.in or [LinkedIn](https://www.linkedin.com/in/darsan-in/).

## Credits

Git DUO was developed by [DARSAN](https://darsan.in/), inspired by a personal experience of service disruption and limited access to a GitHub account. The project was created to provide a solution for developers who need reliable access to their repositories across multiple platforms.

---

<p align="center">

<span>
<a href="https://www.linkedin.com/in/darsan-in/"><img width='45px' height='45px' src="https://darsan.in/readme-src/footer-icons/linkedin.png" alt="Darsan at Linkedin"></a>
</span>

<span>
  <img width='20px' height='20px' src="https://darsan.in/readme-src/footer-icons/gap.png" alt="place holder image">
</span>

<span>
<a href="https://www.youtube.com/@darsan-in"><img width='45px' height='45px' src="https://darsan.in/readme-src/footer-icons/youtube.png" alt="Darsan at Youtube"></a>
</span>

<span>
  <img width='20px' height='20px' src="https://darsan.in/readme-src/footer-icons/gap.png" alt="place holder image">
</span>

<span>
<a href="https://www.npmjs.com/~darsan.in"><img width='45px' height='45px' src="https://darsan.in/readme-src/footer-icons/npm.png" alt="Darsan at NPM"></a>
</span>

<span>
  <img width='20px' height='20px' src="https://darsan.in/readme-src/footer-icons/gap.png" alt="place holder image">
</span>

<span>
<a href="https://github.com/darsan-in"><img width='45px' height='45px' src="https://darsan.in/readme-src/footer-icons/github.png" alt="Darsan at Github"></a>
</span>

<span>
  <img width='20px' height='20px' src="https://darsan.in/readme-src/footer-icons/gap.png" alt="place holder image">
</span>

<span>
<a href="https://darsan.in/"><img width='45px' height='45px' src="https://darsan.in/readme-src/footer-icons/website.png" alt="Darsan Website"></a>
</span>

<p>

---

#### Topics

<ul id="keywords">
<li>git automation</li>
<li>repository mirroring</li>
<li>multi-platform git</li>
<li>github alternative</li>
<li>gitlab integration</li>
<li>version control</li>
<li>repo management</li>
<li>commit automation</li>
<li>git push</li>
<li>cloud repositories</li>
<li>redundancy</li>
<li>git tools</li>
<li>developer tools</li>
<li>repo synchronization</li>
<li>git workflow</li>
<li>backup repositories</li>
<li>cross-platform git</li>
<li>git template</li>
<li>post-commit hook</li>
<li>github mirror</li>
</ul>
