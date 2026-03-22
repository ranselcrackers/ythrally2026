# YTH Rally 2026 — Google Apps Script Setup Guide

---

## What this does

- Every registration submitted on the website gets saved as a row in your Google Sheet
- GCash receipts uploaded by registrants get saved automatically to a Google Drive folder called **"YTH Rally 2026 — GCash Receipts"**
- Each receipt is named **RECEIPT NO. YTH26-XXXXXX.ext** matching the reference number
- The sheet shows a clickable hyperlink in the **GCash Receipt** column that opens the file in Drive

---

## Step 1 — Open Apps Script

1. Open your spreadsheet:  
   https://docs.google.com/spreadsheets/d/1LlssAXdQM2p2pYbCi1eoM4_CIIZQUgOFxSF9Zdr5aY8/edit

2. Click **Extensions → Apps Script** in the menu bar

3. A new tab opens with the Apps Script editor

---

## Step 2 — Paste the script

1. Delete everything in the editor (the default `function myFunction(){}`)
2. Copy the entire contents of **Code.gs** (the file provided alongside this guide)
3. Paste it into the editor
4. Click the **Save** icon (or press `Ctrl+S` / `Cmd+S`)
5. Name the project: `YTH Rally 2026 Registration`

---

## Step 3 — Run manualSetup (format the sheet first)

1. In the editor toolbar, click the **function dropdown** (shows `Select function`)
2. Choose **`manualSetup`**
3. Click the **Run ▶** button
4. First run will ask for **permissions** — click **Review permissions → Allow**
5. Go back to your spreadsheet — you should see a **"Registrations"** sheet tab with formatted headers

> ✅ The sheet tab will be black, headers white, columns pre-sized. Done.

---

## Step 4 — Deploy as Web App

1. In Apps Script, click **Deploy → New deployment**
2. Click the **gear icon** next to "Select type" and choose **Web app**
3. Fill in:
   - **Description:** `YTH Rally 2026 v1`
   - **Execute as:** `Me` (your Google account)
   - **Who has access:** `Anyone` ← **This is required** so the website can post to it
4. Click **Deploy**
5. Google will ask for permissions again — click **Authorize access → Allow**
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
   ```

---

## Step 5 — Paste the URL into the website

Open `index.html` and find this line near the top of the `<script>` block:

```javascript
var APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
```

Replace `YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with the URL you copied:

```javascript
var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXX.../exec';
```

Save the file. You're done.

---

## Step 6 — Test it

1. Open the website and fill out a full test registration
2. Choose **GCash**, scan/pretend to pay, upload any screenshot image
3. Click **Submit Registration**
4. Check your spreadsheet — a new row should appear within a few seconds
5. Check Google Drive — look for a folder called **"YTH Rally 2026 — GCash Receipts"** with your uploaded file inside, named `RECEIPT NO. YTH26-XXXXXX.jpg` (or whatever extension)
6. Click the hyperlink in the **GCash Receipt** column — it should open the file

---

## What each column looks like

| Column | Content | Styling |
|---|---|---|
| REF NO. | YTH26-XXXXXX | Bold |
| TIMESTAMP | Mar 22, 2026 07:20 AM | — |
| LAST NAME | DELA CRUZ | CAPS |
| FIRST NAME | JUAN | CAPS |
| PAYMENT METHOD | CASH or GCASH | Color-coded (green = GCash, gold = Cash) |
| ACCOMMODATION | YES / NO | Blue highlight if Yes |
| GCASH RECEIPT | Clickable hyperlink → Drive file | Blue link |

---

## Re-deploying after edits

If you ever edit the Apps Script code, you must **redeploy** for changes to take effect:

1. Apps Script → **Deploy → Manage deployments**
2. Click the **pencil icon** on your existing deployment
3. Change version to **"New version"**
4. Click **Deploy**

> The URL stays the same — no need to update `index.html` again.

---

## Troubleshooting

**Registration submits but nothing appears in the sheet**  
→ Check that you deployed with **Who has access: Anyone**  
→ Check that `APPS_SCRIPT_URL` is correctly pasted (no extra spaces)

**"Something went wrong" error on submit**  
→ Open Apps Script → **Executions** tab to see the error log

**File uploaded but Drive link is broken**  
→ The file sharing is set to "Anyone with link can view" — make sure you haven't changed Drive sharing settings

**Want to reset/reformat the sheet**  
→ Run `manualSetup` from the editor again anytime
