const fs = require("fs");
const path = require("path");

function getFileTree(dirPath) {
  const stats = fs.statSync(dirPath);
  const name = path.basename(dirPath);

  if (stats.isDirectory()) {
    return {
      name,
      type: "directory",
      children: fs.readdirSync(dirPath)
        .filter(item => item !== "node_modules" && item !== ".git") // skip heavy or irrelevant folders
        .map(child => getFileTree(path.join(dirPath, child)))
    };
  } else {
    return {
      name,
      type: "file"
    };
  }
}

// Start from src folder
const rootDir = path.join(__dirname, "src"); // modify if you want to start from a different folder
const tree = getFileTree(rootDir);

// Output to JSON file
const outputPath = path.join(__dirname, "file-tree.json");
fs.writeFileSync(outputPath, JSON.stringify(tree, null, 2));

console.log(`📄 File tree written to ${outputPath}`);

// Test comment
// This file tells web crawlers (like Googlebot, Bingbot, etc.) how to handle the page. Here's what each directive means:

// 🔒 noindex
// Tells the bot not to index this page.

// That means the page won't show up in search engine results.

// 🚫 nofollow
// Tells the bot not to follow any links on the page.

// That means the crawler won’t pass any ranking value ("link juice") to other pages you’ve linked to from this page.

// ✅ Combined Effect:
// If a search engine respects this tag:

// Your page will not be indexed.

// None of the links on the page will be crawled or used to discover other pages.

// It adds a layer of protection against scraping or bots indexing your content — though it's not foolproof.

// ⚠️ Important:
// Bots must obey this for it to work — most major search engines do.

// This doesn't prevent access — it just tells crawlers what not to do.

// For stronger protection, also use server-level rules (robots.txt, HTTP headers, authentication, etc.).