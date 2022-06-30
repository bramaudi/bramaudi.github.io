export const type = 'posts'
export const layout = 'layouts/post.njk'
export function url(page) {
	return `/${page.data.title.replace(/\//g, ' ')}/`;
}