import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin


def scrape_links(base_url):
    visited = set()
    to_visit = [base_url]
    links = []

    while to_visit:
        current_url = to_visit.pop(0)
        if current_url not in visited:
            visited.add(current_url)
            try:
                response = requests.get(current_url)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')
                    links.append(current_url)

                    for link in soup.find_all('a', href=True):
                        full_url = urljoin(base_url, link['href'])
                        if base_url in full_url and full_url not in visited:
                            to_visit.append(full_url)
            except requests.exceptions.RequestException:
                continue

    return links


def generate_sitemap(urls, output_file):
    sitemap_content = ['<?xml version="1.0" encoding="UTF-8"?>',
                       '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">']

    for url in urls:
        sitemap_content.append('  <url>')
        sitemap_content.append(f'    <loc>{url}</loc>')
        sitemap_content.append('  </url>')

    sitemap_content.append('</urlset>')

    with open(output_file, 'w') as file:
        file.write('\n'.join(sitemap_content))


def main():
    base_url = "https://yourwebsite.com"  # Change to your site's base URL
    urls = scrape_links(base_url)

    output_file = os.path.join(os.getcwd(), 'sitemap.xml')
    generate_sitemap(urls, output_file)
    print(f"Sitemap generated: {output_file}")


if __name__ == "__main__":
    main()
