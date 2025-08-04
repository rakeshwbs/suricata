---
id: run-ids
title: Run IDS
sidebar_position: 3
---

### 🧠 What is IDS Mode?

Running Suricata in **IDS mode** means it will **monitor and analyze** packets **passively** without blocking them.  
It will **log alerts** for suspicious activity but **won’t interfere** with the traffic.

---

### Step 1: Dry Run Check (Validate Config)

Before launching Suricata, test the configuration:

```bash
sudo suricata -T -c /etc/suricata/suricata.yaml -v
```
✅ Look for: Configuration provided is valid.
❌ If not, fix the errors shown before proceeding.

### Step 2: Run Suricata in IDS Mode
Use the -i flag to specify your monitoring interface (e.g., enp0s3):
```bash
sudo suricata -c /etc/suricata/suricata.yaml -i enp0s3
```
You should see output like:
```bash
<Notice> -- all 15 packet processing threads, 4 management threads initialized...
<Notice> -- Suricata engine started.
```
Leave it running while you generate traffic (e.g., with ping, curl, nmap).
### Step 3: View Logs
Suricata logs are stored in:

- Alerts: /var/log/suricata/fast.log

- JSON logs: /var/log/suricata/eve.json

To view alerts in real time:
```bash
tail -f /var/log/suricata/fast.log
```
#### Test with ICMP or HTTP
From another VM:
```bash
ping <IDS_IP>
curl http://<IDS_IP>
```
You may see alerts in fast.log depending on the active rule set.

<details>
<summary>Optional: Run Suricata as a Systemd Service</summary>

To enable Suricata to auto-start and run in the background:
```bash
sudo systemctl enable suricata
sudo systemctl start suricata
```
##### Check Status:
```bash
sudo systemctl status suricata
```
##### Stop:
```bash
sudo systemctl stop suricata
```
</details>