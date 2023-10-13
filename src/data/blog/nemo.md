---
banner_alt: A photo of nemo file explorer
banner: https://github.com/sameemul-haque/sameemul-haque/assets/110324374/ab309d20-977f-42ea-8bdc-0ce718038596
title_prefix: About
title: Nemo, my favourite file manager
description: Features and tips about the Nemo file manager.
date: '2023-06-22'
---

[Nemo - File Manager](https://github.com/linuxmint/nemo)

## :file_folder: Things to do after fresh installation

---

-   set nemo as the default file browser

```
xdg-mime default nemo.desktop inode/directory application/x-gnome-saved-search
```

-   set your terminal as the default terminal for Nemo. To do that, you can use the following command: gsettings set org.cinnamon.desktop.default-applications.terminal exec terminal-name. I use Alacrity as my terminal, so

```
gsettings set org.cinnamon.desktop.default-applications.terminal exec alacritty
```

-   Install the Nemo file roller—the file archiver extension for Nemo. Installing this helps extract and compress files.

```
pacman -S nemo-fileroller
```

## :sparkles: Customisation

---

-   To change the theme of Nemo, first install the theme and set it using this command: gsettings set org.gnome.desktop.interface gtk-theme new-theme. I use the catppuccin-mocha theme; it has a nice dark interface.

```
yay -S catppuccin-gtk-theme-mocha
```

```
gsettings set org.gnome.desktop.interface gtk-theme Catppuccin-Mocha-Standard-Blue-Dark
```

-   Install lxappearance, then change theme using that to change gtk theme for widgets as well.
-   You can disable the menubar from the top file options -> View -> Menubar (you have to press Alt to show it after disabling it).
-   You can customize your toolbar from preferences options, Edit -> Preferences -> Toolbar.
-   [Reference](https://wiki.archlinux.org/title/Nemo).

## :keyboard: Keyboard Shortcuts

---

### Panes

-   `F3`: Toggle Extra Pane (split view that shows two folder side by side).
-   `F4`: Toggle Terminal in top pane (require the Nemo Terminal plugin).
-   `F6`: Cycle focus between panes.
-   `F9`: Toggle left pane (browsing folders only).
-   `F8` + `Arrow keys`: Resize panes.

### Tabs

-   `Ctrl` + `T`: New tab in current pane.
-   `Ctrl` + `Pg Up` or `Ctrl` + `Shift` + `Tab`: Previous tab.
-   `Ctrl` + `Pg Down` or `Ctrl` + `Tab`: Next tab.
-   `Ctrl` + `Shift` + `Pg Up` / `Pg Down`: Move tab left / right.
-   `Ctrl` + `W`: Close current tab.

### Folders

-   `Alt` + `←`: Previous browsed directory.
-   `Alt` + `→`: Next browsed dir.
-   `Alt` + `↑`: Parent dir.
