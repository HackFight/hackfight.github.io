---
title: "Caelestia Guide for Linux Beginners"
date: 2026-04-16T00:00:00+00:00 # Or your local timezone
draft: true
tags: ["caelestia", "linux"]
categories: ["tutorials"]
description: "How to go from a blank-slate to a fully functionning Caelestia."
---

So Caelestia looks cool and you want it. Great! Whether you never touched Linux or want to switch from a simpler distro, this tutorial might help you.

As of lately, a lot of new people come to the official Caelestia [Discord server] wanting to *install* Caelestia even though it is still very much in developement and going through many iterations. And we are not only talking about experienced Linux users of course, there are also many people like you and me who want to directly try to setup Caelestia with little to no Linux experience.

The goal of this tutorial is to take you from almost any personal computer, to a usable computer with Caelestia for everyday life, with more or less quality of life features. I will start by explaining a few concepts around Caelestia so that you understand exactly *what* you are getting yourself into and will then explain things along the way.

**THIS IS NOT THE ULTIMATE TUTORIAL!** This tutorial is based on my experience and preferences.It is not official and it will bring you through installing Caelestia but also some additional utilities and QoL that are not linked in any way to Caelestia and it's devs. I'll do my best to make it clear when something is optional or not as well as redirecting to the official docs.

> ## A Note on Safety
>
> One very important warning that you'll see in many places and that I'll repeat here: If you don't know what a command does, as a general rule don't run it! Users are encouraged to check out what a command they aren't familiar with does before actually running it. [explainshell] is a great resource for this.

## Basic knowledge requirements

### What is Caelestia?

Caelestia is a combination of a custom shell and it's dotfiles using Arch... in simpler terms: It is all the code and configurations that bring your computer from a Linux terminal to the cool computer interface you have seen in the demos. But it is *only* that, meaning that it does not include a login screen nor a way to use a usb drive or anything to correctly use your graphics cards. This is part of the Linux philosophy, which Arch Linux follows closely. You can have anything you want as long as you know how to set it up. :)

### What is Arch?

I recommend you to go inform yourself on what is Arch with one of the multiple online resources, but what you need to understand is that it is a very free and hands-on experience. You can do anything you want as long as you know how to do it, and the knowing is quite hard. Your best friend for this will be the [ArchWiki], if you have any doubts on how something works, your first instinct should be to look there in the same time of reading the official doc of what you are working with.

## Getting Started

The "blank-slate" part of the guide assumes you have a computer that you are ready to **fully wipe-out** or that you have already prepared a partition on your drive. I will not cover the specifics of setting up a dual-boot, even though it is mostly the same. Remark, your drive doesn't actually need to be empty, the Arch installation process can take care of wiping-it for you.

Once you have your drive ready, you'll need an install image! Chances are, you
probably already have this and may even have written it to a USB drive of some
sort. On the off chance you haven't, the [Arch install image] is available on
their website.

It's also recommended that you follow the instructions on the download page
in the **Download verification** section. Verification ensures that both your
image downloaded without corruption, and that it was distributed from a known
authentic source. If either the `b2sum` or the signature fails, redownload from
a different mirror!

If you don't know how to write an ISO image to a USB drive, the ArchWiki
provides a thorough resource on the [USB flash installation medium] page which
covers creating a bootable USB drive on Linux, Windows, and Mac.

I recommend reading the ArchWiki so that you understand how writing an ISO works and what will happen. Once you understand how it works you can use [BalenaEtcher] (Windows, Mac and Linux) to more easily flash your ISO on your USB drive.

> ## Don't only rely on this
>
> Even though this guide will technically take you through the Arch installation it is again, **highly recomended**, to follow the official [Arch Installation Guide] in parallel. The installation part is mostly a simplified version of the wiki! On you can also ask for help and advice on the [Discord server].

## Starting the Installation

Once you have booted up your live image, you will be presented by a simple
terminal welcoming you to the Arch installation medium, and suggesting that
you verify your internet connection and run `archinstall`.

By default the layout will be `en-us` (qwerty). To change that do this:

```bash
# List all available layouts
localectl list-keymaps

# Set your layout
loadkeys <your-layout>
```

Verify you have internet access by running `ping ping.archlinux.org` (Ctrl+C
to stop the process). If it times out, you will need to use an ethernet cable
or manually setup your internet connection. For manual connection to the
wireless network you'll need to use [iwctl]. Here's how you can quickly do it:

```bash
# Find your wifi device
iwctl device list

# Power on your device
iwctl device <name-of-your-device> set-property Powered on

# Initiate a scan for networks (won't output anything)
iwctl station <name-of-your-device> scan

# List all available networks
iwctl station <name-of-your-device> get-networks

# Connect to the network
iwctl station <name-of-your-device> connect <network-SSID>

```

Once you are connected to the internet, run `archinstall`.

## Configuring your Installation

The Arch install script provides a simple terminal user interface that
effectively walks you through the install process. You can navigate it with
the *arrow keys*, *enter* and *escape* and select with spacebar. Most options are up to you,
but you'll need to choose a few specific things during the install process,
so follow along; I'll tell you when you need to pick something specific.

### Regional Configuration

The first few steps in the process allow you to set your language and locale,
and choose specific mirrors for your downloads. The default language and
locale are US English, but you are welcome to change these to suit your
geographic situation. Mirror selection is less important during the
installation, as the installer itself runs [Reflector], a tool that optimizes
the mirrorlist on demand.

