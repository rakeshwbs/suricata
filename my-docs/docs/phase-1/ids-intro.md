---
id: ids
title: IDS
sidebar_position: 1
---
### What is an Intrusion Detection System (IDS)?

:::info IDS
An Intrusion Detection System (IDS) is a security tool used to monitor network or system activities for malicious behavior, policy violations, or unauthorized access.
:::
---
### Main Types of IDS
There are two main types:
| **Type**                     | **Description**                                                                            |Example|
| ---------------------------- | ------------------------------------------------------------------------------------------ |-------|
| **NIDS** (Network-based IDS) | Monitors network traffic on a specific segment or device.|Suricata, Snort. |
| **HIDS** (Host-based IDS)    | Monitors activity on an individual host (e.g., file changes, logs).|OSSEC, Wazuh.|
---
### Detection Methods
There are two detection methods:

| **Detection Type**  | **Explanation**                                                                                                                                |
| ------------------- |------------------------------------------------------------------------------------------------------------------------------------------------|
| **Signature-Based** | <ul><li>Detects **known threats** using ***predefined*** patterns (signatures). </li><li>Fast but blind to new threats. </li></ul>             |
| **Anomaly-Based**   | <ul><li>Learns normal behavior and **flags deviations**.</li><li> Good at detecting unknown threats but can cause false positives. </li> </ul> |
---
### Importance of IDS
- Monitors for attacks: like port scans, malware, brute force
- Helps incident response: logs who/when/how attacks happen
- Detects internal threats: not just perimeter defense
- Alerts before damage occurs
---
<details>
  <summary>Example</summary>

Let’s say a malicious user is scanning your network using a tool like nmap to find open ports.
An IDS like Suricata can detect this scanning pattern and alert you in real-time:

  ```bash
  [**] [1:2001219:9] ET SCAN Nmap Scripting Engine User-Agent Detected [**]
  ```
This alert can then be logged, visualized, and used for forensic analysis or response.
</details>
### IDS vs IPS

| **IDS**                         | **IPS**                         |
| ------------------------------- | ------------------------------- |
| *Intrusion Detection System*    | *Intrusion Prevention System*   |
| Only **detects** and alerts     | Can **block** malicious traffic |
| Passive (doesn’t alter traffic) | Active (can drop packets)       |

:::info Suricata
Suricata can operate as **both** an IDS and IPS depending on how you configure it.
:::

### Recap Points
- IDS = tool that watches for attacks
- Two types: NIDS (network) and HIDS (host)
- Two detection modes: Signature vs Anomaly
- Suricata = an example of a NIDS
- IDS only detects; IPS can block