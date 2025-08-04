---
id: virtual-lab.md
title: Virtual Lab
sidebar_position: 3
---

### Why a Virtual Lab?

Before deploying Suricata in a real-world environment, we build a **safe virtual lab** using **VirtualBox** or **VMware**. This provides:

- **Hands-on practice** without affecting real systems
- Safe environment to simulate attacks (with Kali Linux)
- Easy to snapshot, reset, or clone for repeated testing

---

### 🖥Lab Architecture

| **Machine**        | **Purpose**                                             |
|--------------------|---------------------------------------------------------|
| `Suricata IDS`     | Ubuntu Server running Suricata in IDS mode              |
| `Attacker`         | Kali Linux VM to simulate port scans, attacks, malware  |
| `Victim`           | Ubuntu Desktop or Windows to serve as a target          |
| `Optional`         | ELK Stack VM for visualization and log analysis         |

---

### What You’ll Need

- VirtualBox (https://www.virtualbox.org/) or VMware Workstation Player
- Ubuntu Server ISO: [Download](https://ubuntu.com/download/server)
- Kali Linux ISO: [Download](https://www.kali.org/get-kali/)
- Ubuntu Desktop or Windows ISO (optional victim machine)

---

### Steps to Set Up Virtual Machines

#### Step 1: Create VMs in VirtualBox

Repeat the steps below for each of the 3 machines.

- **Click New**
- Name: e.g., `Suricata-IDS`
- Type: **Linux**
- Version: **Ubuntu (64-bit)**
- Memory: **2048 MB** (minimum)
- Storage: **20 GB+**, dynamically allocated
- Mount ISO: Choose respective `.iso` to install

---

#### Step 2: Configure Network (for Inter-VM Traffic)

In **VM Settings → Network**:

- **Adapter 1**: `Host-only Adapter` *(for internal lab traffic)*
- **Adapter 2 (optional)**: `NAT` *(for internet access to download packages)*

💡 Make sure all VMs are using the **same host-only network** to communicate internally.

---

#### Step 3: Install Operating Systems

- Follow each OS’s installation prompts
- For Ubuntu Server, include **OpenSSH server** during install
- Create usernames/passwords
- Reboot and log in after installation

---

### (Optional) Create Snapshots

Once each VM is set up and updated, **create a snapshot** in VirtualBox.  
This allows you to **revert** easily if something breaks.

---

### Step 4: Test Inter-VM Connectivity

Start all machines and test the connection using their internal IPs:

```bash
# From Kali to Victim
ping <victim_ip>

# From IDS to Kali
ping <kali_ip>
```
You can find IPs using:
```bash
ip a
```
All VMs should be able to communicate over the host-only adapter.