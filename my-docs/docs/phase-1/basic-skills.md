---
id: basic-skills.md
title: Basic Skills
sidebar_position: 4
---


### Suricata and Linux

Suricata runs best on **Linux-based systems** like Ubuntu Server. Before we can install, configure, and monitor Suricata, we must understand some **essential Linux commands** and tools.

This will help you:

- Navigate the file system
- Manage services like Suricata
- Edit configuration and rule files
- View logs and debug issues

---

### 🖥️ Basic Linux Commands You Must Know

| Command               | Purpose                                | Example                                |
|-----------------------|----------------------------------------|----------------------------------------|
| `pwd`                 | Print current directory                | `pwd`                                  |
| `ls`                  | List files in a directory              | `ls -l /etc/suricata`                  |
| `cd`                  | Change directory                       | `cd /var/log/suricata`                 |
| `cat`, `less`, `tail` | View file contents                     | `less /etc/suricata/suricata.yaml`     |
| `nano`, `vim`         | Edit configuration files               | `nano /etc/suricata/suricata.yaml`     |
| `cp`, `mv`, `rm`      | Copy, move, or delete files            | `cp rule.rules rule.bak`               |
| `sudo`                | Run as superuser/root                  | `sudo apt update`                      |
| `apt`                 | Install and manage packages            | `sudo apt install suricata`           |
| `systemctl`           | Manage services (start/stop/restart)   | `sudo systemctl restart suricata`     |
| `ip a`, `ifconfig`    | View IP addresses and interfaces       | `ip a`                                 |
| `ping`, `curl`, `wget`| Test network and download files        | `ping 8.8.8.8`, `wget https://...`     |

---

### 🧪 Try This in Your Lab

1. **Log into your Ubuntu Server VM**
2. Run:

    ```bash
    pwd
    ls /etc
    cd /etc
    ls -l
    ```

3. **Edit a test file**:

    ```bash
    nano test.txt
    ```

   > Type something and press `CTRL+O`, then `Enter`, then `CTRL+X` to save and exit.

4. **View system logs**:

    ```bash
    sudo less /var/log/syslog
    ```

---

### 🛠️ Pro Tip for Editing Config Files

Use `nano` (easier for beginners) to edit `.yaml`, `.rules`, or `.conf` files:

```bash
sudo nano /etc/suricata/suricata.yaml
```
### Recap Points
- You need basic Linux CLI skills to manage Suricata
- Learn to navigate, edit files, view logs, and install packages
- Practice commands like cd, ls, nano, systemctl, and apt