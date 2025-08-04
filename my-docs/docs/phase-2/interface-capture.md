---
id: interface-capture
title: Capture Interface
sidebar_position: 2
---


Suricata needs to know **which network interface** to monitor. If you choose the wrong one, it may not capture any traffic, making your IDS ineffective.

---

### Step 1: Identify Available Interfaces

Use the following command:

```bash
ip a
```
You’ll see output like this:

```bash
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet 192.168.56.101/24 ...
```
In most VirtualBox/VMware Ubuntu setups, common interface names include:

- eth0

- enp0s3

 - ens33

Take note of the interface that has an IP address — that’s the one to monitor.

### Step 2: Test Interface with Tcpdump
Let’s verify that the interface is seeing traffic:
```bash
sudo apt install tcpdump
sudo tcpdump -i enp0s3
```
- If you see traffic scrolling, you're capturing data.
- Press Ctrl+C to stop
<details>
<summary>Optional: Check with Suricata's --list-interfaces</summary>

```bash
sudo suricata --list-interfaces
```
This may give you a list of usable interfaces, especially helpful in multi-NIC systems.
</details>

### Step 3: Simulate Traffic
From your Kali VM, ping the Victim or IDS:
```bash
ping <Victim_IP>
```
Back on the IDS:
```bash
sudo tcpdump -i enp0s3 icmp
```
You should see ICMP (ping) packets if the correct interface is selected.

## Recap
- Use ip a to find the correct network interface 
- Verify it sees traffic using tcpdump 
- This interface will be used in future Suricata commands like:
```bash
sudo suricata -c /etc/suricata/suricata.yaml -i enp0s3
```
