---
banner_alt: dotfiles, .config
banner: https://raw.githubusercontent.com/sameemul-haque/dotfiles/mocha/Pictures/dotfiles.png
title_prefix: Guide
title: Dotfiles
description: How do I manage my dotfiles using the bare git repository?
date: '2023-08-08'
---

My dotfiles are available at my [`github`](https://github.com/sameemul-haque/dotfiles/).

## :thinking: What is a dotfile?

---

Dotfiles, those files starting with a dot in their names, hold the secret to personalizing and refining your system. These configuration files, like `.bashrc` or `.vimrc`, represent the identity of your customized computing environment.

Dotfiles empower users to customize their tools and applications according to their preferences. Whether it's adjusting the appearance of the command prompt, enhancing the capabilities of a text editor, or tuning version control settings, dotfiles provide a platform for modifications.

Sharing dotfiles has become a tradition among tech enthusiasts—an opportunity to exhibit configurations, shortcuts, and optimizations that boost productivity. By copying dotfiles, users can replicate a crafted setup on any machine, ensuring a consistent computing experience throughout.

## :question: How to manage dotfiles?

---

I have been searching for a way to manage my dotfiles through the internet, and I read about the bare git repo technique on the [`Atlassian website`](https://www.atlassian.com/git/tutorials/dotfiles). In this article, they are mentioning the bare git repo technique to manage dotfiles, which I find very convenient. For managing your dotfiles using the bare git repository, you have to go through the following steps:

-   Create a Git bare repository at ~/.dotfiles to track configuration changes.

```bash
git init --bare $HOME/.dotfiles
```

-   Set up an alias named 'config' to replace the standard 'git' command for configuration interactions.

```bash
alias config='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
```

-   Apply a local repository flag to hide untracked files, ensuring a cleaner display when using 'config status' and similar commands.

```bash
config config --local status.showUntrackedFiles no
```

-   Optionally, append the provided alias definition to your .bashrc for easy access to the 'config' command.

```bash
echo "alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'" >> $HOME/.bashrc
```

-   Once you've completed the setup, you can easily version any file within your $HOME folder using standard commands. Simply replace the typical git commands with your custom configuration alias, like so:

```bash
config status
config add .vimrc
config commit -m "Add vimrc"
config add .bashrc
config commit -m "Add bashrc"
```

-   Add a remote named 'origin' to your Git bare repository.

```bash
config remote add origin <remote_repository_url>
```

-   Verify the remote has been added successfully.

```bash
config remote -v
```

-   Push the changes to the remote repository (e.g., GitHub).

```bash
config push -u origin master
```

-   You can also create different branches and check them out as needed when you want to change the theme. Check out the preview video [`here`](https://github.com/sameemul-haque/dotfiles).

```bash
config branch
config checkout mocha
config checkout dark
```

### :sparkles: Mocha config

These configuration files are available [`here`](https://github.com/sameemul-haque/dotfiles/tree/mocha).

![preview1](https://github.com/sameemul-haque/dotfiles/assets/110324374/2212607f-9b29-4e76-bac0-4bdc0ac06bbb)
![preview2](https://github.com/sameemul-haque/dotfiles/assets/110324374/86560ae3-5113-46f2-823b-60e334c67b14)
![preview3](https://github.com/sameemul-haque/dotfiles/assets/110324374/4f7f18aa-4337-4f68-871b-42c3986c0379)
![preview4](https://github.com/sameemul-haque/dotfiles/assets/110324374/6614f84c-2bbe-42eb-83b4-a47d263fc9a3)

### :sparkles: Dark config

These configuration files are available [`here`](https://github.com/sameemul-haque/dotfiles/tree/dark).

![preview1](https://github.com/sameemul-haque/dotfiles/assets/110324374/f0811a2f-9d1f-4694-80ea-a0b87db4ffe7)
![preview2](https://github.com/sameemul-haque/dotfiles/assets/110324374/67fe273f-146b-41df-99b2-c1090f9b6ae3)
![preview3](https://github.com/sameemul-haque/dotfiles/assets/110324374/9b71ef83-fee4-4a27-a29b-ef48ca7ecc43)
![preview4](https://github.com/sameemul-haque/dotfiles/assets/110324374/4897fc68-b60f-4e2b-82ae-547970512830)
