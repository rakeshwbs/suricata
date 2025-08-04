---
id: docusaurus-components
title: Docusaurus Component Cheat Sheet
sidebar_position: 99
hide_edit_link: true
---

# ✅ Docusaurus Component Cheat Sheet

---

## 📘 Admonitions (Tips, Warnings, Notes)

```md
:::tip Pro Advice
Use Suricata with `--af-packet` for optimal performance on Linux.
:::

:::warning
Make sure Suricata is not in promiscuous mode in production unless needed.
:::

:::info
This is useful for informational blocks with icons.
:::
```

---

## 🧩 Tabs & TabItems


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
  <TabItem value="linux" label="Linux" default>

  ```bash
  sudo apt install suricata
  ```

  </TabItem>
  <TabItem value="windows" label="Windows">

  ```powershell
  choco install suricata
  ```

  </TabItem>
</Tabs>
```

---

## 📂 Collapsible Sections (`<details>`)

```html
<details>
<summary>Click to expand</summary>

Suricata supports multiple runmodes including `autofp`, `workers`, and `single`.

</details>
```

---

## 💻 Syntax Highlighted Code Blocks

<pre>
&#96;&#96;&#96;bash
suricata -c /etc/suricata/suricata.yaml -i eth0
&#96;&#96;&#96;
</pre>

```bash
suricata -c /etc/suricata/suricata.yaml -i eth0
```

---

## 📝 Inline HTML (for grid layout, icons, etc.)

```html
<div style={{ display: "flex", gap: "2rem" }}>
  <div style={{ flex: 1 }}>
    <h3>Feature A</h3>
    <p>Fast packet inspection</p>
  </div>
  <div style={{ flex: 1 }}>
    <h3>Feature B</h3>
    <p>Open ruleset support</p>
  </div>
</div>
```

---

## 📚 Custom Title for Document (Frontmatter)

```md
---
id: install-guide
title: Installation Guide
sidebar_position: 1
hide_edit_link: true
---
```

---

## 📎 Link to another document

```md
[Go to Deployment Guide](./deployment.md)
```

---

## 🔧 Hide "Edit this page" (Per page)

```md
---
hide_edit_link: true
---
```