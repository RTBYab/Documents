#!/bin/bash

set -e

# Define colors
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}🔍 Checking for outdated npm packages...${NC}"

# Check dependencies
if ! command -v npm >/dev/null 2>&1; then
  echo -e "${RED}❌ npm is not installed. Please install npm first.${NC}"
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo -e "${RED}❌ jq is not installed. Please install jq.${NC}"
  exit 1
fi

# Load exclude list if exists
EXCLUDE_FILE=".npm-update-exclude"
EXCLUDE_PACKAGES=()
if [ -f "$EXCLUDE_FILE" ]; then
  mapfile -t EXCLUDE_PACKAGES < "$EXCLUDE_FILE"
  echo -e "${YELLOW}⚙️  Excluding packages listed in ${EXCLUDE_FILE}:${NC}"
  for pkg in "${EXCLUDE_PACKAGES[@]}"; do
    echo -e "  - ${pkg}"
  done
fi

# Get outdated packages
outdated_json=$(npm outdated --json || true)

if [ -z "$outdated_json" ] || [ "$outdated_json" = "null" ]; then
  echo -e "${GREEN}✅ All packages are already up to date!${NC}"
  exit 0
fi

# Show major updates
major_updates=$(echo "$outdated_json" | jq -r 'to_entries[]
  | select((.value.latest | split(".")[0]|tonumber) > (.value.current | split(".")[0]|tonumber))
  | "\(.key) \(.value.current) \(.value.latest)"')

if [ -n "$major_updates" ]; then
  echo -e "\n${YELLOW}⚠️  Packages with MAJOR updates available:${NC}"
  printf "${CYAN}%-30s %-15s %-15s${NC}\n" "Package" "Current" "Latest"
  printf "%-30s %-15s %-15s\n" "------------------------------" "---------------" "---------------"
  while IFS= read -r line; do
    pkg=$(echo "$line" | awk '{print $1}')
    current=$(echo "$line" | awk '{print $2}')
    latest=$(echo "$line" | awk '{print $3}')
    printf "%-30s %-15s %-15s\n" "$pkg" "$current" "$latest"
  done <<< "$major_updates"
else
  echo -e "${GREEN}✅ No major updates found.${NC}"
fi

# Get minor/patch updates
minor_patch_packages=$(echo "$outdated_json" | jq -r 'to_entries[]
  | select((.value.latest | split(".")[0]|tonumber) == (.value.current | split(".")[0]|tonumber))
  | .key')

# Filter out excluded packages
PACKAGES_TO_UPDATE=()
if [ -n "$minor_patch_packages" ]; then
  echo -e "\n${CYAN}📦 Packages with minor/patch updates available:${NC}"
  for pkg in $minor_patch_packages; do
    if printf '%s\n' "${EXCLUDE_PACKAGES[@]}" | grep -Fxq "$pkg"; then
      echo -e "${YELLOW}⏭️  Skipping excluded package: ${pkg}${NC}"
    else
      echo -e "  - ${pkg}"
      PACKAGES_TO_UPDATE+=("$pkg")
    fi
  done

  if [ "${#PACKAGES_TO_UPDATE[@]}" -eq 0 ]; then
    echo -e "${YELLOW}⚠️  No packages left to update after exclusions.${NC}"
  else
    echo -ne "\n${YELLOW}❓ Do you want to update these packages? (y/n): ${NC}"
    read -r answer
    if [[ "$answer" =~ ^[Yy]$ ]]; then
      echo -e "\n${CYAN}⬆️  Updating packages...${NC}"
      for pkg in "${PACKAGES_TO_UPDATE[@]}"; do
        echo -e "${CYAN}Updating ${pkg}...${NC}"
        if npm install "$pkg"@latest; then
          echo -e "${GREEN}✅ Successfully updated ${pkg}${NC}"
        else
          echo -e "${RED}❌ Failed to update ${pkg}${NC}"
        fi
      done
    else
      echo -e "${YELLOW}⚠️  Update cancelled by user.${NC}"
    fi
  fi
else
  echo -e "${YELLOW}⚠️  No packages with minor/patch updates found to update.${NC}"
fi

echo -e "\n${GREEN}🎉 Update finished!${NC}"
