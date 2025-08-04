---
id: basic-rules
title: Basic Rules
sidebar_position: 4
---

### 🧠 Why Test Rules?

After setting up Suricata, you should **verify that it's detecting threats**.  
This involves using **built-in or custom rules** and generating **test traffic** that matches those rules.

---

### Step 1: Locate Your Rules

Suricata’s rules are usually in:

```bash
/etc/suricata/rules/
```
The default rule file is:
```bash
/etc/suricata/rules/suricata.rules
```
There may also be:
- local.rules: for custom rules
- emerging.rules: from Emerging Threats (ET)

### Step 2: Add a Test Rule
Open local.rules:
```bash
sudo nano /etc/suricata/rules/local.rules
```
Add this basic ICMP test rule:

```bash
alert icmp any any -> any any (msg:"ICMP Test Detected"; sid:100001; rev:1;)
```
Save and exit (CTRL+O, Enter, CTRL+X)
### Step 3: Include local.rules in Config
```bash
sudo nano /etc/suricata/suricata.yaml
```
Find the rule-files: section, and ensure it includes:

```bash
rule-files:
  - local.rules
```
Save and exit.

### Step 4: Test the Configuration
```bash
sudo suricata -T -c /etc/suricata/suricata.yaml -v
```
Check for "configuration provided is valid".
### Step 5: Run Suricata and Generate ICMP Traffic
Start Suricata (if not running):
```bash
sudo suricata -c /etc/suricata/suricata.yaml -i enp0s3
```
Then from another VM (e.g., Kali), run:
```bash
ping <IDS_IP>
```
### Step 6: View Alerts
Back on the IDS, check alerts:
```bash
tail -f /var/log/suricata/fast.log
```
You should see:
```bash
[**] [1:100001:1] ICMP Test Detected [**]
```
Your rule is working!
### Step 7: Stop Suricata
If running in the foreground:
```bash
CTRL + C
```
Or if using systemd:
```bash
sudo systemctl stop suricata
```
