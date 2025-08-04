---
id: understand-rules
title: Understand Rules
sidebar_position: 1
---


### What Are Suricata Rules?

:::info Suricata Rules
Suricata rules define **what patterns to look for in network traffic**, and **what action to take** when a match is found.

They follow this basic syntax:

```text
<action> <protocol> <src_ip> <src_port> -> <dst_ip> <dst_port> ( <rule_options> )
