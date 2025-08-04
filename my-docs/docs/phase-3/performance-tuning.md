---
id: performance-tuning
title: Performance Tuning
sidebar_position: 3
---
### Why Tune Rules?

As rule sets grow, Suricata needs to process **thousands of rules per packet**.  
Tuning helps:

- Reduce false positives
- Improve CPU usage and throughput
- Focus detection on relevant traffic only

---

###  Techniques for Rule Tuning

####  1. Disable Unused Rules

If you’re not using a protocol or service, disable those rules:

```bash
sudo nano /etc/suricata/rules/disable.conf
```
Example:
```text
emerging-icmp.rules
emerging-voip.rules
```
---
#### 2. Use Thresholding
   Limit how often an alert can fire:
```text
threshold gen_id:1, sig_id:1000003, type:limit, track:by_src, count:1, seconds:60;
```
Explanation:

- Only alert once per source IP every 60 seconds

- Useful to reduce repetitive logs  
Add thresholds in:
```bash
/etc/suricata/threshold.config
```
And enable this file inside suricata.yaml:
```yaml
threshold-file: threshold.config
```
---
##### 3. Use Flow Keywords
Restrict rules to only relevant traffic direction:
| **Keyword**   | **Meaning**                         |
| ------------- | ----------------------------------- |
| `to_server`   | Traffic from client to server       |
| `to_client`   | Response from server to client      |
| `established` | Only match established TCP sessions |
Example:
```text
alert tcp any any -> any 80 (msg:"Web Access"; flow:to_server,established; content:"GET"; http_method; sid:1000004; rev:1;)
```
---
#### 4. Content Matching Optimization
Combine multiple content matches to reduce false positives:
```text
alert http any any -> any any (msg:"Suspicious Login Attempt"; content:"login"; http_uri; content:"password"; http_client_body; sid:1000005; rev:1;)
```
---
#### 5. Rule Profiling (Advanced)
Enable profiling in suricata.yaml:
```yaml
profiling:
  rules:
    enabled: yes
    filename: rule_perf.log
    append: yes
```
This generates performance stats per rule:
```bash
cat /var/log/suricata/rule_perf.log
```
Helps identify slow or high-cost rules.