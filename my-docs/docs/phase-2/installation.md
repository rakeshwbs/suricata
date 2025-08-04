---
id: installation.md
title: Installation
sidebar_position: 1
---

Before you can use Suricata for detection or monitoring, you need to install it on your Ubuntu Server VM. You have two main options:

1.  **Install from Ubuntu’s default repository** (older version)
2.  **Install from OISF’s official PPA** — get the **latest stable version**

### Prerequisites

:::info "Info"
It is highly recommended to use the official OISF PPA to get the latest stable version of Suricata, which includes the most recent features and security patches.
:::

-   **Ubuntu Server VM:** It is recommended to use a Long-Term Support (LTS) version, such as Ubuntu 22.04.
-   **Sufficient Resources:** Suricata is resource-intensive. For a basic lab setup, a minimum of 2 CPU cores and 4GB of RAM is recommended.
-   **Internet Access:** Your VM must have an internet connection to download packages and rules.
-   **Sudo Privileges:** You need an account with `sudo` access to perform the installation.

---

### Installation Steps

#### Step 1: Update your system

Start by updating your system's package list and upgrading any existing packages.

```bash
sudo apt update && sudo apt upgrade -y
```
#### Step 2: Add the Suricata PPA
To install the latest stable version, you need to add the official Suricata PPA to your system
```bash
sudo add-apt-repository ppa:oisf/suricata-stable
sudo apt update
```
:::warning Common Error
If you get a command not found error for add-apt-repository, you need to install the software-properties-common package first:
```bash
sudo apt install software-properties-common
```
Then, re-run the PPA command.
:::
#### Step 3: Install Suricata
Now, you can install Suricata using the apt package manager.
```Bash
sudo apt install suricata -y
```
This installation will place key files and directories in the following locations:
- Suricata binary: /usr/bin/suricata
- Configuration files: /etc/suricata/
- Log directory: /var/log/suricata/

#### Step 4: Confirm the installation
Verify that Suricata has been installed correctly and check its version and enabled features.

```bash
suricata --build-info
```

This command should output detailed information about the Suricata version and its compile-time options.
## Key Directories and Files
| **Path**             | **Contents**                                    |
| -------------------- | ----------------------------------------------- |
| `/etc/suricata/`     | Main config file (`suricata.yaml`), rules, etc. |
| `/var/log/suricata/` | Suricata logs (alerts, stats, events)           |
| `/usr/bin/suricata`  | Suricata binary executable                      |

## Check Your Network Interface
Before running Suricata, you need to identify the network interface you want to monitor.
```bash
ip a
```
Look for the active interface name (e.g., eth0, enp0s3, ens33) under the "UP" status. You will need this name for the configuration steps.

