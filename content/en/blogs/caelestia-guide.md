---
title: "Caelestia Guide for Linux Beginners"
date: 2026-04-16T00:00:00+00:00 # Or your local timezone
draft: true
tags: ["caelestia", "linux"]
categories: ["tutorials"]
description: "How to go from a blank-slate to a fully functionning Caelestia."
---

So Caelestia looks cool and you want it. Great! Whether you never touched Linux or want to switch from a simpler distro, this tutorial might help you.

As of lately, a lot of new people come to the [official Caelestia Discord server](https://discord.gg/2Rzj3WGjRQ) wanting to *install* Caelestia even though it is still very much in developement and going through many iterations. And we are not only talking about experienced Linux users of course, there are also many people like you and me who want to directly try to setup Caelestia with little to no Linux experience.

The goal of this tutorial is to take you from almost any personal computer, to a usable computer with Caelestia for everyday life, with more or less quality of life features. I will start by explaining a few concepts around Caelestia so that you understand exactly *what* you are getting yourself into and will then explain things along the way.

**THIS IS NOT THE ULTIMATE TUTORIAL!** This tutorial is based on my experience and preferences.It is not official and it will bring you through installing Caelestia but also some additional utilities and QoL that are not linked in any way to Caelestia and it's devs. I'll do my best to make it clear when something is optional or not as well as redirecting to the official docs.

> ## A Note on Safety
>
> One very important warning that you'll see in many places and that I'll repeat here: If you don't know what a command does, as a general rule don't run it! Users are encouraged to check out what a command they aren't familiar with does before actually running it. [explainshell] is a great resource for this.

## Basic knowledge requirements

### What is Caelestia?

Caelestia is a combination of a custom shell and it's dotfiles using Arch... in simpler terms: It is all the code and configurations that bring your computer from a Linux terminal to the cool computer interface you have seen in the demos. But it is *only* that, meaning that it does not include a login screen nor a way to use a usb drive or anything to correctly use your graphics cards. This is part of the Linux philosophy, which Arch Linux follows closely.

### What is Arch?

I recommend you to go inform yourself on what is Arch with one of the multiple online resources, but what you need to understand is that it is a very free and hands-on experience. You can do anything you want as long as you know how to do it, and the knowing is quite hard. Your best friend for this will be the [ArchWiki](https://wiki.archlinux.org), if you have any doubts on how something works, your first instinct should be to look there in the same time of reading the official doc of what you are working with.

## Getting Started

The "blank-slate" part of the guide assumes you have a computer that you are ready to **fully wipe-out** or that you have already prepared a partition on your drive, I will not cover the specifics of setting up a dual-boot, even though it is mostly the same. Remark, your drive doesn't actually need to be clean, the Arch installation process can take care of that for you.

Once you have your drive ready, you'll need an install image! Chances are, you
probably already have this and may even have written it to a USB drive of some
sort. On the off chance you haven't, the [Arch install image](https://archlinux.org/download/) is available on
their website.

It's also recommended that you follow the instructions on the download page
in the **Download verification** section. Verification ensures that both your
image downloaded without corruption, and that it was distributed from a known
authentic source. If either the `b2sum` or the signature fails, redownload from
a different mirror!

If you don't know how to write an ISO image to a USB drive, the ArchWiki
provides a thorough resource on the [USB flash installation medium](https://wiki.archlinux.org/title/USB_flash_installation_medium) page which
covers creating a bootable USB drive on Linux, Windows, and Mac.

I recommend reading the ArchWiki so that you understand how writing an ISO works and what will happen but once you understand how it works you can use [BalenaEtcher](https://etcher.balena.io/) (Windows, Mac and Linux) to more easily flash your ISO on your USB drive.

> ## Don't only rely on this
>
> Even though this guide will technically take you through the Arch installation it is again, **highly recomended**, to follow the official [Arch Installation Guide](https://wiki.archlinux.org/title/Installation_guide) in parallel.

## Starting the Installation

Once you have booted up your live image, you will be presented by a simple
terminal welcoming you to the Arch installation medium, and suggesting that
you verify your internet connection and run `archinstall`. Verify you have
internet access by running `ping ping.archlinux.org`. If it times out, you
will need to manually setup your internet connection. For assistance with
manual setup, start with section 1.7 of the [Arch Installation guide], or
ask for help on our [Discord server].

Once you are connected to the internet, run `archinstall`.

## Configuring your Installation

The Arch install script provides a simple TUI that effectively walks you
through the install process. Most options are up to you, but we're going
to choose a few specific things during the install process, so follow along;
we'll tell you when you need to pick something specific.

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

The Arch installer usually defaults to using GRUB for its bootloader. If it
doesn't, it's recommended that you change it to GRUB unless you know what you
are doing or have a specific need not met by GRUB. Similarly, the default
*linux* kernel is fine for most users.

### Hostname and Authentication

Choosing a hostname is entirely up to you. Your choice will have no bearing on
anything beyond what your computer calls itself, and what other computers on a
local network will see it as.

In the Authentication section, you'll want to do a few things. First off, set a
good password for the *root* account. Second, we're going to add a new user
account because you shouldn't be using the root account directly for much of
anything. In fact, Wayland will complain if you try to launch a session as
root. Set the username and password to whatever makes you happy, then select
the option to make your new user a superuser. This will allow your user to run
administrative commands.

### Profile Selection, Applications, and Networking

Caelestia is built on Hyprland, so you want the Hyprland profile, right? Wrong!
The Hyprland profile bundles its own opinionated things and doesn't *quite*
line up with our needs. Instead, choose the *Minimal* profile.

Under the Applications section, enable bluetooth if your computer supports it,
and set audio to *pipewire*. Under Network Config, we're going to choose
*Use Network Manager (default backend)*.

While the *Minimal* profile gives us a basic Arch install, there are a few
other packages you'll need in order to get Caelestia working, so we're going to
add them in the Additional Packages section. Add the following packages before
moving on: `fish`, `git`, `pybind11`, and `hyprland`. Once all are selected,
press *enter* to return to `archinstall`.

Finally, set your timezone to whatever is geographically accurate for you, and
hit the Install button!

## Rebooting into Arch

Once the installation is finished, you will be presented with a prompt asking
if you want to reboot. You do. When prompted, remove the installation medium
and when you reboot you will find yourself at a login prompt. Login as the
user you created during the install, and once again ensure you have internet
access.

## Installing Caelestia

Caelestia is generally fairly straightforward to install, though if any of the
subsequent steps cause issues please feel free to let @Evertiro know on our
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
simply by running `start-hyprland`. Congratulations!

Obviously, this is far from a complete system; a display manager would be nice,
and there are tons of other "necessary" apps that you'll want to install.
However, much of that is subjective, so not covered by this guide. If you are
now looking at a pretty Caelestia install, you're at a point where we can
more easily help you figure out the rest on Discord. If you ran into an error,
please ping @Evertiro on our [Discord server] and he'll help you figure out
how to work through it and improve this guide for the next person!

**Welcome to Caelestia!**

[explainshell]: https://explainshell.com/
[Discord server]: https://discord.gg/BGDCFCmMBk
[Arch install image]: https://archlinux.org/download/
[USB flash installation medium]: https://wiki.archlinux.org/title/USB_flash_installation_medium
[Arch Installation guide]: https://wiki.archlinux.org/title/Installation_guide
[Reflector]: https://wiki.archlinux.org/title/Reflector