### Disk Configuration

The next step is setting up your hard drive(s). The installer will offer to
create a best-effort default partition layout, and this may well be sufficient
for many users. Choosing a filesystem is also mostly up to you, though for new
users the most commonly recommended filesystem types are *btrfs* and *ext4*.
If you don't know what to choose, *ext4* is the default for many distros, and
is a good choice for your first install. In the next step, swap should be
enabled by default.

### Bootloader and Kernel Configuration

For this tutorial you'll need to select GRUB as your bootloader. The bootloader
is the first thing that shows up when you boot your computer and I'll later show
how to customise it. The default *linux* kernel is fine for most users.

### Hostname and Authentication

Choosing a hostname is entirely up to you. Your choice will have no bearing on
anything beyond what your computer calls itself, and what other computers on a
local network will see it as.

In the Authentication section, you'll want to do a few things. First off, set a
good password for the *root* account. Second, you'll need to add a new user
account because you shouldn't be using the root account directly for much of
anything. In fact, Wayland will complain if you try to launch a session as
root. Set the username and password to whatever makes you happy, this is what
you'll use to login. Then select the option to make your new user a superuser.
This will allow your user to run administrative commands.

### Profile Selection, Applications, and Networking

**Warning!** Even though Caelestia is built on Hyprland you should **not**
select the Hyprland profile and use the *Minimal* one instead. The Hyprland profile
is bundled with a few things that we don't want for Caelestia and so we'll install
hyprland later.

Under the Applications section, enable bluetooth if your computer supports it,
and set audio to *pipewire*. Under Network Config, we're going to choose
*Use Network Manager (default backend)*.

While the *Minimal* profile gives us a basic Arch install, there are a few
other packages you'll need in order to get Caelestia working, so we're going to
add them in the Additional Packages section. Add the following packages before
moving on: `fish`, `git`, `pybind11`, and `hyprland`. You can search for a package
with "/". Once all are selected, press *enter* to return to `archinstall`.

Finally, set your timezone to whatever is geographically accurate for you, and
hit the Install button! This might take a while depending of your internet connection.

## Rebooting into Arch

Once the installation is finished, you will be presented with a prompt asking
if you want to reboot. You do. When prompted, remove the installation medium
and when you reboot you will find yourself at a login prompt. Login as the
user you created during the install.

## Setting up your wireless connection

To go further you'll need to connect to the internet once again, if you're on
ethernet you can just skip this section.

For this we'll use [NetworkManager] that we selected earlier.

```bash
# List nearby WI-FI networks
nmcli device wifi list

# Connect to a network
nmcli device wifi connect <SSID> password <password>
```

## Installing Caelestia

Caelestia is generally fairly straightforward to install, though if any of the
subsequent steps cause issues please feel free to let @Evertiro know on the
[Discord server]. Run the following commands in order:

```bash
$ git clone https://github.com/caelestia-dots/caelestia.git ~/.local/share/caelestia
$ ~/.local/share/caelestia/install.fish --help
```

The install file will print its help information allowing you to see what you
can have it automatically install. For example, to include Zen browser, you
would include `--zen` in the install command:

```bash
$ ~/.local/share/caelestia/install.fish --zen
```

Installation will take a while, but assuming you have no errors, when the
installer finishes you should be able to boot into your new Caelestia install
simply by running `start-hyprland`. Congratulations! You have succesfully
installed Caelestia.

But this is far from a complete system. As stated at the beginning at this state
you still need to install a lot of things for your computer to be usable on a daily
basis.

> From now on, everything is purely optional and subject to personal preferences!

# Arch basics

## Packages

There are two main ways to install packages on Arch (you can think about them as apps) on your computer.
With the package manager, [pacman], or from the [Arch User Repository (AUR)].

> **Be careful with the AUR!** It is accessible to anyone, avoid downloading shady packages.

### Installing packages
With the package manager:
```bash
sudo pacman -S <your-package>
```

For the AUR you'll need to retrieve and then build the package you need. *But fear not!*
Fortunately there are AUR-helpers which do all of this for you! Here we'll use [yay].

## Display Manager

When booting your computer you are taken through a few screens. Firstly your bootloader
(GRUB in our case) and then, optionally, a Display Manager to select the user. For now
you'll always need to login in a terminal and run `start-hyprland`. Of course, this can
be changed. There are many different DMs and here we'll use SDDM which is easy to install
and has a lot of custom themes such as a Caelestia one!

[explainshell]: https://explainshell.com/
[Discord server]: https://discord.gg/BGDCFCmMBk
[ArchWiki]: https://wiki.archlinux.org
[Arch install image]: https://archlinux.org/download/
[USB flash installation medium]: https://wiki.archlinux.org/title/USB_flash_installation_medium
[Arch Installation guide]: https://wiki.archlinux.org/title/Installation_guide
[Reflector]: https://wiki.archlinux.org/title/Reflector
[BalenaEtcher]: https://etcher.balena.io/
[iwctl]: https://wiki.archlinux.org/title/Iwctl
[NetworkManager]: https://wiki.archlinux.org/title/NetworkManager#
[pacman]: https://wiki.archlinux.org/title/Pacman
[Arch User Repository (AUR)]: https://wiki.archlinux.org/title/Arch_User_Repository
[yay]: https://aur.archlinux.org/packages/yay