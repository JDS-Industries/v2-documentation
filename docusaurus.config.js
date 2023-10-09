// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Welcome to v2-Documentation',
	tagline: 'With the power of Lintatorship, anything is achieveable',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://your-docusaurus-test-site.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/', 

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'JDS-Industries', // Usually your GitHub org/user name.
	projectName: 'v2-documentation', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
            'https://github.com/JDS-Industries/v2-documentation/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
            'https://github.com/JDS-Industries/v2-documentation/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    	navbar: {
    		title: 'JDS Docs',
    		logo: {
    			alt: 'My Site Logo',
    			src: 'https://res.cloudinary.com/business-products/image/upload/f_auto,q_auto/v1674774536/v2/logos/jds-logo-icon-only_sevd52.svg'
    		},
    		items: [
    			{
    				type: 'docSidebar',
    				sidebarId: 'gitSidebar',
    				position: 'left',
    				label: 'Git'
    			},
    			{
    				type: 'docSidebar',
    				sidebarId: 'mrcSidebar',
    				position: 'left',
    				label: 'Mrc'
    			},
    			{
    				href: 'https://github.com/JDS-Industries/',
    				label: 'GitHub',
    				position: 'right'
    			}
    		]
    	},

    	footer: {
    		style: 'dark',
    		links: [
    			{
    				title: 'Docs',
    				items: [
    					{
    						label: 'Tutorial',
    						to: '/docs/index'
    					}
    				]
    			},
    		],
    	}
    }),

	plugins: [require.resolve('docusaurus-lunr-search')]
}

module.exports = config
