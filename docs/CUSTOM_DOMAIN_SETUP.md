# Custom Domain Setup for arkdengineers.com

This guide helps you configure DNS so users can reach the site via:
- **arkdengineers.com**
- **https://arkdengineers.com**
- **https://www.arkdengineers.com**
- **www.arkdengineers.com**

## 1. GitHub Repository Settings

1. Go to your repo: **Settings** → **Pages**
2. Under **Custom domain**, enter: `arkdengineers.com`
3. Click **Save**
4. Wait for DNS check, then enable **Enforce HTTPS**

GitHub will automatically redirect `www.arkdengineers.com` ↔ `arkdengineers.com` and serve over HTTPS.

## 2. DNS Configuration (at your domain registrar)

Add these records where you manage DNS for arkdengineers.com (e.g., GoDaddy, Namecheap):

### A Records (for apex domain: arkdengineers.com)

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

### CNAME Record (for www subdomain)

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| CNAME | www | aseempsri.github.io | 3600 |

> **Note:** Replace `aseempsri` with your GitHub username if different.

## 3. Propagation

DNS changes can take 5 minutes to 48 hours to propagate. You can check status at [dnschecker.org](https://dnschecker.org).

## 4. Verify

Once DNS propagates:
- Visit https://arkdengineers.com
- Visit https://www.arkdengineers.com
- Both should load with a valid HTTPS certificate.

---

## HTTPS Redirect

The site includes a client-side redirect that sends all traffic to **https://arkdengineers.com**:
- `http://arkdengineers.com` → `https://arkdengineers.com`
- `https://www.arkdengineers.com` → `https://arkdengineers.com`
- `http://www.arkdengineers.com` → `https://arkdengineers.com`
