# Portfolio site

Static site — no build step. Files: `index.html`, `styles.css`, `script.js`.

## Deploy on your VPS (nginx)

1. Upload the three files to something like `/var/www/portfolio.andytalbert.com/`.
2. Add an nginx server block:

```nginx
server {
    listen 80;
    server_name portfolio.andytalbert.com;
    root /var/www/portfolio.andytalbert.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

3. `sudo nginx -t && sudo systemctl reload nginx`
4. Point DNS for `portfolio.andytalbert.com` at the VPS if not already done, then add TLS with `certbot --nginx -d portfolio.andytalbert.com`.

## Editing

- Colors, fonts, spacing all live at the top of `styles.css` in the `:root` block.
- Each app is one `<a class="card">` block in `index.html`, grouped under a `<section class="group">`. Copy/paste a card block to add a new project.
- The status dot on each card is a best-effort reachability check (`script.js`) — cosmetic only, safe to delete if you don't want it pinging every linked site on page load.
