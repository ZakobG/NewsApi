
export function generateNewsBox(title, description, author, publishedAt, sourcename) {
    let container = document.createElement('a');
    let header = document.createElement('h2');
    header.innerText = title;
    let desc = document.createElement('p');
    desc.innerText = description;
    let src = document.createElement('h5');
    src.innerText = "Published at " + publishedAt + " by " + author + " for " + sourcename;

    container.appendChild(header);
    container.appendChild(src);
    container.appendChild(desc);

    return container;
}