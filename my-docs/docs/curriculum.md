---
id: curriculum
title: Curriculum
sidebar_position: 1
---

### ✅ PHASE 1 – **Foundations of IDS and Virtual Lab Setup**

> Objective: Understand basic IDS concepts and build your virtual lab environment.

1. **What is an IDS?**

    * Types: Network-based (NIDS), Host-based (HIDS)
    * Signature-based vs Anomaly-based detection
    * Difference between IDS and IPS

2. **Intro to Suricata**

    * What is Suricata?
    * Features vs Snort
    * Real-world usage scenarios

3. **Virtual Lab Setup**

    * Tools: VirtualBox or VMware
    * Install Ubuntu Server on a VM
    * Configure networking modes (NAT vs Bridged vs Host-only)

4. **Basic Linux Skills**

    * File system navigation
    * apt, systemctl, networking basics
    * Editing files using `nano` or `vim`

---

### ✅ PHASE 2 – **Installing and Running Suricata**

> Objective: Deploy Suricata on Ubuntu and validate its functionality.

5. **Suricata Installation**

    * Install from Ubuntu repo or source
    * Validate installation using `suricata --build-info`

6. **Capture Interfaces**

    * Use `ip a` to identify interfaces
    * Configure Suricata to monitor correct NIC

7. **Running Suricata in IDS Mode**

    * Run Suricata as a daemon
    * Use `suricata -c /etc/suricata/suricata.yaml -i eth0`

8. **Basic Rule Testing**

    * Default Emerging Threats rules
    * Generate traffic using `ping`, `nmap`, or `curl`
    * Check `/var/log/suricata/fast.log`

---

### ✅ PHASE 3 – **Rule Writing and Customization**

> Objective: Learn to write your own Suricata rules and tune alerts.

9. **Understanding Suricata Rules**

    * Rule syntax: action, header, options
    * Example: alert tcp any any -> any 80 (msg:"HTTP Request"; sid:100001;)

10. **Creating Custom Rules**

* Write and place rules in `local.rules`
* Reload Suricata with new rules

11. **Rule Performance Tuning**

* Rule grouping, `sid-msg.map`
* Use `rule profiling` to measure performance

---

### ✅ PHASE 4 – **Traffic Analysis and Logging**

> Objective: Analyze network traffic and interpret logs for investigation.

12. **Types of Logs**

* fast.log, eve.json, stats.log, alerts.log

13. **EVE JSON Format**

* Enable and parse `eve.json` for structured output
* Use `jq` or scripts to extract data

14. **Traffic Replay**

* Use `tcpreplay` and PCAPs for simulated attacks
* Verify alert generation

15. **PCAP Analysis**

* Wireshark basics
* Match PCAP traffic to Suricata alerts

---

### ✅ PHASE 5 – **Integrating ELK Stack**

> Objective: Visualize Suricata logs using Elasticsearch, Logstash, and Kibana.

16. **Intro to ELK**

* Architecture: Beats → Logstash → Elasticsearch → Kibana

17. **Install ELK Stack**

* Configure Logstash to ingest Suricata’s `eve.json`
* Create dashboards in Kibana

18. **Filtering and Parsing Logs**

* GROK filters for Suricata fields
* Tag and group alerts by source IP, destination, protocol

---

### ✅ PHASE 6 – **Performance Tuning and Hardening**

> Objective: Optimize Suricata and system performance for real-world deployment.

19. **Tuning Suricata**

* Threading: `detect-thread-ratio`
* AF\_PACKET vs NFQUEUE modes
* Ring buffer size and flow timeouts

20. **Hardware Considerations**

* NIC offloading
* High-throughput capture setups (DPDK, PF\_RING)

21. **Security Hardening**

* Isolate Suricata in its own user
* Disable unused services, restrict permissions

---

### ✅ PHASE 7 – **SIEM Integration and Incident Response**

> Objective: Use Suricata with SIEM for enterprise-level threat management.

22. **SIEM Overview**

* Examples: Splunk, Wazuh, Graylog

23. **Integrate Suricata with Wazuh**

* Use Filebeat/Logstash to feed alerts to Wazuh
* Configure rules for alerts and escalations

24. **Threat Hunting**

* IOC matching, rule correlation
* Build playbooks for response

25. **Incident Handling**

* Log preservation
* Reporting and escalation procedures

---

### ✅ PHASE 8 – **Advanced Threat Detection and Research**

> Objective: Expand detection capabilities and contribute to the Suricata ecosystem.

26. **Suricata Lua Scripts**

* Enhance detection with custom logic
* Use Suricata’s Lua API

27. **Machine Learning + Suricata**

* Feed alerts into ML pipelines
* Anomaly detection via external tools

28. **Contribute to Rule Feeds**

* Submit rules to ET Open
* Join OISF community

---

Would you like to begin with **Phase 1: What is an IDS?**
👉 Say **“next”** to begin.
