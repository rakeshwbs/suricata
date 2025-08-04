---
id: custom-rules
title: Custom Rules
sidebar_position: 2
---


### Why Write Custom Rules?

Predefined rules (like Emerging Threats) are useful, but custom rules let you:

- Detect specific behaviors or patterns unique to your environment
- Simulate attacks in a lab
- Practice tuning and alert validation

---

### Step 1: Open Your Local Rules File

```bash
sudo nano /etc/suricata/rules/local.rules
```
---
### Step 2: Write a Simple HTTP Rule
Here’s a rule that alerts when someone visits a URL containing login:
```text
alert http any any -> any any (msg:"Login page access detected"; content:"login"; http_uri; sid:1000003; rev:1;)
```
Explanation:

- http protocol 
- content:"login" — searches for the word “login” in the HTTP URI 
- http_uri — restricts search to just the URI 
- sid:1000003 — unique ID 
- rev:1 — rule version

---
### Step 3: Reload Suricata Configuration
Before applying the rule, test your Suricata config:
```bash
sudo suricata -T -c /etc/suricata/suricata.yaml -v
```
Look for: Configuration provided is valid.  
Then restart the service:
```bash
sudo systemctl restart suricata
```
---

###  Step 4: Trigger the Rule

From another machine (e.g., Kali), run:
```text
curl http://<IDS_IP>/login
```
- This should trigger the rule if the packet is seen on the monitored interface.
---

### Step 5: Confirm Alert
Check the alerts in Suricata:
```bash
tail -f /var/log/suricata/fast.log
```
Expected output:
```text
[**] [1:1000003:1] Login page access detected [**]
```
---
### Step 6: Use Proper SID Management
- Keep custom SIDs ≥ 1000000
- Use a versioning system for rev
- Comment your rules for clarity