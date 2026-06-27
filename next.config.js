/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/ebook.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Made For This Academy eBook.pdf"',
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
