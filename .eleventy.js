const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(config) {
    config.addPlugin(syntaxHighlight);
    config.addPassthroughCopy("assets");

    config.addShortcode("formatDate", function(value, format) {
        return DateTime.fromJSDate(value).toFormat(format);
    });

    config.addPairedShortcode(
        'footnoteref',
        function footnoteref (content, id, description) {
          const key = this.page.inputPath
          const footnote = { id, description }
      
          FOOTNOTE_MAP[key] = FOOTNOTE_MAP[key] || {}
          FOOTNOTE_MAP[key][id] = footnote
      
          return `<a href="#${id}-note" id="${id}-ref" aria-describedby="footnotes-label" role="doc-noteref" class="Footnotes__ref">${content}</a>`
        }
    );

    config.addCollection("blogByYear", (collection) => {
        const posts = collection.getFilteredByTag('blog').reverse();
        const years = posts.map(post => post.date.getFullYear());
        const uniqueYears = [...new Set(years)];
      
        const postsByYear = uniqueYears.reduce((prev, year) => {
          const filteredPosts = posts.filter(post => post.date.getFullYear() === year);
      
          return [
            ...prev,
            [year, filteredPosts]
          ]
        }, []);
      
        return postsByYear;
    });

    const markdownLib =  markdownIt({
        html: true, // Enable HTML tags in source
        breaks: true,  // Convert '\n' in paragraphs into <br>
        linkify: true // Autoconvert URL-like text to links
    }).use(markdownItFootnote);
    // set the library to process markdown files
    config.setLibrary("md", markdownLib);

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src"
        }
    }
}