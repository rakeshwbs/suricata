#!/bin/bash

# Usage: ./create_md.sh <id> <sidebar_position>

# Ensure two arguments are passed
if [ $# -ne 2 ]; then
  echo "Usage: $0 <id> <sidebar_position>"
  exit 1
fi

# Assign arguments
input_id=$1
sidebar_pos=$2

# Transformations
id_lower=$(echo "$input_id" | tr '[:upper:]' '[:lower:]')
title_case=$(echo "${input_id:0:1}" | tr '[:lower:]' '[:upper:]')$(echo "${input_id:1}" | tr '[:upper:]' '[:lower:]')

# Create the markdown file
cat <<EOF > newfile.md
---
id: $id_lower
title: $title_case
sidebar_position: $sidebar_pos
---
EOF

echo "File '$1' created successfully."
