# Deployment Guide - Clean URLs (No .html Extension)

This guide explains how to configure your server to hide `.html` extensions from URLs, so visitors see clean URLs like `/about` instead of `/about.html`.

## Option 1: Apache Server (.htaccess)

If you're using Apache, the `.htaccess` file is already configured. Simply upload your files to your Apache server and the clean URLs will work automatically.

### Features:
- Removes `.html` extensions from URLs
- Redirects old `.html` URLs to clean URLs (301 redirect)
- Enables compression for better performance
- Sets browser caching for static files

## Option 2: Nginx Server

If you're using Nginx, use the `nginx.conf` file as a template:

1. Copy the configuration from `nginx.conf`
2. Replace `your-domain.com` with your actual domain
3. Replace `/path/to/your/website` with your actual website path
4. Add this configuration to your Nginx server block

## Option 3: Node.js Local Development

For local development or if you prefer Node.js:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. For development with auto-restart:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3000` with clean URLs enabled.

## Option 4: Other Servers

### For IIS (Windows):
Add this to your `web.config` file:
```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Remove .html extension">
          <match url="^(.*)\.html$" />
          <action type="Redirect" url="{R:1}" redirectType="Permanent" />
        </rule>
        <rule name="Add .html extension">
          <match url="^(.*)$" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="{R:1}.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### For Caddy Server:
Add this to your `Caddyfile`:
```
your-domain.com {
    root * /path/to/your/website
    file_server
    try_files {path} {path}.html
}
```

## Testing Clean URLs

After deployment, test these URLs:
- ✅ `/` (should show index.html)
- ✅ `/naabout` (should show naabout.html)
- ✅ `/nahome` (should show nahome.html)
- ✅ `/naprojects` (should show naprojects.html)
- ✅ `/naContact` (should show naContact.html)

Old URLs with `.html` will automatically redirect to clean URLs.

## Benefits

1. **Clean URLs**: More professional and user-friendly
2. **SEO Friendly**: Better for search engine optimization
3. **Future Proof**: Easier to change technology later
4. **Performance**: Includes compression and caching optimizations

## Troubleshooting

- **404 Errors**: Make sure your server supports URL rewriting
- **Infinite Redirects**: Check that your server configuration is correct
- **Static Files Not Loading**: Ensure CSS, JS, and image files are accessible

For support, check your server's documentation or contact your hosting provider. 