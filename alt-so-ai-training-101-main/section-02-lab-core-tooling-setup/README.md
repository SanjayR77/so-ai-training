# Lab Exercise: Setting Up VS Code, Git, and GitHub Copilot

## Overview

This lab walks you through a complete, step-by-step setup of **Visual Studio Code**, **Git**, and **GitHub Copilot**. By the end, you will have a working local development environment and understand the basics of version control and AI-assisted coding. Additionally you will create your initial Context Hub folder structure.

---

## Lab Objectives

By completing this lab, you will be able to:

- Install and configure Visual Studio Code (VS Code)
- Install and verify Git
- Understand basic Git concepts and commands
- Request, install, and activate GitHub Copilot in VS Code
- Create your initial Context Hub folder structure in VSCode

---

## Prerequisites

- A company-issued laptop
- Internet access
- A GitHub account associated with your work email

---

## Part 1: Install Visual Studio Code

### Step 1: Download VS Code

1. Open a web browser.
2. Go to: <https://code.visualstudio.com/>
3. Download the version for your operating system:
   - **Mac**: Download the macOS version (`.zip`)
   - **Windows**: Download the Windows version (`.exe` installer)

### Step 2: Install VS Code

**Mac:**
1. Locate the downloaded `.zip` file.
2. Unzip the file.
3. Drag **Visual Studio Code.app** into your **Applications** folder.

**Windows:**
1. Locate the downloaded `.exe` installer.
2. Double-click the installer and follow the setup wizard.
3. Accept the default options (adding VS Code to PATH is recommended).

### Step 3: Launch VS Code

**Mac:**
1. Open **Applications**.
2. Double-click **Visual Studio Code**.
3. When prompted, allow VS Code to open.

**Windows:**
1. Open the **Start Menu**.
2. Search for **Visual Studio Code**.
3. Click to launch it, or use the desktop shortcut if one was created during install.

---

## Part 2: Make VS Code Friendly (Optional but Recommended)

### Step 4: Open the Extensions Panel

1. In VS Code, look at the left sidebar.
2. Click the **Extensions** icon (four stacked squares).

### Step 5: Install Recommended Extensions

Search for and install each of the following:

- **Material Icon Theme** – improves file and folder icons
- **One Dark Pro** – popular color theme
- **Prettier** – automatically formats code

### Step 6: Apply a Theme (Optional)

1. Open the Command Palette:
   - **Mac**: Press `Cmd + Shift + P`
   - **Windows**: Press `Ctrl + Shift + P`
2. Type **Color Theme**.
3. Select **One Dark Pro**.

---

## Part 3: Install and Configure Git

### Step 7: Check if Git Is Already Installed

**Mac:**
1. Open **Terminal** (Applications → Utilities → Terminal).
2. Run:
   ```bash
   git --version
   ```
3. If a version number appears, Git is installed.
4. If not, follow the prompts to install Git via Xcode Command Line Tools.

**Windows:**
1. Open **PowerShell** (press `Win + R`, type `powershell`, and press Enter).
2. Run:
   ```bash
   git --version
   ```
3. If a version number appears, Git is installed.
4. If not, download and install Git from: <https://git-scm.com/download/win>. Accept the default options during setup. Git for Windows also installs **Git Bash**, which supports the same commands used in this lab.

### Step 8: Configure Git (First-Time Setup)

Run the following commands, replacing the name and email with your own:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@company.com"
```

### Step 9: Verify Configuration

```bash
git config --list
```

Confirm your name and email appear in the output.

---

## Part 4: Git Fundamentals (Hands-On)

> **Windows users:** The commands below work in **PowerShell**, **Command Prompt**, or **Git Bash** (recommended, as it matches Mac/Linux behavior exactly).

### Step 10: Create a Practice Folder

```bash
mkdir git-lab
cd git-lab
```

### Step 11: Initialize a Git Repository

```bash
git init
```

### Step 12: Create a File

```bash
echo "Hello Git" > README.md
```

### Step 13: Check Repository Status

```bash
git status
```

### Step 14: Stage and Commit Changes

```bash
git add README.md
git commit -m "Initial commit"
```

### Step 15: View Commit History

```bash
git log
```

---

## Part 5: Request a GitHub Copilot License

### Step 16: Submit a License Request

1. Github Copilot licenses are available to request through the standard service now ticket flow.
2. Service Now URL: <https://slalom.service-now.com/help?id=ec_dashboard_2024>
3. Watch Outlook for a confirmation email.

---

## Part 6: Install GitHub Copilot in VS Code

### Step 17: Open Extensions in VS Code

1. Open VS Code.
2. Click the **Extensions** icon.

### Step 18: Install GitHub Copilot

1. Search for **GitHub Copilot Chat**.
2. Click **Install**.
3. Sign in to GitHub when prompted.

### Step 19: Verify Copilot Is Active

1. Open or create a file (for example, `test.js`).
2. Start typing a comment such as:

   ```javascript
   // create a function that adds two numbers
   ```

3. Observe Copilot suggestions appear in gray text.
4. Press `Tab` to accept a suggestion.

---

## Part 7: Initial Context Hub Folder Structure

In this section you will create the initial folder structure for your context hub. This will give you defined locations to put your context files, and give the AI destinations for where to put newly created output. Your folder structure can be arranged a number of ways but we suggested creating a section for context files (input), AI created artifacts (output), and instruction files. You can do this by hand, or ask the AI to help create it for you

### Option 1: Manual Creation

- Create a folder called 'output' in the file explorer section of VSCode (left side panel)
- Create any optional sub-divided folders you want within that original folder (common options are epics, stories, project documents, etc)
- Create a folder called 'input' in the file explorer 
- Create any optional sub-divided folders you want within that original folder (common options are meeting notes, mock ups, PRD's, etc)
- Create an 'instructions' folder
- For now I suggest leaving this section as a single folder. Your instructions will start off simple and there is no need to over-complicate this section before we've made anything.

### Option 2: AI Generated Creation

- Navigate to the chatbot pane on the right hand side of VSCode
- Under the Chat section (the area where you type) you should see two small dropdowns for selecting your model and the mode for the AI. Make sure GitHub Copilot is in "Agent" mode in the left side dropdown. For the model, I suggest using a Claude based model, but any of them will work for this use case.
- Next, prompt the AI to make the folder structure you want. I suggest playing around with your own prompt creation here, but in general a good starting place would be something like "I want to create a project that will allow me to make epics, stories, and project documents based on external context files. The files I provide will give context on my project details, and I want to use that context to make accurate output files. Create an empty folder structure to accomplish this goal. There should be three main sections. Input (my provided context files), output (AI generated documents made from that context), and instruction files (files used to define how that output should look and feel).

If the AI makes any files for you I suggest you ask it to remove them in a follow up prompt. This initial lab section is only desgined to give you the structure for following labs.

---

## Part 8: Wrap-Up and Next Steps

### What You Completed

- Installed VS Code
- Installed and configured Git
- Practiced core Git commands
- Installed and activated GitHub Copilot
- Created your initial Context Hub Folder structure

### Suggested Next Steps

- Read: [*Pro Git Book*](https://git-scm.com/book/en/v2) – Chapter 1
- Explore Git concepts such as `diff`, `.gitignore`, and undoing changes
- Practice using Copilot while writing real project code
- Play around with different prompts to see different structure the AI will create until you find one you like

---

✅ **Lab Complete**

---

**Next:** [Section 03 — Context Ingestion & AI-Assisted Synthesis](../section-03-lab-core-workflow/README.md)
