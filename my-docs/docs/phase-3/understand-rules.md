---
id: understand-rules
title: Understand Rules
sidebar_position: 1
---


### What Are Suricata Rules?

:::info Suricata Rules
Suricata rules define **what patterns to look for in network traffic**, and **what action to take** when a match is found.
:::
They follow this basic syntax:

```text
<action> <protocol> <src_ip> <src_port> -> <dst_ip> <dst_port> ( <rule_options> )
```
###  Rule Components Explained
| **Component** | **Description**                                              |
| ------------- | ------------------------------------------------------------ |
| `alert`       | Action: tells Suricata to log an alert when the rule matches |
| `tcp`         | Protocol (can be `udp`, `icmp`, etc.)                        |
| `any any`     | Source IP and port                                           |
| `->`          | Direction of traffic                                         |
| `any 80`      | Destination IP and port                                      |
| `(msg:...)`   | Rule options like message, ID, and revision number           |

### Common Rule Actions
| **Action** | **Effect**                                    |
| ---------- | --------------------------------------------- |
| `alert`    | Generates an alert (used in IDS mode)         |
| `drop`     | Drops the packet (used in IPS mode)           |
| `reject`   | Drops and sends TCP reset or ICMP unreachable |
| `pass`     | Ignores the packet (no further checks)        |

#### Basic Rule Options
| **Option**  | **Description**                         |
| ----------- | --------------------------------------- |
| `msg`       | Message shown in alert                  |
| `sid`       | Unique Signature ID                     |
| `rev`       | Rule revision number                    |
| `content`   | Match specific string in packet payload |
| `http_uri`  | Match content in HTTP URI               |
| `flow`      | Define direction (e.g., `to_server`)    |
| `threshold` | Limit alert frequency                   |

### SID and REV Best Practices
- sid must be unique (use 1000000+ for custom rules)
- rev should be incremented when you update the rule

### Sample Rule for ICMP
```bash
alert icmp any any -> any any (msg:"ICMP ping detected"; sid:1000002; rev:1;)
```
It will alert whenever any ICMP packet is seen (like ping).

