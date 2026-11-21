// Fails the build when a markdown image or clip has no alt text, e.g. `![](./x.jpg)`.
// Blind and low-vision visitors only get what the alt text says, so a missing
// one must never reach the live site. Write it as `![One line describing it](./x.jpg)`.
export default function remarkRequireAlt() {
  return (tree, file) => {
    const missing = [];
    const visit = (node) => {
      if (node.type === 'image' && !node.alt?.trim()) {
        missing.push(`${node.url} (line ${node.position?.start.line ?? '?'})`);
      }
      node.children?.forEach(visit);
    };
    visit(tree);
    if (missing.length) {
      const where = file?.path || file?.history?.[0] || 'markdown file';
      throw new Error(`Missing alt text in ${where}:\n  ${missing.join('\n  ')}`);
    }
  };
}
